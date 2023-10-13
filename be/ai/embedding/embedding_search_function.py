import openai
import pandas as pd
import numpy as np
import os
from .vector_db import get_matches
from openai.embeddings_utils import get_embedding

# from openai.embeddings_utils import cosine_similarity

# Embedding function, there are many ways to go about it but it seems there are also alot of bugs
embedding_model = "text-embedding-ada-002"

# Insert your OpenAI key here
openai.api_key = "sk-"

#read csv
script_directory = os.path.dirname(os.path.abspath(__file__))
data_folder = os.path.join(script_directory, "data")
csv_file_path = os.path.join(data_folder, "web_scraped_data.csv")
df = pd.read_csv(csv_file_path)


def embedding_search(prompt):
    # Convert data into python code and convert it into a numpy array to perform calculations
    df["embedding"] = df["embedding"].apply(eval).apply(np.array)

    # Getting input from user and converting it to a vector
    # prompt = input("Enter a search term: ")

    prompt_vector = get_embedding(prompt, engine=embedding_model)

    # Retrieve from Pinecone
    res = get_matches(prompt_vector)

    return res

    # Comparing vector similarities using cosine similarity function and sorts data frame in ascending order
    # df["similarities"] = df["embedding"].apply(
    #     lambda x: cosine_similarity(x, prompt_vector)
    # )
    # df = df.sort_values("similarities", ascending=False)

    # Exporting the embedded data into a new csv
    # df.to_csv(cwd + "/data/" + "web_scraped_data_embedding_similarities.csv")

    # print(df)
