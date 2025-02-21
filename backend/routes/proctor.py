from fastapi import APIRouter, UploadFile
from services.face_gaze import track_face_gaze

router = APIRouter(prefix="/proctor", tags=["Face Tracking"])

@router.post("/face-gaze")
def face_gaze_detection(file: UploadFile):
    return track_face_gaze(file.file.read())
