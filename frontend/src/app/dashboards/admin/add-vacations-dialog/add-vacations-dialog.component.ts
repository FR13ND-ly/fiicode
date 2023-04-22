import { Component } from '@angular/core';
import { AdminService } from 'src/app/shared/data-access/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-vacations-dialog',
  templateUrl: './add-vacations-dialog.component.html',
  styleUrls: ['./add-vacations-dialog.component.scss']
})
export class AddVacationsDialogComponent {

  constructor(private adminService: AdminService) { }

  users$ : Observable<any> = this.adminService.getUsers()

  vacation: any = {
    title: "",
    start: new Date(),
    end: new Date(),
    userId: 0
  }

  onSave() {
    this.vacation.start = this.vacation.start.toISOString().split( "T" )[0];
    this.vacation.end = this.vacation.end.toISOString().split( "T" )[0];
    this.adminService.addVacation(this.vacation).subscribe()
  }
}
