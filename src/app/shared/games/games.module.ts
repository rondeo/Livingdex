import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GamesComponent } from './games.component';

import { GamesRoutingModule } from './games-routing.module';

@NgModule({
    imports: [
        GamesRoutingModule
    ],
    declarations: [
        GamesComponent
    ]
})

export class GamesModule { }
