import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StarshipsProvider} from '../../providers/starships/starships';
import { Starship } from '../../models/starship';

@IonicPage()
@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html',
})
export class StarshipsPage {
  starships: Starship[];
  next_url: any;
  previous_url: any;
  base_url: "";

  getStarships(postfix: string) {
      this.starshipsProvider.getStarships(postfix)
        .subscribe(res => {
            this.starships = res.results;
            this.next_url = res.next ? res.next.replace('http://swapi.co/api/starships/','') : null;
            this.previous_url = res.previous ? res.previous.replace('http://swapi.co/api/starships/', '') : null;
        });
  }

  getNext() {
    this.getStarships(this.next_url);
  }

  getPrevious() {
    this.getStarships(this.previous_url);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private starshipsProvider: StarshipsProvider) {
      this.getStarships("");
  }

}
