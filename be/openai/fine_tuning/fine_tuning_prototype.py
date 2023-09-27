import openai

openai.api_key = "sk-INSERTYOURKEYHERE"

# Script to fine tune with jsonl data
# Training the model. Should work need to upgrade to paid plan to test later though
openai.FineTuningJob.create(
    training_file="file-C4kGJBNuYfUowtpJQU1Mqlum", model="gpt-3.5-turbo"
)

""" 
Other commands you can use

# List 10 fine-tuning jobs
openai.FineTuningJob.list(limit=10)

# Retrieve the state of a fine-tune
openai.FineTuningJob.retrieve("ft-abc123")

# Cancel a job
openai.FineTuningJob.cancel("ft-abc123")

# List up to 10 events from a fine-tuning job
openai.FineTuningJob.list_events(id="ft-abc123", limit=10)

# Delete a fine-tuned model (must be an owner of the org the model was created in)
openai.Model.delete("ft-abc123")
"""
