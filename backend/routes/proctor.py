from fastapi import APIRouter
from services.face_gaze import detect_face_gaze

router = APIRouter()

@router.get("/monitor")
async def monitor_proctoring():
    return detect_face_gaze()
