import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { MaterialModule } from '../core/material.module';
import { PublicRoutingModule } from './publc-routing.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PublicRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class PublicModule { }
