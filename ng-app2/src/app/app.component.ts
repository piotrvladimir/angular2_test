import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  heroes = [
	  new Hero(1, 'Windstorm'),
	  new Hero(13, 'Bombasto'),
	  new Hero(15, 'Magneta'),
	  new Hero(20, 'Tornado')
	];
	myHero = this.heroes[0];

// click event
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

// key event
  values = '';

  /* onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  } */

  // key event 1 (event param)
  onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}
