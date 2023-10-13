import openai
import pandas as pd
import os
import vector_db


# Embedding Function, there are many ways to go about it but it seems there are also alot of bugs
embedding_model = "text-embedding-ada-002"


# Insert your OpenAI key here
openai.api_key = "sk-INSERTYOURKEYHERE"


# Embedding function
def generate_embedding(text, model=embedding_model):
    text = text.replace("\n", " ")
    # This Works but only for like 2 values any more you need the paid version doesn't really tell you the rates. I will upgrade later and test
    result = openai.Embedding.create(input=[text], model=model)
    return result["data"][0]["embedding"]


cwd = os.getcwd()
# Read in data
df = pd.read_csv(cwd + "/data/" + "web_scraped_data.csv")


# Making new coulum with embedded items
df["embedding"] = df["Content"].apply(lambda x: generate_embedding(x, embedding_model))


# Exporting the embedded data into a new csv
df.to_csv(cwd + "/data/" + "web_scraped_data_embedding.csv")

print(df)

# Upserting the data into the Pinecone index
df = pd.read_csv(cwd + "/data/" + "web_scraped_data_embedding.csv")
vector_db.insert(df)
