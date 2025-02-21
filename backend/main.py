
from fastapi import FastAPI
from routes import detection, behavior
import uvicorn

app = FastAPI(title="AI Cheating Detection System")

# Include API routes
app.include_router(detection.router, prefix="/detection", tags=["AI Content Detection"])
app.include_router(behavior.router, prefix="/behavior", tags=["Typing Behavior Analysis"])


@app.get("/")
async def root():
    return {"message": "AI Cheating Detection System is Running!"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
