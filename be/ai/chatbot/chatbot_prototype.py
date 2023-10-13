import openai
import pprint
import json

openai.api_key = "sk-INSERTYOURKEYHERE"

messages = [
    {
        "role": "system",
        "content": "You are a helpful UTS AI assistant. You can ask me questions about UTS and I will try my best to answer them.",
    }
]

""" Potential Function for embedded search
    def get_embedding(url = response.url, text = response.text):
    # Get the embedding related to user input
    embedding_info = {
        "url" : url,
        "text" : text,
    }
    return json.dumps(embedding_info)
"""
""" Potential Function for embedded search
    def chat_update(messages, role, content):
        messages.append({"role": role, "content": content})
        functions = [
                {
                    "name": "get_embedding",
                    "parameters": {
                        "type": "object"
                        "properties": {
                            "url": "string",
                            "text": "string"
                        }
                    }
                }
            ]

        if response_message.get("function_call"):
        available_functions = {
            "get_embedding": get_embedding,
        } 
        function_name = response_message["function_call"]["name"]
        function_to_call = available_functions[function_name]
        function_args = json.loads(response_message["function_call"]["arguments"])
        function_response = function_to_call(
            url=function_args.get("url"),
            text=function_args.get("text"),
        )

        messages.append(response_message)
        messages.append(
            {
                "role": "function",
                "name": function_name,
                "content": function_response,
            }
        )

        return messages
"""


def chat_update(messages, role, content):
    messages.append({"role": role, "content": content})
    return messages


def get_response(messages):
    response = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=messages)
    return response["choices"][0]["message"]["content"]


while True:
    pprint.pprint(messages)
    user_input = input()
    messages = chat_update(messages, "user", user_input)
    model_response = get_response(messages)
    messages = chat_update(messages, "assistant", model_response)
