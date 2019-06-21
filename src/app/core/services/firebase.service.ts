import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import { Generation } from '../models';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  generations: AngularFirestoreCollection<Generation>;

  dbCol = this.db.collection('generations');

  constructor(private db: AngularFirestore) {
    this.generations = db.collection<Generation>('generations');
  }

  getGenerationGames(id) {
    return this.db.collection('generations').doc(id).collection<Game>('games').valueChanges();
  }

  addGeneration(gen: Generation) {
    return this.dbCol.doc(gen.name).set({
      name: gen.name,
      number: gen.number
    });
  }

}
