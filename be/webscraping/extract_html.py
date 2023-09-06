from sitemap import sitemap  
import bs4 
import requests
import os
import re
import csv

domain = sitemap[0]

sitemap = [
    "https://www.uts.edu.au",
    "https://www.uts.edu.au/current-students/managing-your-course/important-dates/census-date", 
    "https://www.uts.edu.au/current-students/managing-your-course/important-dates/last-day-enrol",
    "https://www.uts.edu.au/current-students/managing-your-course/your-enrolment/enrolling-subjects"]

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

     # Find all <table> tags and extract their text content
    table_tag = soup.find_all('table')
    for table_index, table in enumerate(table_tag):
        table_text = []
        rows = table.find_all('tr')
        
        for row in rows:
            data_box = row.find_all(['th', 'td'])
            row_content = [cell.get_text() for cell in data_box]
            table_text.append('\t'.join(row_content))
        text += '\nTable {}:'.format(table_index + 1) + '\n' + '\n'.join(table_text)



# Extract from dropdowns (Collapsible sections)
    dropdown_content = soup.find_all('section', class_='collapsible')
    for index, dropdown in enumerate(dropdown_content):
        dropdown_title = dropdown.find('h3', class_='js-collapsible collapsible__title')
        dropdown_content = dropdown.find('div', class_='collapsible__content')
        
        if dropdown_title and dropdown_content:
            title_txt = dropdown_title.get_text()
            content_txt = dropdown_content.get_text()
            
            text += f'\nCollapsible Section {index + 1}: {title_txt}\n{content_txt}'

    # Return the extracted text
    return text


# Create a CSV file
with open('web_scraped_data.csv', 'w', newline='', encoding="utf-8") as csv_file:
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(["URL", "Extracted Text"])
    
    for url in sitemap:
        output_filename = re.sub(r'\W+', '_', url.replace(domain, ""))
        extracted_text = extract_text_from_url(url, 'output')
        
        csv_writer.writerow([url, extracted_text])

print("Data extraction and CSV creation complete.")
