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

keywords_to_filter = [
    "Bachelor of Engineering (Honours) C09066",
    "Bachelor of Engineering (Honours) Diploma in Professional Engineering Practice C09067",
    "Bachelor of Engineering Science C10066",
    "Bachelor of Technology C10408",
    "Bachelor of Engineering (Honours) Bachelor of Business C09070",
    "Bachelor of Engineering (Honours) Bachelor of Business Diploma in Professional Engineering Practice C09071",
    "Bachelor of Engineering (Honours) Bachelor of Science C09072",
    "Bachelor of Engineering (Honours) Bachelor of Science Diploma in Professional Engineering Practice C09073",
    "Bachelor of Engineering (Honours) Bachelor of Medical Science C09074",
    "Bachelor of Engineering (Honours) Bachelor of Medical Science Diploma in Professional Engineering Practice C09075",
    "Bachelor of Engineering (Honours) Bachelor of Creative Intelligence and Innovation C09076",
    "Bachelor of Engineering Science Bachelor of Laws (Honours) C09087",
    "Bachelor of Engineering (Honours) Bachelor of International Studies C09123",
    "Bachelor of Engineering (Honours) Bachelor of International Studies Diploma in Professional Engineering Practice C09124",
    "Bachelor of Engineering (Honours) Bachelor of International Studies (Honours) C09147",
    "Bachelor of Engineering (Honours) Bachelor of International Studies (Honours) Diploma in Professional Engineering Practice C09148",
    "Bachelor of Engineering Science Bachelor of Laws C10136",
]

filtered_links = []

for url in sitemap_urls:
    if any(keyword in url for keyword in keywords_to_filter):
        filtered_links.append(url)

filtered_links = sorted(list(set(filtered_links)))

with open("filtered_url.txt", "w") as file:
    for sublink in filtered_links:
        file.write(sublink + "\n")
