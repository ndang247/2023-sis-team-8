import requests
import tiktoken


class SubjectOutlineExtracter:
    def create_pdf_url(subject_number, year, session):
        return f"https://cis-admin-api.uts.edu.au/subject-outlines/index.cfm/PDFs?lastGenerated=true&lastGenerated=true&subjectCode={subject_number}&year={year}&session={session}&mode=standard&location=city"

    def exclude_generic_content(text):
        """many subject outlines contain generic information that takes up too much of the page"""
        return text.partition("Academic liaison officer")[1]

    def get_subject_outline_pdf_from_url(self, subject_number):
        year = "2023"
        sessions = "SPR"
        url = self.create_pdf_url(subject_number)

        def get_html_from_url(url):
            response = requests.get(url)
            html_content = response.content
            return html_content

        def get_text_from_html(soup):  # easy to unit test without patching
            paragraph_tags = soup.find_all("p")
            paragraph_tags = paragraph_tags[:-4]
            paragraph_text = [p.get_text() for p in paragraph_tags]

            text = "\n".join(paragraph_text)

            return text

        extracted_html = get_html_from_url(url)
        extracted_text = get_text_from_html(extracted_html)

        cleaned_extracted_text = self.exclude_generic_context(extracted_text)

    def check_context_below_token_limit(context, token_limit):
        encoding = tiktoken.encoding_for_model("gpt-3.5-turbo")
        token_count = len(encoding.encode(context))
        if token_count > token_limit:
            raise Exception(
                "Handbook Extractor: Context exceeded 8000 tokens, please reduce the amount of URLs in this context"
            )
