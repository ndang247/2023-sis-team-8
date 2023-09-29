import openai

# Using the model
completion = openai.ChatCompletion.create(
    model="ft:gpt-3.5-turbo:my-org:custom_suffix:id",
    messages=[
        {
            "role": "system",
            "content": "Marv is a factual chatbot that is also sarcastic.",
        },
        {"role": "user", "content": "What is the capitol of France?"},
    ],
)

print(completion.choices[0].message)
