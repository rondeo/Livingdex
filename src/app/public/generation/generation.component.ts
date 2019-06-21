import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { Observable } from 'rxjs';
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
    ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      this.getGenData(this.route.snapshot.params.id);
    });
  }

  getGenData(data) {
    this.games = this.firebaseService.getGenerationGames(data);
  }

}
