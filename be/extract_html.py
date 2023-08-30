from sitemap import sitemap
import bs4 
import requests
import os
import re

domain = sitemap[0]
output_folder = "uts_website_extracted"

def extract_text_from_url(url, output_filename):
    output_filepath = os.path.join(output_folder, output_filename + ".txt")

    response = requests.get(url)
    html_content = response.content

    soup = bs4.BeautifulSoup(html_content, 'html.parser')

    # Find all <p> tags and extract their text content
    p_tags = soup.find_all('p')
    p_tags = p_tags[:-4] #remove aknowledgement of country

    paragraph_text = [p.get_text() for p in p_tags ]

    text = '\n'.join(paragraph_text)  # Join paragraphs with newline


    with open(output_filepath, "w", encoding="utf-8") as output_file:
        output_file.write(url)
        output_file.write("\n")
        output_file.write(text)


print("Extracting", len(sitemap), "html pages from", sitemap[0], "...")
count = 0

for i in range(0, len(sitemap)+1):
    url = sitemap[i]
    count += 1
    if count % 500 == 0:
        print("Processed ", count, "pages.....")
        
    output_filename = re.sub(r'\W+', '_', url.replace(domain, ""))
    extract_text_from_url(url, output_filename)
