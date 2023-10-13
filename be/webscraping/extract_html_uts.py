from extract_sitemap import sorted_sublinks
import bs4
import requests
import os
import csv

unique_keyphrases = ["engineering", "technology", "courses"]

def get_html_from_url(url):
    response = requests.get(url)
    html_content = response.content
    return html_content

def get_paragraphs_from_text(soup): #easy to unit test without patching
    paragraph_tags = soup.find_all("p")
    paragraph_tags = paragraph_tags[:-4]
    paragraph_text = [p.get_text() for p in paragraph_tags]

    text = "\n".join(paragraph_text)

    return text

def get_text_from_table(soup): #easy to unit test without patching
    '''takes a beautiful soup object and returns all table text'''
    text = ''
    table_tag = soup.find_all("table")
    for table_index, table in enumerate(table_tag):
        table_text = []
        rows = table.find_all("tr")

        for row in rows:
            data_content = row.find_all(["th", "td"])
            row_content = [cell.get_text() for cell in data_content]
            table_text.append("\t".join(row_content))
        text += "\nTable {}:".format(table_index + 1) + "\n" + "\n".join(table_text)
    
    return text

def get_text_from_collapsible(soup): #easy to unit test without patching
    text = ''
    dropdown_content = soup.find_all("section", class_="collapsible")
    for index, dropdown in enumerate(dropdown_content):
        dropdown_title = dropdown.find("h3", class_="js-collapsible collapsible__title")
        dropdown_content = dropdown.find("div", class_="collapsible__content")

        if dropdown_title and dropdown_content:
            title_txt = dropdown_title.get_text()
            content_txt = dropdown_content.get_text()

            text += f"\nCollapsible Section {index + 1}: {title_txt}\n{content_txt}"

    return text

def extract_text_from_url(url): #need to patch get_paragaphs_from_test, gest_test_from_table, get_text_from_collapsible
    html_content = get_html_from_url(url)
    soup = bs4.BeautifulSoup(html_content, "html.parser")

    paragraph_text = get_paragraphs_from_text(soup)
    table_text = get_text_from_table(soup)
    collapsible_text = get_text_from_collapsible(soup)

    all_text = paragraph_text + "\n" + table_text + "\n" + collapsible_text

    return all_text

output_folder = "uts_website_extracted"
os.makedirs(output_folder, exist_ok=True)

with open("web_scraped_data.csv", "w", newline="", encoding="utf-8") as csv_file:
    file_add = csv.writer(csv_file)
    file_add.writerow(["URL", "Content"])

    for keyphrase in unique_keyphrases:
        filtered_urls = [url for url in sorted_sublinks if keyphrase in url]
        sitemap = sorted(
            filtered_urls, key=lambda url: -len(extract_text_from_url(url))
        )[:100]

        for url in sitemap:
            extracted_text = extract_text_from_url(url)
            file_add.writerow([url, extracted_text])
