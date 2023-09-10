from pydantic import BaseModel, Field, field_validator
from datetime import datetime

class Message(BaseModel):
    text: str
    timeStamp: datetime

    @field_validator('text')
    def whitespace(value):
        return value.strip()

    class ConfigDict:
        validate_assignment = True

class Answer(BaseModel):
    message: Message
    timeStamp: datetime
    answer: str = Field(default="I don't know!")
    isURL: bool = Field(default=False)
    answerURL: str = Field(default="")

    
