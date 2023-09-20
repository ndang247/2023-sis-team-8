import openai

openai.api_key = 'sk-INSERTYOURKEYHERE'      #insert your OpenAI key here           #script to fine tune with jsonl data

Resp = openai.File.create(
    file=open("training_data.jsonl", 'rb'),             #upload file to openai so it can be used to fine tune seems like it takes a while. And it must have 10 examples.
    purpose='fine-tune'
)

print(Resp)