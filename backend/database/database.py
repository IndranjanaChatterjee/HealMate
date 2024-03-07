import os
from pymongo import MongoClient

class Database:
    
    def __init__(self):
        self.MONGO_PASSWORD = os.environ.get("MONGO_PASSWORD")
        self.CONNECTION = f"mongodb+srv://bakshiagnik:{self.MONGO_PASSWORD}@glittrmd.hlkvnfr.mongodb.net/?retryWrites=true&w=majority"
        self.CLIENT = MongoClient(self.CONNECTION)
        if self.CLIENT:
            print("=========Connection Successfull=============")
        else:
            print("==========Connection Failed==========")
        self.DATABASE = self.CLIENT.get_database("healmate_db")
        self.COLLECTION = self.DATABASE['heal_mate']


    