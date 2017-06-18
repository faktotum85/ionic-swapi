import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { StarshipRes } from '../../models/starshipres';

@Injectable()
export class StarshipsProvider {
  baseUrl = "http://swapi.co/api/starships/";

  constructor(public http: Http) { }

  getStarships(postfix: string = ""): Observable<StarshipRes> {
    return this.http.get(`${this.baseUrl}${postfix}`)
      .map(res => <StarshipRes>res.json());
  }

}
