import { Component, Input } from '@angular/core';
import { Tweet } from "../model/tweet";
import { Router } from '@angular/router';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {

  @Input()
  public tweet: Tweet | null = null;

  constructor(
    private router: Router
  ) { }
  goToProfile() {
    this.router.navigate(['/profile/' + this.tweet?.author?.address])
  }

}
