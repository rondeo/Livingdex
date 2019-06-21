import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GenerationComponent } from './generation/generation.component';

const routes: Routes = [
  { path: 'generations', component: HomePageComponent },
  { path: 'generations/:id', component: GenerationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
