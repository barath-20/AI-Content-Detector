import requests
from config import HUGGINGFACE_API_KEY

API_URL = "https://api-inference.huggingface.co/models/roberta-base-openai-detector"

def detect_ai_generated_content(text: str) -> bool:
    headers = {"Authorization": f"Bearer {HUGGINGFACE_API_KEY}"}
    response = requests.post(API_URL, headers=headers, json={"inputs": text})

    if response.status_code == 200:
        result = response.json()
        return result[0]['label'] == "AI-generated"
    return False
