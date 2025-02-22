import requests
from config import HUGGINGFACE_API_KEY

API_URL = "https://api-inference.huggingface.co/models/facebook/wav2vec2-base-960h"

def analyze_audio(audio_data: bytes) -> str:
    headers = {"Authorization": f"Bearer {HUGGINGFACE_API_KEY}"}
    response = requests.post(API_URL, headers=headers, data=audio_data)

    if response.status_code == 200:
        return response.json().get("text", "No speech detected")
    return "Error in processing"
