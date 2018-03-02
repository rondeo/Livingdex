import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games.component';

const gamesRoutes: Routes = [
    {
        path: '',
        component: GamesComponent
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
