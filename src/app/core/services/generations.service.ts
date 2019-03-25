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
export class GenerationsService {

  generations: AngularFirestoreCollection<Generation>;
  private genDoc: AngularFirestoreDocument<Generation>;

  constructor(private db: AngularFirestore) {
    this.generations = db.collection<Generation>('generations');
  }

  public addGeneration(generation: Generation) {
    this.generations.add(generation);
  }

  public deleteTask(id) {
    this.genDoc = this.db.doc<Generation>(`generations/${id}`);
    this.genDoc.delete();
  }

  public updateTask(id, updatedGen) {
    this.genDoc = this.db.doc<Generation>(`generation/${id}`);
    this.genDoc.update(updatedGen);
  }

}
