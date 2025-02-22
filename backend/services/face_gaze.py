import cv2
import mediapipe as mp
import numpy as np

mp_face_mesh = mp.solutions.face_mesh

def track_face_gaze(frame: bytes) -> str:
    face_mesh = mp_face_mesh.FaceMesh(static_image_mode=True, refine_landmarks=True)
    frame_array = cv2.imdecode(np.frombuffer(frame, np.uint8), cv2.IMREAD_COLOR)
    
    results = face_mesh.process(frame_array)

    if results.multi_face_landmarks:
        for face_landmarks in results.multi_face_landmarks:
            eye_x = face_landmarks.landmark[33].x
            nose_x = face_landmarks.landmark[1].x

            if abs(eye_x - nose_x) > 0.05:
                return "Distracted - Possible cheating detected"
        return "Focused - Normal exam behavior"
    
    return "No face detected"
