import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { ChatComponent } from './chat/chat.component';
import { VacationsComponent } from './vacations/vacations.component';
import { FilesComponent } from './files/files.component';
import { RouterModule } from '@angular/router';
import { AddVacationDialogComponent } from './add-vacation-dialog/add-vacation-dialog.component';
import { MatIconModule  } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        ShellComponent,
        ChatComponent,
        VacationsComponent,
        FilesComponent,
        AddVacationDialogComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: ShellComponent }
        ]),
        MatIconModule
    ]
})
export class UserModule { }
