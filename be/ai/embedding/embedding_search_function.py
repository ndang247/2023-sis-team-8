import openai
import pandas as pd
import os
from .vector_db import get_matches
from openai.embeddings_utils import get_embedding
from dotenv import dotenv_values

embedding_model = "text-embedding-ada-002"

secrets = dotenv_values(".env")
# Insert your OpenAI key here
openai.api_key = secrets["OPENAI_API_KEY"]


def embedding_search(prompt, top_k):
    prompt_vector = get_embedding(prompt, engine=embedding_model)

    # Retrieve from Pinecone
    res = get_matches(prompt_vector, top_k)

    return res
