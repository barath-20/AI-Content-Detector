from fastapi import APIRouter
from pydantic import BaseModel
from services.typing import analyze_typing_behavior

router = APIRouter()

class TypingData(BaseModel):
    user_id: str
    typing_speed: float
    hesitation_time: float
    copy_paste_count: int

@router.post("/analyze")
async def analyze_typing(data: TypingData):
    result = analyze_typing_behavior(data.typing_speed, data.hesitation_time, data.copy_paste_count)
    return {"user_id": data.user_id, "flagged": result}
