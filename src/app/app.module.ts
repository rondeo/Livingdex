import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './shared/homepage/homepage.component';
import { AboutComponent } from './shared/about/about.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAvcXzmUkgD1bvrjop92JMTVOmZEKZ4lHU',
  authDomain: 'livingdex-a98f9.firebaseapp.com',
  databaseURL: 'https://livingdex-a98f9.firebaseio.com',
  projectId: 'livingdex-a98f9',
  storageBucket: 'livingdex-a98f9.appspot.com',
  messagingSenderId: '90498188558'
});

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'Livingdex'),
    AppRoutingModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
