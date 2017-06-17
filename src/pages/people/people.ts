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
  next_url: any = null;
  previous_url: any = null;

  getPeople(postfix: string) {
    this.peopleProvider.getPeople(postfix).subscribe(people => {
      this.people = people.results;
      this.next_url = people.next ?
        people.next.replace('http://swapi.co/api/people/','') : null;
      this.previous_url = people.previous ?
          people.previous.replace('http://swapi.co/api/people/','') : null;
    })
  }

  getNext() {
    this.getPeople(this.next_url);
  }

  getPrevious() {
    this.getPeople(this.previous_url);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private peopleProvider: PeopleProvider) {
    this.getPeople("");
  }
}
