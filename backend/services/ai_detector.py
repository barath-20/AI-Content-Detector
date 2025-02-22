import requests
from config import HUGGINGFACE_API_KEY

API_URL = "https://api-inference.huggingface.co/models/openai-community/roberta-base-openai-detector"

def detect_ai_generated_content(text: str) -> bool:
    headers = {"Authorization": f"Bearer {HUGGINGFACE_API_KEY}"}
    response = requests.post(API_URL, headers=headers, json={"inputs": text})

    if response.status_code == 200:
        result = response.json()
        print("API Response:", result)  # Debugging: Print full response

        # Fix: Extract the label from the nested list
        if isinstance(result, list) and len(result) > 0 and isinstance(result[0], list) and len(result[0]) > 0:
            label = result[0][0]["label"]  # Extract "label" from the first dict inside the first list
            return label == "Real"  # The API uses "Fake" for AI-generated content
    
    print("Error or unexpected response format:", response.text)
    return False

# Test the function
text = "The rapid advancement of artificial intelligence has led to groundbreaking innovations..."
is_ai_generated = detect_ai_generated_content(text)
print("Is AI Generated:", is_ai_generated)
