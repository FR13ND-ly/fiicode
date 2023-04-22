import { Component } from '@angular/core';
import { AuthService } from '../shared/data-access/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(private authService : AuthService, private router: Router) { }

  user$ = this.authService.getUserUpdateListener()

  onLogin(user : any) {
    if (user) return this.navigate(user)
    this.authService.login().subscribe((res) => {
      this.navigate(res)
    })
  }

  navigate(user : any) {
    if (user.admin) this.router.navigate(['/dashboard/admin/home'])
    else this.router.navigate(['/dashboard/user'])
  }
}
