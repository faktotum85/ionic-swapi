import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Film } from '../../models/film';

@Injectable()
export class FilmsProvider {
  baseUrl: string = 'http://swapi.co/api/films/';

  constructor(public http: Http) { }

  getAll(): Observable<Film[]> {
    return this.http.get(`${this.baseUrl}`)
      .map(res => <Film[]>res.json().results)
  }

}
