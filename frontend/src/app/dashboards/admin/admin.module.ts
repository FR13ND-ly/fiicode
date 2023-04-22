import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { FilesComponent } from './files/files.component';
import { ChatComponent } from './chat/chat.component';
import { UserVacationsDialogComponent } from './user-vacations-dialog/user-vacations-dialog.component';
import { UserSettingsDialogComponent } from './user-settings-dialog/user-settings-dialog.component';
import { UploadFileDialogComponent } from './upload-file-dialog/upload-file-dialog.component';
import { InviteUserDialogComponent } from './invite-user-dialog/invite-user-dialog.component';



@NgModule({
  declarations: [
    ShellComponent,
    MainComponent,
    UsersComponent,
    FilesComponent,
    ChatComponent,
    UserVacationsDialogComponent,
    UserSettingsDialogComponent,
    UploadFileDialogComponent,
    InviteUserDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
