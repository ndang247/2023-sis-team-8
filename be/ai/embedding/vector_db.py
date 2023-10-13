import pinecone
import ast

# Initialize Pinecone
pinecone.init(api_key="be10d569-c6d0-4f54-ae02-9cd4ee77bb04", environment="gcp-starter")

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


def get_matches(query_embedding):
    # Query the index
    results = index.query(query_embedding, top_k=2, include_metadata=True)
    return results
