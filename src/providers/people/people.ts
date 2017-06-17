import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { PeopleRes } from '../../models/peopleres';

@Injectable()
export class PeopleProvider {
  baseUrl: string = 'http://swapi.co/api/people/';
  next: any = null;

  constructor(public http: Http) { }

  getPeople(postfix: string = ""): Observable<PeopleRes> {
    return this.http.get(`${this.baseUrl}${postfix}`)
      .map(res => this.next = res.json())
  }
}
