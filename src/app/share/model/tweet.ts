export class Tweet {
    public date: Date;
    public message: string;
    public author: string;
    public likes: number;
    public retweets: Tweet[];
    public replies: Tweet[];
    public images: string[];

    constructor(){
        this.date = new Date();
        this.message = '';
        this.author = '';
        this.likes = 0;
        this.retweets = [];
        this.replies = [];
        this.images = [];
    }


}