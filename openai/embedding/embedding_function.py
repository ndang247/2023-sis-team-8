import openai
import pandas as pd
import numpy as np
import os

from openai.embeddings_utils import get_embedding

embedding_model = "text-embedding-ada-002"  # Embedding Function, there are many ways to go about it but it seems there are also alot of bugs

openai.api_key = "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"  # insert your OpenAI key here

cwd = os.getcwd()
df = pd.read_csv(cwd + "/openai/embedding/data/" + "UpdatedmanuallyFormatted_UTS_Data.csv")  # read in data

# print(get_embedding("grape", engine='text-embedding-ada-002')) #This works and prints out an embedded vector

# df['embedding'] = df['text'].apply(lambda x: get_embedding(x, engine=embedding_model))     #This should work but it doesnt and I think it may be a bug


def embedFunc(text, model=embedding_model):  # embedding function
    text = text.replace("\n", " ")
    result = openai.Embedding.create(
        input=[text], model=model
    )  # This Works but only for like 2 values any more you need the paid version doesn't really tell you the rates. I will upgrade later and test
    embeddings = result["data"][0]["embedding"]
    return embeddings


df["embedding"] = df["Content"].apply(
    lambda x: embedFunc(x, embedding_model)
)  # making new coulum with embedded items


# df['embedding'] = df['text'].apply(lambda x: openai.Embedding.create(x, engine=embedding_model)) This does not work most likely because of some formatting issue


df.to_csv(
    cwd + "/openai/embedding/data/" + "embedded_UpdatedmanuallyFormatted_UTS_Data.csv"
)  # exporting the embedded data into a new csv

# df['embedding'] = df['text'].apply(lambda x: x.upper())

print(df)
