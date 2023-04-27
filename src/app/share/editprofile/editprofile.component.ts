import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../tweetservice/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent {
  user$ = this.userService.userInSessionChanged$;
  public form: FormGroup;

  @Output() close = new EventEmitter();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: [null, [
        Validators.max(140)]],
      bio: [null, [
        Validators.max(140)]],
    });

    this.user$.subscribe(user => {
      this.form.setValue({
        name: user.name,
        bio: user.bio
      })
    });
  }

  public submit() {
    if (this.form.valid) {
      let name = this.form.get('name')?.value;
      let bio = this.form.get('bio')?.value;
      let user = this.userService.getUserInSession();
      user.name = name;
      user.bio = bio;
      this.userService.updateUser(user);
      this.close.emit();
    }
  }

  public cancel() {
    this.close.emit();
  }

}
