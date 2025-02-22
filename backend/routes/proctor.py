from fastapi import APIRouter, UploadFile
from services.face_gaze import track_face_gaze
from services.audio_ai import analyze_audio

router = APIRouter(prefix="/proctor", tags=["Face Tracking & Audio"])

@router.post("/face-gaze")
def face_gaze_detection(file: UploadFile):
    """Detects if the user is distracted or focused based on face gaze analysis."""
    image_data = file.file.read()
    result = track_face_gaze(image_data)
    return {"face_gaze_result": result}

@router.post("/analyze-audio")
def analyze_speech(file: UploadFile):
    """Processes an uploaded audio file and returns transcribed text."""
    audio_data = file.file.read()
    transcript = analyze_audio(audio_data)
    return {"transcription": transcript}
