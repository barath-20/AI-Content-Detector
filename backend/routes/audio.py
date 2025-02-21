from fastapi import APIRouter, UploadFile
from services.audio_ai import analyze_audio

router = APIRouter(prefix="/audio", tags=["Voice Analysis"])

@router.post("/analyze-audio")
def analyze_speech(file: UploadFile):
    return analyze_audio(file.file.read())
