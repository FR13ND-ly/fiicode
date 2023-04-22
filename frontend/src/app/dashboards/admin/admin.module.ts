import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { FilesComponent } from './files/files.component';
import { ChatComponent } from './chat/chat.component';
import { UserSettingsDialogComponent } from './user-settings-dialog/user-settings-dialog.component';
import { InviteUserDialogComponent } from './invite-user-dialog/invite-user-dialog.component';
import { RouterModule } from '@angular/router';
import { VacationsComponent } from './vacations/vacations.component';
import { AddVacationsDialogComponent } from './add-vacations-dialog/add-vacations-dialog.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/shared/ui/header/header.component';
import { MaterialModule } from 'src/app/shared/feature/material.module';
import { FormsModule } from '@angular/forms';
import { EditVacationComponent } from './edit-vacation/edit-vacation.component';

@NgModule({
  declarations: [
    ShellComponent,
    MainComponent,
    UsersComponent,
    FilesComponent,
    ChatComponent,
    UserSettingsDialogComponent,
    InviteUserDialogComponent,
    VacationsComponent,
    AddVacationsDialogComponent,
    SidebarComponent,
    EditVacationComponent,
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ShellComponent, children: [
        { path: 'home', component: MainComponent },
        { path: 'users', component: UsersComponent },
        { path: 'files', component: FilesComponent },
        { path: 'chat', component: ChatComponent },
        { path: 'calendar', component: VacationsComponent },
      ]}
    ]),
    MaterialModule
  ]
})
export class AdminModule { }
