import pyrebase
import os
from flask import jsonify
FIREBASE_API_KEY = os.environ.get("FIREBASE_API_KEY")
FIREBASE_AUTH_DOMAIN = os.environ.get("FIREBASE_AUTH_DOMAIN")
FIREBASE_DATABASE_URL = os.environ.get("FIREBASE_DATABASE_URL")
FIREBASE_PROJECT_ID = os.environ.get("FIREBASE_PROJECT_ID")
FIREBASE_STORAGE_BUCKET=os.environ.get("FIREBASE_STORAGE_BUCKET")
FIREBASE_MESSAGE_SENDER_ID=os.environ.get("FIREBASE_MESSAGE_SENDER_ID")
FIREBASE_APP_ID=os.environ.get("FIREBASE_APP_ID")
FIREBASE_MEASUREMENT_ID=os.environ.get("FIREBASE_MEASUREMENT_ID")
config={
    "apiKey": FIREBASE_API_KEY,
    "authDomain": FIREBASE_AUTH_DOMAIN,
    "databaseURL":FIREBASE_DATABASE_URL,
    "projectId": FIREBASE_PROJECT_ID,
    "storageBucket": FIREBASE_STORAGE_BUCKET,
    "messagingSenderId": FIREBASE_MESSAGE_SENDER_ID,
    "appId": FIREBASE_APP_ID,
    "measurementId": FIREBASE_MEASUREMENT_ID
}


class Firebase:
    def __init__(self, config):
        self.config = config
        self.firebase = pyrebase.initialize_app(self.config)
        self.storage = self.firebase.storage()
        self.cloud_storage_path = '/'
    
    def upload_files(self,local_image_path):
        try:
            self.storage.child(self.cloud_storage_path).put(local_image_path)
            print("Image uploaded successfully.")
            return jsonify({"status_code": 200,"message": "Image uploaded successfully."}),200
        except Exception as e:
            return jsonify({"status_code": 500,"message": "Error Uploading image"}),500
    def delete_files(self,local_image_path):
        try:
            self.storage.delete(token=None, name=f"{self.cloud_storage_path}{local_image_path}")
            print("Image deleted successfully.")
            return jsonify({"status_code": 200,"message": "Image deleted successfully."}),200
        except Exception as e:
            print("Error deleting image:", e)
            return jsonify({"status_code": 500,"message": "Error Deleting image"}),500