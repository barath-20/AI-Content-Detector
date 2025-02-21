from fastapi import APIRouter
from services.ai_detector import detect_ai_generated_content

router = APIRouter(prefix="/detection", tags=["AI Content Detection"])

@router.post("/detect-ai")
def detect_ai(text: str):
    is_ai = detect_ai_generated_content(text)
    return {"is_ai_generated": is_ai}
