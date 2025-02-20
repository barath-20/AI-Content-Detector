# routes/proctor.py

from fastapi import APIRouter, UploadFile, File
from services.face_gaze import detect_faces, annotate_faces
import shutil
import os

router = APIRouter()

@router.post("/detect_faces/")
async def detect_faces_endpoint(file: UploadFile = File(...)):
    # Save the uploaded file
    file_location = f"temp_{file.filename}"
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Detect faces
    faces = detect_faces(file_location)

    # Clean up the saved file
    os.remove(file_location)

    return {"number_of_faces": len(faces)}

@router.post("/annotate_faces/")
async def annotate_faces_endpoint(file: UploadFile = File(...)):
    # Save the uploaded file
    file_location = f"temp_{file.filename}"
    output_location = f"annotated_{file.filename}"
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Annotate faces
    annotate_faces(file_location, output_location)

    # Clean up the saved file
    os.remove(file_location)

    return {"annotated_image": output_location}
