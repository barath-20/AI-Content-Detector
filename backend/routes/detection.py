from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.ai_detector import detect_ai_content

router = APIRouter()

class TextSubmission(BaseModel):
    user_id: str
    text: str

@router.post("/check")
async def check_ai_generated_content(data: TextSubmission):
    result = detect_ai_content(data.text)
    return {"user_id": data.user_id, "is_ai_generated": result["is_ai"], "confidence": result["confidence"]}
