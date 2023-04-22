import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { ChatComponent } from './chat/chat.component';
import { VacationsComponent } from './vacations/vacations.component';
import { FilesComponent } from './files/files.component';
import { RouterModule } from '@angular/router';
import { AddVacationDialogComponent } from './add-vacation-dialog/add-vacation-dialog.component';


@NgModule({
  declarations: [
    ShellComponent,
    ChatComponent,
    VacationsComponent,
    FilesComponent,
    AddVacationDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ShellComponent }
    ])
  ]
})
export class UserModule { }
