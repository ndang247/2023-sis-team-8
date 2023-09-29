from typing import Union
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from be.models.models import Message, Answer
from pydantic import BaseModel
from datetime import datetime
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson import json_util
from dotenv import dotenv_values

secrets = dotenv_values(".env")
DB_USER = secrets["DB_USER"]
DB_PASSWORD = secrets["DB_PASSWORD"]

uri = (f"mongodb+srv://{DB_USER}:{DB_PASSWORD}@cluster0.nbptbsx.mongodb.net/?retryWrites=true&w=majority")

app = FastAPI()

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
    if message.timeStamp > datetime.astimezone(now):
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

    answer = Answer(message=message, timeStamp=datetime.now())

    return answer


@app.post("/chat_save")
async def save_response(answer: Answer):
    answer = jsonable_encoder(answer)
    result = col.insert_one(answer)
    created_message = col.find_one({"_id": result.inserted_id})
    # TODO change to cleaner custom JSON serializer
    return JSONResponse(
        status_code=201, content=json_util.dumps(created_message, default=str)
    )
    # json_util.dumps(created_message, default=str)


try:
    client.admin.command("ping")
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
