import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/shared/data-access/admin.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {

  constructor(private adminService: AdminService) { }

  files$ : Observable<any> = this.adminService.getFiles()

  onUploadFile() {
    
  }
}
