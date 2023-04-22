import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/data-access/admin.service';

@Component({
  selector: 'app-user-settings-dialog',
  templateUrl: './user-settings-dialog.component.html',
  styleUrls: ['./user-settings-dialog.component.scss']
})
export class UserSettingsDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private adminService: AdminService) { 
    console.log(data)
  }

  onSave() {
    this.adminService.updateUser(this.data.user).subscribe()
  }

  onDelete() {
    this.adminService.deleteUser(this.data.user.uid).subscribe()
  }
}
