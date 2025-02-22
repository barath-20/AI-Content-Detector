import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

HUGGINGFACE_API_KEY = os.getenv("HUGGINGFACE_API_KEY")
