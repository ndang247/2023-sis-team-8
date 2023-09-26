from pydantic import BaseModel, Field, field_validator, model_validator
from datetime import datetime
from bson import ObjectId


class Message(BaseModel):
    text: str
    timeStamp: datetime

    model_config = {
        "json_schema_extra": {
            "example": {
                "text": "Test message!",
                "timeStamp": "2023-09-19T16:38:45.906Z",
            }
        }
    }

    @field_validator("text")
    def whitespace(value):
        return value.strip()

    @model_validator(mode="before")
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

    model_config = {
        "json_schema_extra": {
            "example": {
                "message": {
                    "text": "Test message",
                    "timeStamp": "2023-09-08T05:25:00Z",
                },
                "timeStamp": "2023-09-20T14:00:52.168550",
                "answer": "I don't know!",
                "isURL": False,
                "answerURL": "",
            }
        }
    }
