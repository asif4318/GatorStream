FROM python:3.10-slim

WORKDIR /python-docker

COPY requirements.txt requirements.txt
RUN apt-get update && apt-get install git -y
RUN pip3 install -r requirements.txt
RUN pip3 install "git+https://github.com/openai/whisper.git" 
RUN pip3 install fastapi yt_dlp
RUN pip3 install uvicorn
RUN apt-get install -y ffmpeg

COPY . .

EXPOSE 80

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "80"]
