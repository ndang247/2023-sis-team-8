import openai
import pprint

openai.api_key = "sk-INSERTYOURKEYHERE"

messages=[
    {
        "role": "system",
        "content": "You are a helpful AI course recommender",
    }
]

def chat_update(messages, role, content):
    messages.append({"role": role, "content": content})
    return messages

def get_response(messages):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    return response['choices'][0]['message']['content']

while True:
    pprint.pprint(messages)
    user_input = input()
    messages = chat_update(messages, "user", user_input)
    model_response = get_response(messages)
    messages = chat_update(messages, "assistant", model_response)
