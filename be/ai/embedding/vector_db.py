import pinecone
import ast
from dotenv import dotenv_values
import uuid

secrets = dotenv_values(".env")
# Initialize Pinecone
pinecone.init(api_key=secrets["PINECONE_API_KEY"], environment="gcp-starter")

index = pinecone.Index("ask-uts")


def insert(df):
    # Convert the string representation of the embedding into a vector
    df["embedding"] = df["embedding"].apply(ast.literal_eval)

    # Transform the data into a list of objects
    payload = []
    for _, row in df.iterrows():
        obj = {
            "id": str(uuid.uuid4()),
            "values": row["embedding"],
            "metadata": {"content": row["Content"], "URL": row["URL"]},
        }
        payload.append(obj)

    # Insert data into the index
    index.upsert(payload)


def get_matches(query_embedding):
    # Query the index
    results = index.query(query_embedding, top_k=2, include_metadata=True)
    return results
