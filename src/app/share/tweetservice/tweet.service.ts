import { Injectable } from "@angular/core";
import { Tweet } from "../model/tweet";

@Injectable()
export class TweetService{
    constructor(){

    }

    getTweets(){
        let tweets: Tweet[] = [];
        
        let t1 = new Tweet();
        t1.author = 'Antonio';
        t1.message = 'Hello world!';
        tweets.push(t1);
    
        let t2 = new Tweet();
        t2.author = 'Antonio';
        t2.message = 'Second Tweet!';
        tweets.push(t2);
    
        let t3 = new Tweet();
        t3.author = 'Antonio';
        t3.message = 'Third Tweet!';
        tweets.push(t3);
    
        let t4 = new Tweet();
        t4.author = 'Antonio';
        t4.message = 'Fourth Tweet!';
        tweets.push(t4);

        return tweets;
    }
}