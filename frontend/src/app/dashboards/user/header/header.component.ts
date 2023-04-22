import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from 'src/app/shared/data-access/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService, private router : Router) { }
  
  user$ = this.authService.getUserUpdateListener()

  onLogout() {
    this.authService.logout()
    this.router.navigate(['/'])
  }

}
