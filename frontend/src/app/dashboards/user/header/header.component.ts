import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user$ = of({
    name: "Mihai",
    type: "User",
    imageUrl: "aaa"
  })
}
