from fastapi import APIRouter
from fastapi import APIRouter
from services.audio_ai import detect_speech

router = APIRouter()

@router.get("/analyze")
async def analyze_audio():
    return detect_speech()
