import os
import uuid
from pymongo import MongoClient

class Database:
    
    def __init__(self):
        self.MONGO_PASSWORD = os.environ.get("MONGO_PASSWORD")
        self.CONNECTION = f"mongodb+srv://bakshiagnik:{self.MONGO_PASSWORD}@healmatedb.biycvtm.mongodb.net/?retryWrites=true&w=majority&appName=HealMateDB"
        self.CLIENT = MongoClient(self.CONNECTION)
        if self.CLIENT:
            print("=========Connection Successful=============")
        else:
            print("==========Connection Failed==========")
        self.DATABASE = self.CLIENT.get_database("healmate_db")
        self.COLLECTION = self.DATABASE['heal_mate']

    def user_login(self, name, email, user_image):
        existing_user = self.COLLECTION.find_one({'email': email})

        if not existing_user:
            unique_id = str(uuid.uuid4())
            new_user = {
                '_id': unique_id,
                'name': name,
                'email': email,
                'profile_pic': user_image,
                'doctor_lists': {}
            }
            self.COLLECTION.insert_one(new_user)
            return None  # User does not exist, no session token generated
        else:
            # Generate and return a random string as a session token
            session_token = str(uuid.uuid4())
            return session_token
        
    def update_list(self, user_email, disease, names, addresses, mobiles):
        user_query = {'email': user_email}
        user = self.COLLECTION.find_one(user_query)

        if user:
            # If the disease doesn't exist in the user's doctor_list, create a new entry
            if disease not in user['doctor_lists']:
                user['doctor_lists'][disease] = {'names': [], 'addresses': [], 'mobiles': []}

            # Update the lists and ensure the new entry is at the start
            user['doctor_lists'][disease]['names'] = names + user['doctor_lists'][disease]['names']
            user['doctor_lists'][disease]['addresses'] = addresses + user['doctor_lists'][disease]['addresses']
            user['doctor_lists'][disease]['mobiles'] = mobiles + user['doctor_lists'][disease]['mobiles']

            # Move the new disease entry to the start of the doctor_list
            user['doctor_lists'] = {disease: user['doctor_lists'][disease], **user['doctor_lists']}

            # Update the user document in the collection
            self.COLLECTION.update_one(user_query, {'$set': {'doctor_lists': user['doctor_lists']}})

            # Return the updated doctor's list for the specified disease
            return user['doctor_lists']
        else:
            print(f"User with email {user_email} not found.")
            return None

# Example usage:
""" db = Database()
session_token = db.user_login("John Doe", "john.doe@example.com", "https://example.com/profile_pic.jpg")

if session_token:
    print(f"User logged in. Session token: {session_token}")
else:
    print("New user registered.")
user_email = "john.doe@example.com"
disease = "Fracture"
names = ["Pradeep Agarwal",
            "Sutapa Khanra",
            "Anirban Banerjee",
            "Nibedita Naskar",
            "Debmalya Bagchi"]
addresses = ["198 Old GT Road, Howrah",
            "Dr. Akhil Chandra Dey Road, Howrah",
            "105 Salkia School Road",
            "92 Benares Road, Howrah",
            "166 Mahatma Gandhi Road, Howrah"]
mobiles = ["+91 9804703838",
            "+91 7001200288",
            "+91 9830768589",
            "+91 8240737182",
            "+91 9830218155"]
diseases_list = db.update_list(user_email, disease, names, addresses, mobiles)
print(diseases_list) """
