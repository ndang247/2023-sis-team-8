import pinecone
import ast
from dotenv import dotenv_values

secrets = dotenv_values(".env")
PINECONE_API_KEY = secrets["PINECONE_API_KEY"]

# Initialize Pinecone
pinecone.init(api_key=PINECONE_API_KEY, environment="gcp-starter")

index = pinecone.Index("ask-uts")


def insert(df):
    # Convert the string representation of the embedding into a vector
    df["embedding"] = df["embedding"].apply(ast.literal_eval)

    # Transform the data into a list of objects
    payload = []
    for _, row in df.iterrows():
        obj = {
            "id": row["URL"],
            "values": row["embedding"],
            "metadata": {"content": row["Content"]},
        }
        payload.append(obj)

    # Insert data into the index
    index.upsert(payload)


def get_matches(query_embedding, top_k):
    # Query the index
    results = index.query(query_embedding, top_k=top_k, include_metadata=True)
    return results
