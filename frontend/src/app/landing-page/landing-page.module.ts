import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeroComponent,
    FeaturesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
