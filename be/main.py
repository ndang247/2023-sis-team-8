from typing import Union
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from models.models import Message, Answer, Search
from datetime import datetime
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson import ObjectId
from bson.errors import InvalidId
from dotenv import dotenv_values
import openai
import pandas as pd 

from ai.embedding import embedding_search_function
from ai.embedding.embedding_search_function import embedding_search
from ai.chatbot.chatbot_completion import get_response

secrets = dotenv_values(".env")
DB_USER = secrets["DB_USER"]
DB_PASSWORD = secrets["DB_PASSWORD"]
OPENAI_API_KEY = secrets["OPENAI_API_KEY"]

uri = f"mongodb+srv://{DB_USER}:{DB_PASSWORD}@cluster0.nbptbsx.mongodb.net/?retryWrites=true&w=majority"

app = FastAPI()

# Allow requests from all origins, change this in a production setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to a specific origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = MongoClient(uri, server_api=ServerApi("1"))
db = client["askUTSApp"]
col = db["messages"]


@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.post("/embedded_search")
async def search(prompt: Search):
    print(prompt)
    res = embedding_search_function.embedding_search(prompt.text, prompt.top_k)
    print("SUCCESSFULLY CALLED SEARCH FUNCTION WITH THIS RESULT: ")
    print(res.to_dict())
    return res.to_dict()

@app.post("/chat")
async def send_message(message: Message):
    # """ Deal with different timezones? """
    # if message.timeStamp.astimezone() > now.astimezone():
    #     raise HTTPException(
    #         status_code=400,
    #         detail="Invalid date! Provided timestamp: {0} is greater than current timestamp: {1}".format(
    #             message.timeStamp.strftime("%Y-%m-%d %H:%M:%S.%f %Z"),
    #             now.strftime("%Y-%m-%d %H:%M:%S.%f"),
    #         ),
    #     )

    if len(message.text) > 1000:
        raise HTTPException(
            status_code=400,
            detail="Message character limit exceeded: "
            + str(len(message.text))
            + " characters provided!",
        )

    if message.text:
        top_k=1
        res = embedding_search(message.text, top_k=top_k)

        # Define a function to truncate text to a maximum number of characters
        def truncate_to_max_characters(text, max_characters):
            if len(text) > max_characters:
                truncated_text = text[:max_characters]
            else:
                truncated_text = text
            return truncated_text

        # Get list of retrieved content
        contexts = [item["metadata"]["content"] for item in res["matches"]]
        shortened_contexts = [truncate_to_max_characters(context, max_characters=2000) for context in contexts]
        augmented_query = "\n\n---\n\n".join(shortened_contexts) + "\n\n-----\n\n" + message.text

        sim = []
        url = []
        for matches in res.to_dict()['matches']:
            sim.append(matches['score'])
            url.append(matches['id'])
            
        response = get_response(augmented_query)
        answer = Answer(
            message=message, 
            timeStamp=datetime.now(), 
            answer=response, 
            similarity=sim, 
            isURL=True, 
            answerURL=url
        )
        return answer
    else:
        raise HTTPException(status_code=400, detail="No message sent!")


@app.get("/chat_read")
async def read_message(message_id: Union[str, None] = None):
    filter = {"_id": 0}

    if message_id:
        # return individual response if message_id param provided
        try:
            objInstance = ObjectId(message_id)
            query = {"_id": objInstance}
            result = col.find_one(query, filter)

            if result is not None:
                return result
            else:
                # no results found
                raise HTTPException(
                    status_code=404, detail=f"'{message_id}' does not exist!"
                )
        except InvalidId as e:
            # invalid id provided
            print(e)
            raise HTTPException(
                status_code=400,
                detail=f"'{message_id}' is not a valid id, it must be a 12-byte input or a 24-character hex string",
            )
    else:
        # return all results in collection
        result = list(col.find({}))
        # ObjectId to str
        for document in result:
            document["_id"] = str(document["_id"])
        return result


@app.post("/chat_save")
async def save_response(answer: Answer):
    answer = jsonable_encoder(answer)
    result = col.insert_one(answer)
    created_message = col.find_one({"_id": result.inserted_id})
    created_message["_id"] = str(created_message["_id"])
    return JSONResponse(status_code=201, content=created_message)


try:
    client.admin.command("ping")
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
