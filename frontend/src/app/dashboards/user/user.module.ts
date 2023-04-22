import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { ChatComponent } from './chat/chat.component';
import { VacationsComponent } from './vacations/vacations.component';
import { FilesComponent } from './files/files.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddRequestDialogComponent } from './add-request-dialog/add-request-dialog.component';
import { MaterialModule } from 'src/app/shared/feature/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ShellComponent,
        ChatComponent,
        VacationsComponent,
        FilesComponent,
        HeaderComponent,
        AddRequestDialogComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: ShellComponent }
        ]),
        MaterialModule,
        FormsModule
    ]
})
export class UserModule { }
