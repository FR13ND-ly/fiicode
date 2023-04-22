import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input()
  items : any = []

  @Input()
  validated : boolean = true

  @Input()
  origin : string = ''

}
