import google.generativeai as genai
import os
import PIL.Image
class Generate:
    def __init__(self, api_key,image):
        """ 
        Contructor to initialise the global variables. It configures the model to be used.

        Args: api_key: str
        
        Returns: None            
        """
        self.API = api_key
        genai.configure(api_key=self.API)
        self.modelText = genai.GenerativeModel('gemini-pro')
        self.modelImage = genai.GenerativeModel('gemini-pro-vision')
    
    def get_image_list(self,location,image):
        prompt = "Identify the disease in the image. Provide the common name of the disease. Provide only the disease name and nothing else."
        img=PIL.Image.open(image)
        r_image = self.modelImage.generate_content([prompt, img], stream=True)
        r_image.resolve()
        print(r_image.text)
        response = self.modelText.generate_content(f"I am suffering from {r_image.text}. I am from {location}. Generate me a list of all the nearby doctors who can treat me. Provide their names and contact info and address. Generate only the name contact info and address in a structured manner, nothing else.")
        return response.text
    def get_text_list(self,location,symptoms):
        prompt = f"I am suffering from {symptoms}. I am from {location}. Generate me a list of all the nearby doctors who can treat me. Provide their names and contact info and address. Generate only the name contact info and address in a structured manner, nothing else."
        response = self.modelText.generate_content(prompt)
        return response.text

