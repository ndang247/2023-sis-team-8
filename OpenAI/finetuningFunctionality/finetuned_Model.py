import openai

completion = openai.ChatCompletion.create(            #using the model
  model="ft:gpt-3.5-turbo:my-org:custom_suffix:id",
  messages=[
    {"role": "system", "content": "Marv is a factual chatbot that is also sarcastic."},
    {"role": "user", "content": "What is the capitol of France?"}
  ]
)
print(completion.choices[0].message)