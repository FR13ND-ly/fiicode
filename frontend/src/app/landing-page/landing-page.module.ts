import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeroComponent,
    FeaturesComponent,
    FooterComponent,
    ShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ShellComponent }
    ])
  ]
})
export class LandingPageModule { }
