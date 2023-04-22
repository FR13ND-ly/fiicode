import { Component } from '@angular/core';
import { AuthService } from '../shared/data-access/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(private authService : AuthService) { }

  user$ = this.authService.getUserUpdateListener()

  onLogin(user : any) {
    console.log(user)
    // this.authService.login()
  }
}
