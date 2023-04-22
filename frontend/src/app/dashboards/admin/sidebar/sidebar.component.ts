import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/data-access/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  constructor(private authService: AuthService) { }

  menu = [
    {
      name: 'Prezentare Generala',
      icon: 'dashboard',
      link: '/home'
    },
    {
      name: 'Angajati',
      icon: 'people',
      link: '/users'
    },
    {
      name: 'Calendar',
      icon: 'event',
      link: '/calendar'
    },
    {
      name: 'Documente Interne',
      icon: 'folder',
      link: '/files'
    },
    {
      name: 'Asistent Virtual',
      icon: 'chat',
      link: '/chat'
    },
  ]

  origin : string = '/dashboard/admin'

  onLogout() {
    this.authService.logout()
  }
}
