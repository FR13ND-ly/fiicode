import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, map, of, switchMap } from 'rxjs';
import { AdminService } from 'src/app/shared/data-access/admin.service';
import { UserSettingsDialogComponent } from '../user-settings-dialog/user-settings-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private adminService: AdminService, private dialog: MatDialog) { }

  users$ : Observable<any> = this.adminService.getUsers()
  selectedIndex$ = new BehaviorSubject(0)

  user$ : Observable<any> = this.selectedIndex$.pipe(
    switchMap((index : number) => this.users$.pipe(
      map((users : any) => users[index])
    ))
  )

  requests$ : Observable<any> = this.user$.pipe(
    switchMap((user : any) => of([
      {
        id: 1,
        title: 'Vacation',
        color: { primary: '#e3bc08', secondary: '#FDF1BA' },
        start: new Date(2020, 1, 1),
        end: new Date(2020, 1, 5),
      }
    ]))
  )

  calendar$ : Observable<any> = this.user$.pipe(
    switchMap((user : any) => this.adminService.getVacations(user.uid))
  )

  onDecline(request : any) {
    this.adminService.deleteRequest(request.id).subscribe()
  }

  onApprove(request : any) {
    this.adminService.approveRequest(request.id).subscribe()
  }


  onEditUser(user : any) {
    this.dialog.open(UserSettingsDialogComponent, {
      data: {
        user
      }
    })
  }
}
