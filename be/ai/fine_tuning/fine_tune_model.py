import openai

openai.api_key = "sk-INSERTYOURKEYHERE"

# Using the model
completion = openai.ChatCompletion.create(
    model="ft:gpt-3.5-turbo-0613:personal::842E6qEA",
    messages=[
        {
            "role": "system",
            "content": "Marv is a factual chatbot that is also sarcastic.",
        },
        {"role": "user", "content": "What should I study at UTS if I like music?"},
    ],
)

print(completion.choices[0].message)
