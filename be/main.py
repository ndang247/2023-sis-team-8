from typing import Union
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from models import Message, Answer
from pydantic import BaseModel
from datetime import datetime

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.post("/chat")
async def send_message(message: Message):
    now = datetime.now()

    print(message.timeStamp)

    if(message.text == ""):
        raise HTTPException(status_code=400, detail="No message sent!")

    """ Deal with different timezones? """
    if(message.timeStamp > datetime.astimezone(now)):
        raise HTTPException(
            status_code=400, 
            detail="Invalid date! Provided timestamp: {0} is greater than current timestamp: {1}"
            .format(message.timeStamp.strftime('%Y-%m-%d %H:%M:%S.%f %Z'), 
            now.strftime('%Y-%m-%d %H:%M:%S.%f')))
    
    if(len(message.text) > 1000):
        raise HTTPException(status_code=400, detail="Message character limit exceeded: " + 
        str(len(message.text)) + " characters provided!")
    
    answer = Answer(message=message, timeStamp=datetime.now())

    return answer

""" @app.get("/items/{item_id}")
async def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {
        "item_name": item.name,
        "item_id": item_id,
        "item_price": item.price,
        "is_offer": item.is_offer,
    }
 """