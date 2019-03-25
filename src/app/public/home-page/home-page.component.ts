import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  generations: any = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 }
  ]

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
