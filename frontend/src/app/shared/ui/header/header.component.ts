import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class HeaderComponent {
  user$ = of({
    name: "Alin",
    type: "Admin",
    imageUrl: "aaa"
  })
}
