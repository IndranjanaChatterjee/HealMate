import google.generativeai as genai
import os
from flask import jsonify
import PIL.Image
from database.firebaseConn import Firebase
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
    
    def cloud_upload(self, image):
        firebase = Firebase()
        res = firebase.upload_files(image)
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



    def get_image_list(self,location,image):
        prompt = eval(f'f"{self.GEMINI_IMAGE_PROMPT}"')
        img=PIL.Image.open(image)
        r_image = self.modelImage.generate_content([prompt, img], stream=True)
        r_image.resolve()
        print(r_image.text)
        response = self.modelText.generate_content(f"I am suffering from {r_image.text}. I am from {location}. Generate me a list of all the nearby doctors who can treat me. Provide their names and contact info and address. Generate only the name contact info and address in a structured manner, nothing else.")
        return response.text
    def get_text_list(self,location,symptoms):
        prompt = prompt = eval(f'f"{self.GEMINI_TEXT_PROMPT}"')
        response = self.modelText.generate_content(prompt)
        return response.text

