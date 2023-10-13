from typing import Union
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware   # Importing the middleware
from models.models import Message, Answer
from datetime import datetime
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson import ObjectId
from bson.errors import InvalidId
from dotenv import dotenv_values
import pandas as pd

##Issues with importing modules from openai/embedding possibly due to naming package openai?
##Making a copy to be root as a temporary fix
from embedding_search_prototype import embedding_search

secrets = dotenv_values(".env")
DB_USER = secrets["DB_USER"]
DB_PASSWORD = secrets["DB_PASSWORD"]

uri = f"mongodb+srv://{DB_USER}:{DB_PASSWORD}@cluster0.nbptbsx.mongodb.net/?retryWrites=true&w=majority"

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*", "OPTIONS"],
    allow_headers=["*"],
)


client = MongoClient(uri, server_api=ServerApi("1"))
db = client["askUTSApp"]
col = db["messages"]

@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.post("/chat")
async def send_message(message: Message):
    now = datetime.now()

    print(message.timeStamp)

    if message.text == "":
        raise HTTPException(status_code=400, detail="No message sent!")

    """ Deal with different timezones? """
    if message.timeStamp.astimezone() > now.astimezone():
        raise HTTPException(
            status_code=400,
            detail="Invalid date! Provided timestamp: {0} is greater than current timestamp: {1}".format(
                message.timeStamp.strftime("%Y-%m-%d %H:%M:%S.%f %Z"),
                now.strftime("%Y-%m-%d %H:%M:%S.%f"),
            ),
        )
 
    if len(message.text) > 1000:
        raise HTTPException(
            status_code=400,
            detail="Message character limit exceeded: "
            + str(len(message.text))
            + " characters provided!",
        )

    try:
        df = embedding_search(message.text)
        text = df['text'].iloc[0]
        sim = df['similarities'].loc[0]
        answer = Answer(message=message, timeStamp=datetime.now(), answer=text, similarity=sim)
    except Exception as e:
        print(e)
        answer = Answer(message=message, timeStamp=datetime.now())
    
    return answer

@app.get("/chat_read/")
async def read_message(message_id: Union[str, None] = None):
    filter = {"_id": 0}

    if message_id:
        ##return individual response if message_id param provided 
        try:
            objInstance = ObjectId(message_id)
            query = {"_id": objInstance}
            result = col.find_one(query, filter)

            if result is not None:
                return result
            else:
                ##no results found
                raise HTTPException(
                    status_code=404,
                    detail=f"'{message_id}' does not exist!"
                )
        except InvalidId as e:
            ##invalid id provided
            print(e)
            raise HTTPException(
                status_code=400,
                detail=f"'{message_id}' is not a valid id, it must be a 12-byte input or a 24-character hex string"
                )
    else:
        ##return all results in collection
        result = list(col.find({}))
        ##ObjectId to str
        for document in result:
            document['_id'] = str(document['_id'])
        return result
    

@app.post("/chat_save")
async def save_response(answer: Answer):
    answer = jsonable_encoder(answer)
    result = col.insert_one(answer)
    created_message = col.find_one({"_id": result.inserted_id})
    created_message['_id'] = str(created_message['_id'])
    return JSONResponse(
        status_code=201, content=created_message
    )

try:
    client.admin.command("ping")
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
