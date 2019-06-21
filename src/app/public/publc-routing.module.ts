import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GenerationComponent } from './generation/generation.component';
import { GenerationResolver } from '../core/resolvers/generation.resolver';

const routes: Routes = [
  { path: 'generations', component: HomePageComponent },
  { path: 'generations/:id', component: GenerationComponent, resolve: {data : GenerationResolver} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
