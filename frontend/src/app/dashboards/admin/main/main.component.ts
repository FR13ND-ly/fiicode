import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/shared/data-access/admin.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private adminService: AdminService) { }

  dashboard$ : Observable<any> = this.adminService.main()
}
