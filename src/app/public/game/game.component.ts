import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { FirebaseService } from 'src/app/core/services/firebase.service';
import { Pokémon } from 'src/app/core/models/pokémon';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pokemons: Observable<Pokémon[]>;

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService, ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      const params = this.route.snapshot.params;
      this.getGameData(params.genId, params.gameId);
    });
  }

  getGameData(gen, game) {
    this.pokemons = this.firebaseService.getGamePokémon(gen, game);
  }

}
