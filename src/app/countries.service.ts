import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import Country from './country';

@Injectable()
export class CountriesService {

  constructor(private http: Http) { }


  getCountries(): Observable<Country> {
    return this.http
      .get('../assets/data/countries.json')
      .map(response => response.json().data  );
  }

}
