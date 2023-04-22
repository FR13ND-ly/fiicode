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
  
  user$ = of({
    name: "Mihai",
    type: "User",
    imageUrl: "aaa"
  })

  onLogout() {
    this.authService.logout()
    this.router.navigate(['/'])
  }

}
