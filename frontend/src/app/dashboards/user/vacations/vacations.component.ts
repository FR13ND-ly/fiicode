import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/data-access/auth.service';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/shared/data-access/user.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddRequestDialogComponent } from '../add-request-dialog/add-request-dialog.component';

@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.scss']
})
export class VacationsComponent {

  constructor(private authService: AuthService, private userService: UserService, private dialog: MatDialog) { }

  vacations$ : Observable<any> = this.authService.getUserUpdateListener().pipe(
    switchMap(user => this.userService.getVacations(user.uid)
  ))

  onAddRequest() {
    this.dialog.open(AddRequestDialogComponent)
  }
}
