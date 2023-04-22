import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/data-access/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {

  constructor(private userService: UserService) { }

  files$ : Observable<any> = this.userService.getFiles();

  onOpenFile(file : any) {
    console.log(file)
    window.open(file.fileUrl, "_blank")
  }
}
