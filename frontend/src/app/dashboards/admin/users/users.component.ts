import { Component } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { AdminService } from 'src/app/shared/data-access/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private adminService: AdminService) { }

  users$ : Observable<any> = this.adminService.getUsers()
  selectedIndex$ = new BehaviorSubject(0)

  user$ : Observable<any> = this.selectedIndex$.pipe(
    switchMap((index : number) => this.users$.pipe(
      map((users : any) => users[index])
    ))
  )
}
