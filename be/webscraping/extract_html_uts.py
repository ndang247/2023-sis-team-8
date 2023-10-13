import bs4
import requests
import os
import csv
from extract_sitemap import get_urls_from_sitemap


def get_response_from_url(url):
    return requests.get(url).content


def get_paragraph_text(soup):
    paragraph_tags = soup.find_all("p")[:-4]
    return "\n".join([p.get_text() for p in paragraph_tags])


def get_table_text(soup):
    text = ""
    for table_index, table in enumerate(soup.find_all("table")):
        table_text = []
        for row in table.find_all("tr"):
            row_content = [cell.get_text() for cell in row.find_all(["th", "td"])]
            table_text.append("\t".join(row_content))
        text += "\nTable {}:".format(table_index + 1) + "\n" + "\n".join(table_text)
    return text


def get_collapsible_text(soup):
    text = ""
    for index, dropdown in enumerate(soup.find_all("section", class_="collapsible")):
        dropdown_title = dropdown.find("h3", class_="js-collapsible collapsible__title")
        dropdown_content = dropdown.find("div", class_="collapsible__content")
        if dropdown_title and dropdown_content:
            title_txt = dropdown_title.get_text()
            content_txt = dropdown_content.get_text()
            text += f"\nCollapsible Section {index + 1}: {title_txt}\n{content_txt}"
    return text


def extract_text_from_url(url):
    try:
        html_content = get_response_from_url(url)
        soup = bs4.BeautifulSoup(html_content, "html.parser")
        content = (
            get_paragraph_text(soup) + get_table_text(soup) + get_collapsible_text(soup)
        )
        return content.strip()
    except Exception as e:
        return f"Error extracting content from {url}: {str(e)}"


output_folder = "uts_website_extracted"
os.makedirs(output_folder, exist_ok=True)

tracking_urls = set()


def write_to_csv(file, data):
    writer = csv.writer(file)
    writer.writerow(data)


def filter_urls_by_keyphrase(urls, keyphrase):
    return [url for url in urls if keyphrase in url]


def get_100_urls(urls):
    return sorted(urls, key=lambda url: -len(extract_text_from_url(url)))[:100]


def write_urls(file, urls):
    for url in urls:
        if url not in tracking_urls:
            print(f"Extracting content from {url}")
            extracted_text = extract_text_from_url(url)
            print(f"Extracted from {url}")
            write_to_csv(file, [url, extracted_text])
            tracking_urls.add(url)


sitemap_base_url = "https://www.uts.edu.au/sitemap.xml?page="
num_pages = 13

sitemap_urls = [sitemap_base_url + str(i) for i in range(1, num_pages + 1)]

with open("web_scraped_data.csv", "w", newline="", encoding="utf-8") as csv_file:
    write_to_csv(csv_file, ["URL", "Content"])

    for url in sitemap_urls:
        urls_to_scrape = get_urls_from_sitemap(url)
        write_urls(csv_file, urls_to_scrape)
