import pandas as pd
import os

# For some reason python can only read the 2023SIS-TEAM8 directory so this is a workaround

# Get the current working directory (cwd)
cwd = os.getcwd()

# Get all the files in that directory
# files = os.listdir(cwd + '/OpenAI/embeddingFunctionality')
# print("Files in %r: %s" % (cwd, files))

# df = pd.read_csv(cwd + '/OpenAI/embeddingFunctionality/' + 'data.csv')  #read in data
# df['embedding'] = df['text']

# df.to_csv(cwd + '/OpenAI/embeddingFunctionality/' + 'test_output.csv')

df = pd.read_csv(cwd + "/openai/embedding/data/" + "word_similarities.csv")

# Read in data
df = df.sort_values("similarities", ascending=False)

print(df)
