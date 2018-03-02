import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './shared/homepage/homepage.component';
import { AboutComponent } from './shared/about/about.component';
import { GamesComponent } from './shared/games/games.component';

import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDZRHNMSQByJ8S9tELJcayJ_N3isiO_0B8',
  authDomain: 'emmys-pampered-pooch.firebaseapp.com',
  databaseURL: 'https://emmys-pampered-pooch.firebaseio.com',
  projectId: 'emmys-pampered-pooch',
  storageBucket: 'emmys-pampered-pooch.appspot.com',
  messagingSenderId: '821806970037'
});

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'games', component: GamesComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'Livingdex'),
    RouterModule.forRoot(
      appRoutes,
    ),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
