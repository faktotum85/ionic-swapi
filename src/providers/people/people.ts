import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Person } from '../../models/person';

@Injectable()
export class PeopleProvider {
  baseUrl: string = 'http://swapi.co/api/people/';

  constructor(public http: Http) { }

  getAll(): Observable<Person[]> {
    return this.http.get(`${this.baseUrl}`)
      .map(res => res.json().results);
  }

}
