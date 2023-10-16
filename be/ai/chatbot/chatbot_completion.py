import openai
from dotenv import dotenv_values

secrets = dotenv_values(".env")
OPENAI_API_KEY = secrets["OPENAI_API_KEY"]

openai.api_key = OPENAI_API_KEY
primer = f"""You are Q&A bot. A highly intelligent assistant that answers
            user questions STRICTLY based on the information provided by the user above
            each question. If the information can not be found in the information
            provided by the user you MUST truthfully say "I don't know". However, you DO NOT 
            attempt to answer questions that are not in the information provided by the user.
            """

messages = [
    {
        "role": "system",
        "content": primer,
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


def reset_messages():
    messages = [
        {
            "role": "system",
            "content": primer,
        }
    ]
    return messages


def chat_update(role, content):
    messages.append({"role": role, "content": content})


def get_response(augmented_query):
    chat_update("user", augmented_query)
    print("prompt: ", messages)

    reply = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=messages)
    response = reply.choices[0].message.content
    print("chatgpt: ", response)

    chat_update("assistant", response)
    return response
