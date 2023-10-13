import openai
import pandas as pd
import os
from .vector_db import insert as vector_insert

# Embedding Function, there are many ways to go about it but it seems there are also alot of bugs
embedding_model = "text-embedding-ada-002"


# Insert your OpenAI key here
openai.api_key = "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"


# Embedding function
def generate_embedding(text, model=embedding_model):
    text = text.replace("\n", " ")
    # This Works but only for like 2 values any more you need the paid version doesn't really tell you the rates. I will upgrade later and test
    result = openai.Embedding.create(input=[text], model=model)
    return result["data"][0]["embedding"]


# Read csv
script_directory = os.path.dirname(os.path.abspath(__file__))
data_folder = os.path.join(script_directory, "data")
csv_file_path = os.path.join(data_folder, "web_scraped_data.csv")
df = pd.read_csv(csv_file_path)

# Making new coulum with embedded items
df["embedding"] = df["Content"].apply(lambda x: generate_embedding(x, embedding_model))


# Exporting the embedded data into a new csv
df.to_csv(script_directory + "/data/" + "web_scraped_data_embedding.csv")

print(df)

# Upserting the data into the Pinecone index
df = pd.read_csv(script_directory + "/data/" + "web_scraped_data_embedding.csv")
vector_insert(df)
