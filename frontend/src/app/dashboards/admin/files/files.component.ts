import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { AdminService } from 'src/app/shared/data-access/admin.service';
import { AuthService } from 'src/app/shared/data-access/auth.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {

  constructor(private adminService: AdminService, private authService: AuthService) { }

  user$ = this.authService.getUserUpdateListener()

  files$ : Observable<any> = this.adminService.getFiles()
  title : string = ''

  onAddFile(input : any, user : any) {
    this.adminService.addFile(input.files[0]).pipe(
      switchMap(fileId => this.adminService.addDocument({
        title: this.title,
        fileId,
        userId: user.uid
      })
    )).subscribe((res) => console.log(res))
  }

  onDeleteConsultation(id : string) {
    this.adminService.deleteDocument(id).subscribe((res) => console.log(res))
  }

  onOpenFile(file : any) {
    console.log(file)
    window.open(file.fileUrl, "_blank")
  }
}
