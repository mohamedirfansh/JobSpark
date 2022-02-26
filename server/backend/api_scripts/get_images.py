import json
import os
from bs4 import BeautifulSoup
import urllib
import urllib.parse
import urllib.request


# this code is modified from https://stackoverflow.com/questions/20716842/python-download-images-from-google-image-search
# thanks to vijay shanker
# modified errors with regards to urllib.parse, urllib.request to fit python version 3.9.7
class GoogleeImageDownloader(object):
    _URL = "https://www.google.co.in/search?q={}&source=lnms&tbm=isch"
    _BASE_DIR = 'GoogleImages'

    # changing the chrome version to the version that I am using - ONLY chrome has been updated
    _HEADERS = {
        'User-Agent':"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
    }

    def __init__(self, query):
        print("Current image query", query)
        self.dir_name = os.path.join(self._BASE_DIR, query)
        self.url = self._URL.format(urllib.parse.quote(query)) 
        self.make_dir_for_downloads()
        self.initiate_downloads()

    def make_dir_for_downloads(self):
        print("Creating necessary directories")
        if not os.path.exists(self._BASE_DIR):
            os.mkdir(self._BASE_DIR)

        if not os.path.exists(self.dir_name):
            os.mkdir(self.dir_name)

    def initiate_downloads(self):
        src_list = []
        soup = BeautifulSoup(urllib.request.urlopen(urllib.request.Request(self.url,headers=self._HEADERS)),'html.parser')
        for img in soup.find_all('img'):
            if img.has_attr("data-src"):
                src_list.append(img['data-src'])
        print("{} of images collected for downloads".format(len(src_list)))
        self.save_images(src_list)

    # removing the exception raised by changing it to pass
    def save_images(self, src_list):
        print("Saving Images...")
        for i , src in enumerate(src_list):
            try:
                req = urllib.request.Request(src, headers=self._HEADERS)
                raw_img = urllib.request.urlopen(req).read()
                with open(os.path.join(self.dir_name , str(i)+".jpg"), 'wb') as f:
                    f.write(raw_img)
            except Exception as e:
                pass


# loading company names to download logo
with open('combined_data.json', 'r') as file:
    data = json.load(file)
    file.close()

# ensuring that no duplicated names are appended into the list
all_companies = []
for listing in data:
    for job in listing:
        company_name = listing['company'].strip()
        if company_name not in all_companies and len(company_name) > 0:
            all_companies.append(company_name)

# executing logo downloader via for loop
for name in all_companies:
    GoogleeImageDownloader(name)