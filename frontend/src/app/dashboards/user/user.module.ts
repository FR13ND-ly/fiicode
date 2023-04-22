import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { ChatComponent } from './chat/chat.component';
import { VacationsComponent } from './vacations/vacations.component';
import { FilesComponent } from './files/files.component';



@NgModule({
  declarations: [
    ShellComponent,
    ChatComponent,
    VacationsComponent,
    FilesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
