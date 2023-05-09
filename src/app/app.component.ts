import { ApplicationRef, Component } from '@angular/core';
import { Web3Service } from "./share/web3service/web3.service";
import { Router } from '@angular/router';
import { User } from './share/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter-web3';

  public isWalletConnected: boolean = false;
  id!: string;
  user!: User;
  public constructor(protected web3Service: Web3Service,
    protected applicationRef: ApplicationRef,
    private router: Router) {

    this.web3Service.status$.subscribe((status: boolean) => {
      this.isWalletConnected = status;
      this.applicationRef.tick();
    });

  }

  public connectWallet() {
    this.web3Service.connectWallet()
    this.web3Service.getUserInSession().then(
      (user) => {
        this.id = user.owner;
        this.user = user;
      }
    )


  }

  public goToProfile() {

    this.router.navigate(['/profile/' + this.web3Service.getUserInSession()])
  }

}
