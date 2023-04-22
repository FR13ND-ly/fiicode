import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  menu = [
    {
      name: 'Prezentare Generala',
      icon: 'dashboard',
      link: '/main'
    },
    {
      name: 'Angajati',
      icon: 'people',
      link: '/angajati'
    },
    {
      name: 'Documente Interne',
      icon: 'folder',
      link: '/documente'
    },
    {
      name: 'Asistent Virtual',
      icon: 'chat',
      link: '/asistent'
    },
    {
      name: 'Setari',
      icon: 'settings',
      link: '/setari'
    },
  ]
}
