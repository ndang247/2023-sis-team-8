import openai
import pandas as pd
import numpy as np
import os
import vector_db

from openai.embeddings_utils import get_embedding

# from openai.embeddings_utils import cosine_similarity

# Embedding function, there are many ways to go about it but it seems there are also alot of bugs
embedding_model = "text-embedding-ada-002"

# Insert your OpenAI key here
openai.api_key = "sk-INSERTYOURKEYHERE"

# Read in data
cwd = os.getcwd()
df = pd.read_csv(cwd + "/data/" + "web_scraped_data_embedding.csv")


def embedding_search():
    # Convert data into python code and convert it into a numpy array to perform calculations
    df["embedding"] = df["embedding"].apply(eval).apply(np.array)

    # Getting input from user and converting it to a vector
    prompt = input("Enter a search term: ")

    prompt_vector = get_embedding(prompt, engine=embedding_model)

    # Retrieve from Pinecone
    res = vector_db.get_matches(prompt_vector)

    return res

    # Comparing vector similarities using cosine similarity function and sorts data frame in ascending order
    # df["similarities"] = df["embedding"].apply(
    #     lambda x: cosine_similarity(x, prompt_vector)
    # )
    # df = df.sort_values("similarities", ascending=False)

    # Exporting the embedded data into a new csv
    # df.to_csv(cwd + "/data/" + "web_scraped_data_embedding_similarities.csv")

    # print(df)
