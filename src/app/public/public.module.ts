import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { AppMaterialModule } from '../core/material.module';
import { PublicRoutingModule } from './publc-routing.module';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatCardModule,
    PublicRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class PublicModule { }
