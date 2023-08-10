class Video {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    getYouTubeId() {
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = this.url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        } else {
        //error
            return ""
        }
    }

    getThumbnailUrl() {
        return "https://img.youtube.com/vi/" + this.getYouTubeId() + "/sddefault.jpg"
    }
}

class Class {
   title: string;
   id: number;

   videos: Video[] = [];

    addVideo(video:Video) {
        this.videos.push(video);
    }

    constructor(title: string, id: number) {
        this.title = title;
        this.id = id;
    }

}