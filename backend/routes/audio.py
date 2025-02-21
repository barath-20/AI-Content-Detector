from fastapi import APIRouter, UploadFile
from services.audio_ai import analyze_audio

router = APIRouter(prefix="/audio", tags=["Voice Analysis"])

@router.post("/analyze-audio")
def analyze_speech(file: UploadFile):
    """Processes audio and returns transcribed text."""
    audio_data = file.file.read()
    transcript = analyze_audio(audio_data)
    return {"transcription": transcript}
