import os
import json
from careerjet_api_client import CareerjetAPIClient

def api_retrieval(ip):
    # set the search engine to location Singapore :en_SG  => 'http://www.careerjet.sg'
    cj  =  CareerjetAPIClient("en_SG")

    # categories which the group chose
    categories = ['Information Technology', 'Healthcare', 'Banking', 'Manufacturing', 'F&B', 'Retail', 'Diploma', 'Aerospace', 'Customer Service']

    # API retrieval
    for string in categories:
        user_input = "Junior, " + string
        result_json = cj.search({
                                'pagesize'    : '200',
                                'location'    : 'Singapore',
                                'keywords'    : user_input,
                                'affid'       : 'df27d01a3ac5c8f5c51568fbed761ff3',
                                'user_ip'     : ip,
                                'url'         : 'http://www.example.com/jobsearch?q={user_input}&l=singapore',
                                'user_agent'  : 'Mozilla/5.0 (X11; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0'
                            })

        # adding the field "industry"
        for job in result_json['jobs']:
            job['industry'] = string

        # storing results into individual json files
        filename = user_input + '.json'
        with open (filename, 'w') as file:
            json.dump(result_json['jobs'], file)
            file.close()

    pwd = os.getcwd()
    files = os.listdir(pwd)

    # storing results into a list
    junior_dictionary = []
    for file in files:
        if "json" in file:
            with open(file, 'r') as f:
                data = json.load(f)
                junior_dictionary.extend(data)
                f.close()

    # storing combined results into a json file
    with open('combined_data.json', 'w') as w:
        json.dump(junior_dictionary, w)
        w.close()
    print("Function completed!")

# for testing purposes
if __name__ == "__main__":
    api_retrieval("xx.xx.xx.xx")