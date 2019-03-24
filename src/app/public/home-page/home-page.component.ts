import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  generations: any = [
    { name: "Generation 1", number: 1 },
    { name: "Generation 2", number: 2 },
    { name: "Generation 3", number: 3 },
    { name: "Generation 4", number: 4 },
    { name: "Generation 5", number: 5 },
    { name: "Generation 6", number: 6 },
    { name: "Generation 7", number: 7 }
  ]

  getColor(genNumber: number) {
    switch (genNumber) {
      case 1:
        return 'red';
      case 2:
        return 'gold';
      case 3:
        return 'blue';
      case 4:
        return 'pink';
      case 5:
        return 'white';
      case 6:
        return 'blue';
      case 7:
        return 'yellow';
    }
  }

  ngOnInit() {
  }

}
