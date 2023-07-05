import os
from fastapi import BackgroundTasks, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from multiprocessing import Process
import util

app = FastAPI()

# Handle CORS issues and setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return "Go to /docs for API documentation and usage"


# Just a test endpoint to see if the API is up
@app.get("/ping")
async def main():
    return {"message": "pong"}


# Transcribe a video provided the youtube URL
@app.get("/transcribe")
async def transcribe(url: str, background_tasks: BackgroundTasks):
    # Create a process and execute it in parallel so an immediate API response is returned
    background_tasks.add_task(util.whisper_transcribe, url=url)
    return {"message": "Received YouTube URL and currently transcribing in background!"}
