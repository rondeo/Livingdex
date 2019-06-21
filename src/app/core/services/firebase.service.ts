import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import { Generation } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  generations: AngularFirestoreCollection<Generation>;
  private genDoc: AngularFirestoreDocument<Generation>;

  dbCol = this.db.collection('generations');

  constructor(private db: AngularFirestore) {
    this.generations = db.collection<Generation>('generations');
  }

  getGenerationResolver(id) {
    return this.dbCol.doc(id).snapshotChanges();
  }

  addGeneration(gen: Generation) {
    return this.dbCol.doc(gen.name).set({
      name: gen.name,
      number: gen.number
    });
  }

}
