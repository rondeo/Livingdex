import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GamesComponent } from './games.component';
import { AddComponent } from './add/add.component';

import { GamesRoutingModule } from './games-routing.module';

@NgModule({
    imports: [
        GamesRoutingModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        GamesComponent,
        AddComponent
    ]
})

export class GamesModule { }
