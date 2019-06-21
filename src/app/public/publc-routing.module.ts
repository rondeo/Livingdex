import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GenerationComponent } from './generation/generation.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: 'generations', component: HomePageComponent },
  { path: 'generations/:genId', component: GenerationComponent },
  { path: 'generations/:genId/:gameId', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
