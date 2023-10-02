import openai
import pandas as pd
import numpy as np
import os

from openai.embeddings_utils import get_embedding

# Embedding Function, there are many ways to go about it but it seems there are also alot of bugs
embedding_model = "text-embedding-ada-002"

# Insert your OpenAI key here
openai.api_key = "sk-INSERTYOURKEYHERE"

cwd = os.getcwd()
# Read in data
df = pd.read_csv(cwd + "/openai/embedding/data/" + "web_scraped_data.csv")

# This works and prints out an embedded vector
# print(get_embedding("grape", engine="text-embedding-ada-002"))

# This should work but it doesnt and I think it may be a bug
# df["embedding"] = df["text"].apply(lambda x: get_embedding(x, engine=embedding_model))


# Embedding function
def embedFunc(text, model=embedding_model):
    text = text.replace("\n", " ")
    # This Works but only for like 2 values any more you need the paid version doesn't really tell you the rates. I will upgrade later and test
    result = openai.Embedding.create(input=[text], model=model)
    embeddings = result["data"][0]["embedding"]
    return embeddings


# Making new coulum with embedded items
df["embedding"] = df["Content"].apply(lambda x: embedFunc(x, embedding_model))


# This does not work most likely because of some formatting issue
# df["embedding"] = df["text"].apply(
#     lambda x: openai.Embedding.create(x, engine=embedding_model)
# )


# Exporting the embedded data into a new csv
df.to_csv(cwd + "/openai/embedding/data/" + "embedded_web_scraped_data.csv")

# df["embedding"] = df["text"].apply(lambda x: x.upper())

print(df)
