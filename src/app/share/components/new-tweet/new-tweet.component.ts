import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TweetService } from '../../tweetservice/tweet.service';
import { Tweet } from '../../model/tweet';

@Component({
  selector: 'new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.scss']
})
export class NewTweetComponent {
  form: FormGroup;

  public constructor(
    private formBuilder: FormBuilder,
    private tweetService: TweetService
  ) {
    this.form = this.formBuilder.group({
      message: [null, [
        Validators.maxLength(140),
        Validators.required
      ]]
    });
  }

  sendTweet() {
    if (this.form.valid) {
      const tweet = new Tweet();
      tweet.author = 'Antonio';
      tweet.message = this.form.value.message;
      tweet.date = new Date();
      tweet.likes = 0;
      this.tweetService.addTweet(tweet);
      this.form.get('message')?.setValue(null);
    }
  }

}
