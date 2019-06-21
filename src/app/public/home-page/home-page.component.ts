import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Generation } from 'src/app/core/models/';
import { FirebaseService } from 'src/app/core/services/firebase.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  generations: Observable<Generation[]>;

  tempGen: Generation = {
    name: 'generation7',
    number: 7
  };

  constructor(
    private db: AngularFirestore,
    private router: Router,
    private firebaseService: FirebaseService
    ) {
    this.generations = this.db.collection<Generation>('generations').valueChanges();
  }

  viewDetails(item) {
    this.router.navigate(['generations/' + item.name]);
  }

  addGeneration() {
    this.firebaseService.addGeneration(this.tempGen);
  }

  ngOnInit() {
  }

}
