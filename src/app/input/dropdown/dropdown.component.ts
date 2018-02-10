import {CountriesService} from '../../countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  countries: any=[];
  selectedCountry: any;
  selectedCountries: any[];

  constructor(private _countries: CountriesService) {}

    ngOnInit() {
      this._countries.getCountries().subscribe(res => {
        this.countries = res;
      });
    }

}
