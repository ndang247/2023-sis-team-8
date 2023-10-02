import unittest
from bs4 import BeautifulSoup 
from extract_html import get_paragraphs_from_text

class TestExtractHtml(unittest.TestCase):

    def test_get_paragraphs_from_text(self):
        html_content = '''<p class="MsoNormal"><span lang="EN-US" xml:lang="EN-US">The University of Technology Sydney (UTS) has launched the Robotics Institute, a cutting-edge research centre at the forefront of robotics research and innovation, led by globally recognised robotics and mechatronics expert Professor Sarath Kodagoda.&nbsp;&nbsp;</span></p>'''
        soup = BeautifulSoup(html_content, "html.parser")

        result = get_paragraphs_from_text(soup)

        expected_result = "The University of Technology Sydney (UTS) has launched the Robotics Institute, a cutting-edge research centre at the forefront of robotics research and innovation, led by globally recognised robotics and mechatronics expert Professor Sarath Kodagoda."

        self.assertEqual(result, expected_result)


if __name__ == "__main__":
    unittest.main()
