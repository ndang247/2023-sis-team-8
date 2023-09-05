from bs4 import BeautifulSoup
import requests

num_pages = 13
base_url = "https://www.uts.edu.au/sitemap.xml?page={0}"  # Replace with the actual URL    -> get URL from key phrase -> create a function here.( takes a string that has a key phrase and it searches the sitemap and extracts the url, returns a list of URL)
sitemap_urls = []

def get_url_from_keyPhrase(keyphrase, sitemap):
    '''This function loops through the sitemap and searches for keyphrase in the URL'''
    return url_list


# pseodo code 
# Test 
# Actual Code


for i in range(1,num_pages+1):
    url = base_url.format(i)
    sitemap_urls.append(url)

def get_urls_from_sitemap(url):
    response = requests.get(url)
    xml_content = response.text
    soup = BeautifulSoup(xml_content, 'xml')
    urls = [url.text.strip() for url in soup.find_all('loc')]
    return urls

all_sublinks = []
for sitemap_url in sitemap_urls:
    print("extracting links from: ", sitemap_url)
    sublinks = get_urls_from_sitemap(sitemap_url)
    print("extracted ", len(sublinks))
    all_sublinks = all_sublinks + sublinks

with open('sitemap.txt', 'w') as file:
    file.write(str(all_sublinks))

