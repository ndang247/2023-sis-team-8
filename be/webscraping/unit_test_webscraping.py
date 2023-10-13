import unittest
from bs4 import BeautifulSoup
from extract_html_uts import (
    get_paragraphs_from_text,
    get_text_from_collapsible,
)


class TestExtractHtml(unittest.TestCase):
    def test_get_paragraphs_from_text(self):
        html_content = """<p class="MsoNormal"><span lang="EN-US" xml:lang="EN-US">The University of Technology Sydney (UTS) has launched the Robotics Institute, a cutting-edge research centre at the forefront of robotics research and innovation, led by globally recognised robotics and mechatronics expert Professor Sarath Kodagoda.&nbsp;&nbsp;</span></p>"""
        soup = BeautifulSoup(html_content, "html.parser")

        result = get_paragraphs_from_text(soup)

        expected_result = "The University of Technology Sydney (UTS) has launched the Robotics Institute, a cutting-edge research centre at the forefront of robotics research and innovation, led by globally recognised robotics and mechatronics expert Professor Sarath Kodagoda."

        self.assertEqual(result, expected_result)

    def test_get_text_from_collapsible(self):
        html_content = """<section class="collapsible"><h3 class="js-collapsible-2 collapsible__title disable-selection" aria-controls="collapsible-1" role="button" tabindex="0" aria-expanded="false"><strong>How did you transfer and apply your previous work experience to help you up-skill through our cybersecurity training program?&nbsp;</strong></h3><div class="collapsible__content" id="collapsible-1" aria-hidden="true" style="display: none;"><p>I was introduced to IoD’s Cybersecurity program through my sister actually – she is a travel agent for cricket in Australia who recommended it to me. I thought it was a great transition from aviation especially due to my experiences in risk management, threat &amp; error management, and critical thinking ability. In addition, my previous focus on international standards, regulation and safety management was very helpful in my career transition.</p></div></section>"""
        soup = BeautifulSoup(html_content, "html.parser")

        result = get_text_from_collapsible(soup).strip()

        expected_result = "How did you transfer and apply your previous work experience to help you up-skill through our cybersecurity training program?\xa0\nI was introduced to IoD’s Cybersecurity program through my sister actually – she is a travel agent for cricket in Australia who recommended it to me. I thought it was a great transition from aviation especially due to my experiences in risk management, threat & error management, and critical thinking ability. In addition, my previous focus on international standards, regulation and safety management was very helpful in my career transition."

        self.assertEqual(result, expected_result)


if __name__ == "__main__":
    unittest.main()
