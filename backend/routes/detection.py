from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.ai_detector import detect_ai_generated_content

router = APIRouter(prefix="/detection", tags=["AI Content & Typing Analysis"])

# Define a Pydantic model for request body
class TextRequest(BaseModel):
    text: str

@router.post("/detect-ai")
def detect_ai(request: TextRequest):
    """Detects if the input text is AI-generated."""
    is_ai = detect_ai_generated_content(request.text)
    return {"is_ai_generated": is_ai}

# from fastapi import APIRouter
# from services.ai_detector import detect_ai_generated_content
# from services.c_typing import analyze_typing_pattern

# router = APIRouter(prefix="/detection", tags=["AI Content & Typing Analysis"])

# @router.post("/detect-ai")
# def detect_ai(text: str):
#     """Detects if the input text is AI-generated."""
#     is_ai = detect_ai_generated_content(text)
#     return {"is_ai_generated": is_ai}

# @router.post("/analyze-typing")
# def typing_analysis(typing_data: dict):
#     """Analyzes typing speed and hesitation time for AI assistance detection."""
#     result = analyze_typing_pattern(typing_data)
#     return {"typing_analysis": result}
