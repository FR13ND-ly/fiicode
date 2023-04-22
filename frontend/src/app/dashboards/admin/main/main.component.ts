import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  dashboard$ = of({
    name: "ADMIN",
    employeesCount: 99,
    documentsCount: 150,
    vacationsCount: 2,
    vacationsToday: 1
  })
}
