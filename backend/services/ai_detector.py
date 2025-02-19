import requests
import os

def detect_ai_generated_content(text: str) -> bool:
    """
    Detect if the given text is AI-generated using GPTZero API.
    """
    api_key = os.getenv("GPTZERO_API_KEY")
    api_url = "https://api.gptzero.me/v2/predict"

    headers = {
        "x-api-key": api_key,
        "Content-Type": "application/json"
    }

    payload = {
        "document": text
    }

    response = requests.post(api_url, json=payload, headers=headers)

    if response.status_code == 200:
        result = response.json()
        is_ai_generated = result.get("completely_generated", False)
        return is_ai_generated
    else:
        print("Error:", response.json())
        return False
