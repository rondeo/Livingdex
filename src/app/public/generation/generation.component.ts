import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { FirebaseService } from 'src/app/core/services/firebase.service';
import { Game } from 'src/app/core/models/game';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss']
})
export class GenerationComponent implements OnInit {

  games: Observable<Game[]>;

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      this.getGenData(this.route.snapshot.params.genId);
    });
  }

  getGenData(data) {
    this.games = this.firebaseService.getGenerationGames(data);
  }

  viewGame(item) {
    this.router.navigate(['generations', this.route.params.value.genId, item.name]);
  }

}
