import os
import whisper
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
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

model = whisper.load_model("tiny.en")


@app.get("/")
async def root():
    return "Go to /docs for API documentation and usage"


# Just a test endpoint to see if the API is up
@app.get("/ping")
async def main():
    return {"message": "pong"}


# Transcribe a video provided the youtube URL
@app.get("/transcribe")
async def transcribe(url: str):
    id = util.get_video_id(url)
    audio_path = util.download_video(url, "audio")
    res = model.transcribe(os.path.join(
        os.path.dirname(os.path.abspath(__file__)), audio_path))
    return {"transcription": res["text"]}
