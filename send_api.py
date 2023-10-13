import requests

r = requests.post(
    "https://localhost:80/chat",
    data={"text": "this is text", "timeStamp": "this is timestamp"},
)
