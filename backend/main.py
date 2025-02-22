from fastapi import FastAPI
from routes import detection, behavior, proctor, audio

app = FastAPI(title="AI Cheating Detector")

# Include routes
app.include_router(detection.router)
app.include_router(behavior.router)
app.include_router(proctor.router)
app.include_router(audio.router)

@app.get("/")
def home():
    return {"message": "AI Cheating Detection API is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
