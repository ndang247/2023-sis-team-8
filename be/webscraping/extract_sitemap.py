from bs4 import BeautifulSoup
import requests

num_pages = 13
base_url = "https://www.uts.edu.au/sitemap.xml?page={0}"
sitemap_urls = []

for i in range(1, num_pages + 1):
    url = base_url.format(i)
    sitemap_urls.append(url)


def get_urls_from_sitemap(url):
    response = requests.get(url)
    xml_content = response.text
    soup = BeautifulSoup(xml_content, "xml")
    urls = [url.text.strip() for url in soup.find_all("loc")]
    return urls


sorted_sublinks = []

unique_keyphrase = "courses"

for sitemap_url in sitemap_urls:
    sublinks = get_urls_from_sitemap(sitemap_url)

    filtered_links = sorted(
        [sublink for sublink in sublinks if unique_keyphrase in sublink]
    )

    sorted_sublinks.extend(filtered_links)

with open("sitemap_filtered.txt", "w") as file:
    for sublink in sorted_sublinks:
        file.write(sublink + "\n")
