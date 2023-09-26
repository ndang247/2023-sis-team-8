import openai

openai.api_key = "sk-INSERTYOURKEYHERE"

# Script to fine tune with jsonl data
resp = openai.File.create(
    # Upload file to openai so it can be used to fine tune seems like it takes a while and it must have 10 examples
    file=open("training_data.jsonl", "rb"),
    purpose="fine-tune",
)

print(resp)
