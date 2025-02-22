from fastapi import FastAPI
from routes import detection, behavior, proctor, audio

 

from fastapi.middleware.cors import CORSMiddleware
# Import your detection routes
app = FastAPI(title="AI Cheating Detector")


# Allow frontend requests from "http://localhost:5173"
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (change this to frontend URL for better security)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Include your routes

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
