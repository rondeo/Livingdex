import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games.component';
import { DetailComponent } from './detail/detail.component';

const gamesRoutes: Routes = [
    {
        path: '',
        component: GamesComponent
    },
    {
        path: ':id',
        component: DetailComponent
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
