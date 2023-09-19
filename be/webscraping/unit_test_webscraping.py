import unittest
from unittest.mock import patch, mock_open
from extract_html import extract_text_from_url, sort_urls_by_keyphrase

# Test class needs to be defined
# URL content extraction (test case)
class TestAllFunctionalities(unittest.TestCase):
    @patch('requests.get')
    @patch('os.makedirs')
    @patch('builtins.open', new_callable=mock_open)
    def test_extract_text_from_url(self, mock_open, mock_makedirs, mock_requests_get):
        url_html_mapping = {
            "https://www.uts.edu.au/about/faculty-science/biosciences-and-proteomics-technologies/courses-and-training": "<html><body><p>Airline Pilot Dominique Cotte successfully transitioned her career during COVID-19 to the cyber security industry by becoming trained through our part-time cyber security program.</p></body></html>"
        }

        for url, html_content in url_html_mapping.items():
            mock_response = mock_requests_get.return_value
            mock_response.content = html_content
            output_folder = "unittest_folder"
            output_fileName = "unittest_folder.txt"
            extracted_text = extract_text_from_url(url, output_folder, output_fileName)
            expected_text = f"Airline Pilot Dominique Cotte successfully transitioned her career during COVID-19 to the cyber security industry by becoming trained through our part-time cyber security program. {list(url_html_mapping.keys()).index(url) + 1}"


    #  # Filtering URL test case by keyphrase
    # def unittest_sort_urls_by_keyphrase(self):
    #      #list of URL 
    #     # sort_urls_by_keyphrase function should be called
    #     sorted_urls = sort_urls_by_keyphrase(urls, "engineering")
    #     # check if the 'sorted_urls' mtaches the expected result

if __name__ == "__main__":
    unittest.main()


