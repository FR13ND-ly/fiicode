import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/data-access/auth.service';
import { UserService } from 'src/app/shared/data-access/user.service';


@Component({
  selector: 'app-add-request-dialog',
  templateUrl: './add-request-dialog.component.html',
  styleUrls: ['./add-request-dialog.component.scss']
})
export class AddRequestDialogComponent {

  constructor(private authService: AuthService, private userService: UserService) { }

  user$ : Observable<any> = this.authService.getUserUpdateListener()

  request: any = {
    title: "",
    start: new Date(),
    end: new Date(),
    userId: 0
  }

  onSave(user : any) {
    this.request.start = this.request.start.toISOString().split( "T" )[0];
    this.request.end = this.request.end.toISOString().split( "T" )[0];
    this.request.userId = user.uid
    this.userService.addRequest(this.request).subscribe()
  }
}
