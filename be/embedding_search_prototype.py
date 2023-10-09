import openai
import pandas as pd
import numpy as np
import os

from openai.embeddings_utils import get_embedding
from openai.embeddings_utils import cosine_similarity

def embedding_search(search_term: str):
    # Embedding function, there are many ways to go about it but it seems there are also alot of bugs
    embedding_model = "text-embedding-ada-002"

    # Insert your OpenAI key here
    openai.api_key = "sk-INSERTKEYHERE"

    # Read in data
    cwd = os.getcwd()
    df = pd.read_csv(cwd + "/openai/embedding/data" + "word_embeddings.csv")


    # Convert data into python code and convert it into a numpy array to perform calculations
    df["embedding"] = df["embedding"].apply(eval).apply(np.array)

    # Getting input from user and converting it to a vector
    """ search_term = input("Enter a search term: ") """

    search_term_vector = get_embedding(search_term, engine=embedding_model)

    # Comparing vector similarities using cosine similarity function and sorts dataframe in ascending order
    df["similarities"] = df["embedding"].apply(
        lambda x: cosine_similarity(x, search_term_vector)
    )
    df = df.sort_values("similarities", ascending=False)

    # Exporting the embedded data into a new csv
    # df.to_csv(cwd + "/openai/embedding/data" + "word_similarities.csv")

    print(df)
    return df

