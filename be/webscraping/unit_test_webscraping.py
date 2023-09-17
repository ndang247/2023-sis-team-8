# Import the required dependencies, including extract_html import
import unittest
from unittest.mock import patch, mock_open
from extract_html import extract_text_from_url, sort_urls_by_keyphrase

# Test class needs to be defined
# URL content extraction (test case)
class TestAllFunctionalities(unittest.TestCase):
    def unittest_extract_text_from_url(self, mock_open_file, mock_os_makedirs, mock_requests_get):
    
        # Insert list of sample URL by mapping through the URL
        # mock response with sample html
        # extract_text_from_url function needs to be called along with the URL + filename
        output_folder = "unittest_output"
        output_filename = "unittest_output.txt"
        extracted_text = extract_text_from_url(url, output_filename)
        # Check if the extracted content matches the expected content
        #Compare betweeen 'extracted_text' and 'html_content'

    # Filtering URL test case by keyphrase
    def unittest_sort_urls_by_keyphrase(self):
         #list of URL 
        # sort_urls_by_keyphrase function should be called
        sorted_urls = sort_urls_by_keyphrase(urls, "engineering")
        # check if the 'sorted_urls' mtaches the expected result

if __name__ == "__main__":
    unittest.main()
