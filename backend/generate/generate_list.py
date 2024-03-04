import google.generativeai as genai
import os
from flask import jsonify
import PIL.Image
from database.firebaseConn import Firebase
import PIL
import datetime
import random
from pathlib import Path

class Generate:
    def __init__(self, api_key):
        """ 
        Contructor to initialise the global variables. It configures the model to be used.

        Args: api_key: str
        
        Returns: None            
        """
        self.API = api_key
        genai.configure(api_key=self.API)
        self.modelText = genai.GenerativeModel('gemini-pro')
        self.modelImage = genai.GenerativeModel('gemini-pro-vision')
        self.GEMINI_TEXT_PROMPT = os.environ.get("GEMINI_TEXT_PROMPT")
        self.GEMINI_IMAGE_PROMPT = os.environ.get("GEMINI_IMAGE_PROMPT")
    
    def cloud_upload(self, full_save_path,new_name):
        firebase = Firebase()
        res = firebase.upload_files(full_save_path,new_name)
        if res is not None:
            return jsonify({"status_code": 200,"message": "Image uploaded successfully."}),200
        else:
           return jsonify({"status_code": 500,"message": "Error Uploading image"}),500 
    def cloud_delete(self, image):
        firebase = Firebase()
        res = firebase.delete_files(image)
        if res is not None:
            return jsonify({"status_code": 200,"message": "Image uploaded successfully."}),200
        else:
           return jsonify({"status_code": 500,"message": "Error Uploading image"}),500 
    
    def parse_response(self,response):
        # Split the response into individual entries
        entries = response.split('\n')

        # Initialize empty lists for name, address, and mobile
        names = []
        addresses = []
        mobiles = []

        # Iterate through each entry and extract information
        for entry in entries:
            if entry:
                # Find the index of "Dr" in the entry
                dr_index = entry.find("Dr. ")

                # Check if "Dr" is found in the entry
                if dr_index != -1:
                    # Find the first colon (:) after "Dr"
                    colon_index = entry.find(":", dr_index)

                    # Ensure that both "Dr" and colon are found in the entry
                    if colon_index != -1:
                        # Extract the name between "Dr" and the first colon
                        name = entry[dr_index + 3:colon_index].strip()
                        names.append(name)
                        
                        # Split the remaining part of the entry into address and mobile using colon as a separator
                        address_mobile_part = entry[colon_index + 1:].split(':')
                        
                        # Ensure that the remaining part has at least two parts (address and mobile)
                        if len(address_mobile_part) == 2:
                            addresses.append(address_mobile_part[0].strip())
                            mobiles.append(address_mobile_part[1].strip())
        return names, addresses, mobiles

    def generate_random_name(self, image_path):
        _, extension = os.path.splitext(image_path)
        random_string = ''.join(random.choices('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', k=6))
        current_datetime = datetime.datetime.now().strftime("%m-%d-%Y_%H-%M-%S")
        new_name = f"{random_string}{current_datetime}{extension}"
        return new_name
    def get_image_list(self,location,image):
        IMG_PROMPT = os.environ.get("GEMINI_IMAGE_GEN_PROMPT")
        image_path = image.filename
        new_name = self.generate_random_name(image_path)
        database_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "database")
        full_save_path = os.path.join(database_dir, new_name)
        image.save(full_save_path)
        img = PIL.Image.open(image)
        self.cloud_upload(full_save_path,new_name)
        r_image = self.modelImage.generate_content([IMG_PROMPT, img], stream=True)
        r_image.resolve()
        print(r_image.text)
        prompt = eval(f'f"{self.GEMINI_IMAGE_PROMPT}"')
        response = self.modelText.generate_content(prompt)
        self.cloud_delete(new_name)
        names, addresses, mobiles = self.parse_response(response.text)
        generated_data = [names, addresses, mobiles, r_image.text]
        return generated_data
    def get_text_list(self,location,symptoms):
        prompt = eval(f'f"{self.GEMINI_TEXT_PROMPT}"')
        response = self.modelText.generate_content(prompt)
        return response.text

