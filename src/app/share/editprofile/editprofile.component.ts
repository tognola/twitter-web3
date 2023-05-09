import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { UserService } from '../tweetservice/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare let window: any;

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent {
  user$ = this.userService.userInSessionChanged$;
  public form: FormGroup;
  avatar = null;
  @Output() close = new EventEmitter();
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: [null, [
        Validators.max(140)]],
      bio: [null, [
        Validators.max(140)]]

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
      if (this.avatar != null) {
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(this.avatar);
        reader.onloadend = () => {
          window.Buffer = require('buffer/').Buffer;
          user.avatarBuffer = new window.Buffer(reader.result)
          this.userService.updateUser(user);
          this.close.emit();
        }
      } else {
        this.userService.updateUser(user);
        this.close.emit();
      }
    }
  }

  public onFileSelected(event: any) {

    this.avatar = event.target.files[0];

  }

  public cancel() {
    this.close.emit();
  }

}
