import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/data-access/admin.service';
import { Observable } from 'rxjs';
import { AddVacationsDialogComponent } from '../add-vacations-dialog/add-vacations-dialog.component';
import { EditVacationComponent } from '../edit-vacation/edit-vacation.component';

@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.scss']
})
export class VacationsComponent {
  
  constructor(private adminService: AdminService, private dialog: MatDialog) { }

  vacations$ : Observable<any> = this.adminService.getAllVacations()

  onAddVacation() {
    this.dialog.open(AddVacationsDialogComponent, {
      data: { vacation: {} }
    })
  }

  onEditVacation(res : any) {
    let vacation = {...res}
    vacation.userId = vacation.user.uid
    this.dialog.open(EditVacationComponent, {
      data: { vacation }
    })
  }

  onDeleteVacation(vacation : any) {
    this.adminService.deleteVacation(vacation.id).subscribe()
  }
}
