import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './shared/homepage/homepage.component';

import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
const app = firebase.initializeApp({
  apiKey: 'AIzaSyDZRHNMSQByJ8S9tELJcayJ_N3isiO_0B8',
  authDomain: 'emmys-pampered-pooch.firebaseapp.com',
  databaseURL: 'https://emmys-pampered-pooch.firebaseio.com',
  projectId: 'emmys-pampered-pooch',
  storageBucket: 'emmys-pampered-pooch.appspot.com',
  messagingSenderId: '821806970037'
});

const appRoutes: Routes = [
  { path: '', component: HomepageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'Livingdex'),
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
