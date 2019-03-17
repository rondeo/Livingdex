import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  generations: [
    { name: "Generation 1" },
    { name: "Generation 2" },
    { name: "Generation 3" }
  ]

  ngOnInit() {
  }

}
