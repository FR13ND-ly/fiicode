import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', children : 
        [
          { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
          { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
        ]
      }
    ])
  ]
})
export class DashboardsModule { }
