import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import { Generation } from '../models';
import { Game } from '../models/game';
import { Pokémon } from '../models/pokémon';

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

  getGamePokémon(gen, game) {
    return this.db.collection('generations').doc(gen).collection('games').doc(game).collection<Pokémon>('pokémon').valueChanges();
  }

  addGeneration(gen: Generation) {
    return this.dbCol.doc(gen.name).set({
      name: gen.name,
      number: gen.number
    });
  }

}
