import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';

import { Person } from '../../models/person';

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  people: Person[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private peopleProvider: PeopleProvider) {
    peopleProvider.getAll().subscribe(people => {
      this.people = people;
    })
    }

  ionViewDidLoad() {

  }

}
