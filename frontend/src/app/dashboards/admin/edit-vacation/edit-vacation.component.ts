import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/data-access/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-vacation',
  templateUrl: './edit-vacation.component.html',
  styleUrls: ['./edit-vacation.component.scss']
})
export class EditVacationComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private adminService: AdminService) { }

  users$ : Observable<any> = this.adminService.getUsers()

  onSave() {
    this.data.vacation.start = new Date(this.data.vacation.start).toISOString().split( "T" )[0];
    this.data.vacation.end = new Date(this.data.vacation.end).toISOString().split( "T" )[0];
    this.adminService.updateVacation(this.data.vacation).subscribe()
  }
}
