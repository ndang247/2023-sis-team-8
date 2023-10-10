from bs4 import BeautifulSoup
import requests

base_url = "https://www.uts.edu.au/sitemap.xml"


def get_urls_from_sitemap(url):
    response = requests.get(url)
    xml_content = response.text
    soup = BeautifulSoup(xml_content, "xml")
    urls = [loc.text.strip() for loc in soup.find_all("loc")]
    return urls


sitemap_urls = [base_url]
sitemap_urls += get_urls_from_sitemap(base_url)

num_pages = 13

for i in range(2, num_pages + 1):
    page_url = f"https://www.uts.edu.au/sitemap/page-{i}.xml"
    sitemap_urls += get_urls_from_sitemap(page_url)

keywords_to_filter = ["uts", "courses"]

filtered_links = []

for url in sitemap_urls:
    if any(keyword in url for keyword in keywords_to_filter):
        filtered_links.append(url)

filtered_links = sorted(list(set(filtered_links)))

with open("filtered_url.txt", "w") as file:
    for sublink in filtered_links:
        file.write(sublink + "\n")
