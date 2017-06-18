import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Film } from '../../models/film';
import { FilmsProvider } from '../../providers/films/films';

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Film[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private filmsProvider: FilmsProvider) {
    filmsProvider.getAll().subscribe(films => {
      this.films = films;
    })
  }

}
