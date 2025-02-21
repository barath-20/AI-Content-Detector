# services/face_gaze.py

from deepface import DeepFace
import cv2
import numpy as np

def detect_faces(image_path):
    # Read the image
    img = cv2.imread(image_path)
    if img is None:
        raise ValueError("Image not found or unable to read")

    # Detect faces
    detections = DeepFace.detectFace(img, detector_backend='opencv', enforce_detection=False)

    if detections is None:
        return []

    # detections is a list of dictionaries; each dictionary contains 'region' and 'confidence' keys
    faces = []
    for detection in detections:
        x, y, w, h = detection['region'].values()
        
