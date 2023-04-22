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
import { RouterModule } from '@angular/router';
import { VacationsComponent } from './vacations/vacations.component';
import { AddVacationsDialogComponent } from './add-vacations-dialog/add-vacations-dialog.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/shared/ui/header/header.component';
import { MatIconModule  } from '@angular/material/icon';

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
    InviteUserDialogComponent,
    VacationsComponent,
    AddVacationsDialogComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    RouterModule.forChild([
      { path: '', component: ShellComponent, children: [
        { path: '', component: MainComponent },
        { path: 'users', component: UsersComponent },
        { path: 'files', component: FilesComponent },
        { path: 'chat', component: ChatComponent },
        { path: 'vacations', component: VacationsComponent },
      ] }
    ]),
    MatIconModule
  ]
})
export class AdminModule { }
