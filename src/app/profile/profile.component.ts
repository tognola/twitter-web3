import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../share/tweetservice/user.service';
import { User } from '../share/model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user$ = this.userService.userInSessionChanged$;
  showEditProfile = false;
  constructor(
    private userService: UserService
  ) {

  }
}
