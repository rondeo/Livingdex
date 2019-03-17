import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  generations: any = [
    { name: "Generation 1" },
    { name: "Generation 2" },
    { name: "Generation 3" },
    { name: "Generation 4" },
    { name: "Generation 5" },
    { name: "Generation 6" },
    { name: "Generation 7" }
  ]

  ngOnInit() {
  }

}
