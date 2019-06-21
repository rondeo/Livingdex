import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';

import { HomePageComponent } from './home-page/home-page.component';
import { AppMaterialModule } from '../core/material.module';
import { PublicRoutingModule } from './publc-routing.module';
import { GenerationComponent } from './generation/generation.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    HomePageComponent,
    GenerationComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatCardModule,
    PublicRoutingModule
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: []
})
export class PublicModule { }
