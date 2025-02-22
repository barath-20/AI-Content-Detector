import cv2
import mediapipe as mp
import numpy as np
import tempfile

mp_face_mesh = mp.solutions.face_mesh

def track_face_gaze(video_bytes: bytes) -> str:
    # Save video bytes to a temporary file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".mp4") as temp_video:
        temp_video.write(video_bytes)
        temp_video_path = temp_video.name

    # Open the video file
    cap = cv2.VideoCapture(temp_video_path)

    if not cap.isOpened():
        return "Error: Unable to open video"

    face_mesh = mp_face_mesh.FaceMesh(static_image_mode=False, refine_landmarks=True)

    distracted_frames = 0
    total_frames = 0

    distraction_threshold = 10  # Ignore small head movements
    consecutive_distracted = 0  # Track continuous distraction duration

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        total_frames += 1
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = face_mesh.process(rgb_frame)

        if results.multi_face_landmarks:
            for face_landmarks in results.multi_face_landmarks:
                left_eye_x = face_landmarks.landmark[33].x
                right_eye_x = face_landmarks.landmark[263].x
                nose_x = face_landmarks.landmark[1].x

                # Calculate head movement based on both eyes & nose
                gaze_deviation = abs(left_eye_x - nose_x) + abs(right_eye_x - nose_x)

                if gaze_deviation > 0.07:  # Adjust threshold for natural movements
                    consecutive_distracted += 1
                else:
                    consecutive_distracted = 0  # Reset if user looks back

                if consecutive_distracted >= distraction_threshold:
                    distracted_frames += 1

    cap.release()

    distraction_percentage = (distracted_frames / total_frames) * 100 if total_frames > 0 else 0

    if distraction_percentage > 30:  # Flag only if distraction is frequent
        return f"Distracted ({distraction_percentage:.2f}% of the time) - Possible cheating detected"
    else:
        return f"Focused ({100 - distraction_percentage:.2f}% of the time) - Normal exam behavior"
