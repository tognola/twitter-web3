import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../share/tweetservice/user.service';
import { User } from '../share/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Web3Service } from '../share/web3service/web3.service';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user$;
  showEditProfile = false;
  sameUser = false;
  constructor(
    private userService: UserService,
    protected web3Service: Web3Service,
    private router: Router
  ) {

    const id = this.router.url.split('/').pop();

    if (id != null) {
      this.user$ = from(this.userService.getUser(id))


    }
    this.web3Service.getUserInSession().then(
      (user) => {
        this.sameUser = user.owner == id;
      })
  }
}
