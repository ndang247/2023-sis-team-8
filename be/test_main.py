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

def test_embedded_search_valid():
    url = "/embedded_search/?prompt=I%27m%20looking%20for%20financial%20support%20scholarships?"
    response = client.get(url)
    assert response.status_code == 200
    assert len(response.json()["matches"]) != 0

def test_chat_read_all_valid():
    response = client.get("/chat_read")
    assert response.status_code == 200
    assert len(response.json()) != 0

def test_chat_read_invalid_id():
    url = "/chat_read/?message_id=123"
    response = client.get(url)
    assert response.status_code == 400
    assert (
        response.json()["detail"]
        == "'123' is not a valid id, it must be a 12-byte input or a 24-character hex string"
    ) 

def test_chat_read_existent_id():
    url = "/chat_read/?message_id=65377d533d07ecdcb34b16d0"
    response = client.get(url)
    assert response.status_code == 200
    assert response.json()["message"]["text"] == "Hello! What engineering courses does UTS offer?"
    assert len(response.json()["similarity"]) != 0
    assert len(response.json()["answerURL"]) != 0


def test_chat_read_non_existent_id():
    url = "/chat_read/?message_id=63080c44cf54ac1d6409a1be"
    response = client.get(url)
    assert response.status_code == 404
    assert (
        response.json()["detail"]
        == "'63080c44cf54ac1d6409a1be' does not exist!"
    ) 