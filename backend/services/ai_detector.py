import requests
import os

def detect_ai_generated_content(text: str) -> bool:
    """
    Detect if the given text is AI-generated using GPT-0.
    """
    api_url = "https://api.gptzero.me/v2/predict"
    api_key = os.getenv("GPTZERO_API_KEY")

    headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}
    payload = {"document": text}

    response = requests.post(api_url, json=payload, headers=headers)

    if response.status_code == 200:
        result = response.json()
        return result.get("is_ai", False)  # True if AI-generated, False otherwise
    else:
        print("Error:", response.json())
        return False
