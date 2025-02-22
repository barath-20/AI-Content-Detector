import requests
from config import HUGGINGFACE_API_KEY

API_URL = "https://api-inference.huggingface.co/models/sentence-transformers/paraphrase-mpnet-base-v2"

def check_plagiarism(text1: str, text2: str) -> float:
    headers = {"Authorization": f"Bearer {HUGGINGFACE_API_KEY}"}
    payload = {"inputs": {"source_sentence": text1, "sentences": [text2]}}

    response = requests.post(API_URL, headers=headers, json=payload)

    if response.status_code == 200:
        return response.json()[0]  # Similarity score
    return 0.0
