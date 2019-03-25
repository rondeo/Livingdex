import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Generation } from 'src/app/core/models/';
import { GenerationsService } from 'src/app/core/services/generations.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  generations: Observable<Generation[]>;

  constructor(
    private db: AngularFirestore,
    private genService: GenerationsService
    ) {
    this.generations = this.db.collection<Generation>('generations').valueChanges();
  }

  public addItem() {
    this.genService.addGeneration({ name: 'Generation 8', number: 8});
  }

  // generations: any = [
  //   { number: 1, image_url: 'https://cdn.bulbagarden.net/upload/8/86/Kanto_Town_Map_RBY.png' },
  //   { number: 2, image_url: 'http://i.imgur.com/qWGFhK9.png' },
  //   { number: 3, image_url: 'https://cdn.bulbagarden.net/upload/thumb/1/1f/Hoenn_RSE_Map.png/250px-Hoenn_RSE_Map.png' },
  //   { number: 4, image_url: 'https://cdn.bulbagarden.net/upload/thumb/6/6a/Sinnoh_Region.png/300px-Sinnoh_Region.png' },
  //   { number: 5, image_url: 'https://cdn.bulbagarden.net/upload/thumb/b/b4/Unova.png/250px-Unova.png' },
  //   { number: 6, image_url: 'https://www.serebii.net/pokearth/kalos.png' },
  //   { number: 7, image_url: 'https://www.serebii.net/pokearth/alola.png' },
  //   { number: 8, image_url: 'https://swordshield.pokemon.com/assets/img/common/map.jpg' }
  // ]

  ngOnInit() {
  }

}
