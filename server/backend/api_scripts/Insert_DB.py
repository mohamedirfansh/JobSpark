import ssl
import certifi
import os
import json
import schedule
import time
import get_data

ca = certifi.where()
backend_path = os.path.normpath(os.getcwd() + os.sep + os.pardir)
job_path = os.path.join(backend_path,"data_careerjet")


#JSON files
json_lists = []
junior_json = os.path.join(job_path, "combined_data.json")
json_lists.append(junior_json)

def get_database():
    from pymongo import MongoClient
    import pymongo

    # Provide the mongodb atlas url to connect python to mongodb using pymongo
    CONNECTION_STRING = "mongodb+srv://multiverse:endgame@multiverse.rrpbf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
    from pymongo import MongoClient
    client = MongoClient(CONNECTION_STRING, tlsCAFile=ca)

    # Create the database for our example (we will use the same database throughout the tutorial
    return client['career_list']

# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":

    # Get the database
    dbname = get_database()


#collection_name
collection_list = []
junior_collection = dbname["Junior"]
collection_list.append(junior_collection)

def clean_DB():
    for list in collection_list:
        list.drop()

def insert_DB():
    clean_DB()
    get_data.api_retrieval("xx.xx.xx.xx")
    index = 0
    for files in json_lists:
        with open(files, 'r') as f:
            data = json.load(f)
        collection_list[index].insert_many(data)
        index += 1
    print("Data inserted")


#Insert once a day
schedule.every(1).day.at("10:30").do(insert_DB)

while True:
    schedule.run_pending()
    time.sleep(1)
