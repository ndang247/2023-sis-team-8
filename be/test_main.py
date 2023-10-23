from starlette.testclient import TestClient
from main import app

client = TestClient(app)


def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}


def test_chat_valid_message():
    response = client.post(
        "/chat/", json={"text": "Hello AskUTS chatbot", "timeStamp": 123}
    )
    assert response.status_code == 200
    assert response.json()["message"]["text"] == "Hello AskUTS chatbot"
    assert response.json()["message"]["timeStamp"] == "1970-01-01T00:02:03Z"


def test_chat_remove_whitespace():
    response = client.post(
        "/chat/", json={"text": "      no white space!    ", "timeStamp": 444}
    )
    assert response.status_code == 200
    assert response.json()["message"]["text"] == "no white space!"


def test_chat_invalid_text():
    response = client.post("/chat/", json={"text": True, "timeStamp": 444})
    assert response.status_code == 422
    assert response.json()["detail"][0]["msg"] == "Input should be a valid string"


def test_chat_missing_text():
    response = client.post("/chat/", json={"not a text": "test", "timeStamp": 444})
    assert response.status_code == 422
    assert response.json()["detail"][0]["type"] == "value_error"
    assert response.json()["detail"][0]["msg"] == "Value error, Text was not provided!"


def test_chat_missing_timeStamp():
    response = client.post("/chat/", json={"text": "test", "not a timeStamp": 444})
    assert response.status_code == 422
    assert response.json()["detail"][0]["type"] == "value_error"
    assert (
        response.json()["detail"][0]["msg"]
        == "Value error, Time stamp was not provided!"
    )

