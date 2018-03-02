import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../../objects/game';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent {
    name: string;
    generation: number;
    picture?: any;

    constructor(private router: Router) { }

    addGame(
        name: string,
        generation: number,
        picture: any
    ) {
        firebase.database().ref('/games').push({
            name: this.name,
            generation: this.generation
        });
    }

}
