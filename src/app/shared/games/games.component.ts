import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../objects/game';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { GamesRoutingModule } from './games-routing.module';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
    games: Observable<any[]>;

    constructor(
        private router: Router,
        private db: AngularFireDatabase
    ) {
    }

    ngOnInit(): void {
        this.games = this.db.list('/games').valueChanges();
    }

}
