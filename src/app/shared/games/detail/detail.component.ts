import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Pokemon } from '../../../objects/pokemon';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pokemon: any;

  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private route: ActivatedRoute) {
    this.pokemon = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit() {
    this.pokemon = this.route.snapshot.paramMap.get('name');
  }

}
