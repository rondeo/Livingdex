import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Generation } from 'src/app/core/models/';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  generations: Observable<Generation[]>;

  constructor(
    private db: AngularFirestore,
    private router: Router
    ) {
    this.generations = this.db.collection<Generation>('generations').valueChanges();
  }

  viewDetails(item) {
    this.router.navigate(['generations/', item.name]);
  }

  ngOnInit() {
  }

}
