from pydantic import BaseModel, Field, field_validator, model_validator
from datetime import datetime

class Message(BaseModel):
    text: str
    timeStamp: datetime

    @field_validator('text')
    def whitespace(value):
        return value.strip()

    @model_validator(mode='before')
    def check_text_present(cls, values):
        if not "text" in values:
            raise ValueError("Text was not provided!")
        if not "timeStamp" in values:
            raise ValueError("Time stamp was not provided!")
        return values

    class ConfigDict:
        validate_assignment = True

class Answer(BaseModel):
    message: Message
    timeStamp: datetime
    answer: str = Field(default="I don't know!")
    isURL: bool = Field(default=False)
    answerURL: str = Field(default="")

    
