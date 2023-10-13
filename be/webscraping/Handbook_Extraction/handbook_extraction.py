import requests
import tiktoken


class HandbookExtracter:
    def get_text_from_url(url):
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

    def check_context_below_token_limit(context, token_limit):
        encoding = tiktoken.encoding_for_model("gpt-3.5-turbo")
        token_count = len(encoding.encode(context))
        if token_count > token_limit:
            raise Exception(
                "Handbook Extractor: Context exceeded 8000 tokens, please reduce the amount of URLs in this context"
            )

    def create_merged_context_from_urls(self, urls):
        """given a list of URLS, this function will fetch text from each and merge them into a single text file.
        this can later be passed as a context to chatgpt for this particular topic. URLs should be related
        this has a limit of 8000 tokens"""

        context = ""
        for url in urls:
            text = self.get_text_from_url(url)
            context = context + text

        self.check_context_below_token_limit(context, 8000)
