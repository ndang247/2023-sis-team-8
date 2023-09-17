import openai
import pandas as pd
import numpy as np
import os

from openai.embeddings_utils import get_embedding
from openai.embeddings_utils import cosine_similarity

embedding_model = "text-embedding-ada-002"                                #Embedding Function, there are many ways to go about it but it seems there are also alot of bugs                               
                                                                          
openai.api_key = 'sk-INSERTKEYHERE'      #insert your OpenAI key here

cwd = os.getcwd()
df = pd.read_csv(cwd + '/OpenAI/embeddingFunctionality/' + 'word_embeddings.csv')  #read in data

df['embedding'] = df['embedding'].apply(eval).apply(np.array) #convert data into python code and convert it into a numpy array to perfrom calculations
    
search_term = input('Enter a search term: ')                                 #Getting input from user and converting it to a vector           
search_term_vector = get_embedding(search_term, engine=embedding_model)

df['similarities'] = df['embedding'].apply(lambda x: cosine_similarity(x, search_term_vector))      #comparing vector similarities using cosine similarity function and sorts dataframe in ascending order
df = df.sort_values('similarities', ascending=False)

df.to_csv(cwd + '/OpenAI/embeddingFunctionality/' + 'word_similarities.csv')        #exporting the embedded data into a new csv

print(df)
