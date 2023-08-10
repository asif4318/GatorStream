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

export default class DefaultData {
    classes: Class[]
    
    constructor() {
        this.classes = this.setupClasses();
    }

    private setupClasses() {
        const class1 = new Class("PHY2048", 1);
        const class2 = new Class("BSC2010", 2);
        const class3 = new Class("CEN4721", 3);
        class1.addVideo(new Video("https://www.youtube.com/watch?v=OoO5d5P0Jn4&list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV"));
        class1.addVideo(new Video("https://www.youtube.com/watch?v=ZM8ECpBuQYE&list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV&index=2"));
        class1.addVideo(new Video("https://www.youtube.com/watch?v=ObHJJYvu3RE&list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV&index=3"));
        class2.addVideo(new Video("https://www.youtube.com/watch?v=ax0yjzbSBa4"));
        class2.addVideo(new Video("https://www.youtube.com/watch?v=tZE_fQFK8EY"));
        class2.addVideo(new Video("https://www.youtube.com/watch?v=i8wi0QnYN6s"));
        class3.addVideo(new Video("https://www.youtube.com/watch?v=msCpKC7yhhU"));
        class3.addVideo(new Video("https://www.youtube.com/watch?v=BT2Cv-Tjq7Q"));
        class3.addVideo(new Video("https://www.youtube.com/watch?v=EslYwlidqU4"));
        return [class1, class2, class3]
    }
}