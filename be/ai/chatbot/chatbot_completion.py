import openai
from dotenv import dotenv_values

secrets = dotenv_values(".env")
OPENAI_API_KEY = secrets["OPENAI_API_KEY"]

openai.api_key = OPENAI_API_KEY
primer = f"""You are Q&A bot. A highly intelligent assistant that answers user questions STRICTLY based on the information provided by the user above each question. If the information can not be found in the information provided by the user you MUST truthfully say "I do not have information about this particular topic, I currently have information in my database about the Bachelor of Engineering (Software) as well as some UTS scholarships. Please refer to https://www.uts.edu.au/current-students/managing-your-course/ask-uts/ask-uts". However, you DO NOT attempt to answer questions that are not in the information provided by the user."""

messages = [
    {
        "role": "system",
        "content": primer,
    }
]


def reset_messages():
    global messages
    messages = [
        {
            "role": "system",
            "content": primer,
        }
    ]


def chat_update(role, content):
    messages.append({"role": role, "content": content})


def get_response(augmented_query):
    chat_update("user", augmented_query)
    print("prompt: ", messages)

    reply = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=messages)
    response = reply.choices[0].message.content

    reset_messages()
    print("chatgpt: ", response)

    return response
