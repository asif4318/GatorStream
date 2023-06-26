import yt_dlp
import os
import whisper
import multiprocessing

model = whisper.load_model("tiny.en")


# Gets the video id from YouTube URL
def get_video_id(url: str):
    return url.split('?v=')[1].split("&")[0]


# Downloads the video given the url
def download_video(url, folder):
    '''
    Given a youtube video url and target folder, this function will download video to that folder
    '''
    ytdl_format_options = {
        'format': 'm4a/bestaudio/best',
        'outtmpl': os.path.join(folder, '%(id)s.%(ext)s'),
        'postprocessors': [{  # Extract audio using ffmpeg
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'm4a',
        }]
    }

    with yt_dlp.YoutubeDL(ytdl_format_options) as ydl:
        error_code = ydl.download(url)
        return os.path.join(folder, get_video_id(url)+'.m4a')


def run_transcription(path: str):
    res = model.transcribe(path)
    print(res['text'])


def whisper_transcribe(url: str):
    download_video(url, "audio")
    audio_path = os.path.join(
        os.path.dirname(os.path.abspath(__file__)), download_video(url, "audio"))
    res = model.transcribe(audio_path)
    print(res['text'])
    # TODO: Upload the transcription to Database/Storage
