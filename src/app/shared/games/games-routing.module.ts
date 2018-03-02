import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games.component';
import {AddComponent } from './add/add.component';

const gamesRoutes: Routes = [
    {
        path: '',
        component: GamesComponent
    },
    {
        path: 'add',
        component: AddComponent
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(gamesRoutes)
    ],
    exports: [
      RouterModule
    ],
    providers: []
  })
  export class GamesRoutingModule { }
