
from fastapi import FastAPI
from routes import detection, behavior, proctor, audio
import uvicorn

app = FastAPI(title="AI Cheating Detection System")

# Include routes
app.include_router(detection.router, prefix="/detection", tags=["AI Content Detection"])
app.include_router(behavior.router, prefix="/behavior", tags=["Typing Behavior Analysis"])
app.include_router(proctor.router, prefix="/proctor", tags=["Proctoring & Face Detection"])
app.include_router(audio.router, prefix="/audio", tags=["Voice Analysis"])

@app.get("/")
async def root():
    return {"message": "AI Cheating Detection System is Running!"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
