import { Http } from "@angular/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { CountriesService } from "../../countries.service";

@Component({
  selector: "app-auto-complete",
  templateUrl: "./auto-complete.component.html",
  styleUrls: ["./auto-complete.component.css"]
})
export class AutoCompleteComponent implements OnInit {
  countries: any = [];
  listCountries: any = [];
  filteredCountries: any = [];
  filteredCountryInstances: any = [];
  constructor(private _countries: CountriesService) {}

  ngOnInit() {
    this._countries.getCountries().subscribe(res => {
      this.countries = res;
    });
  }

  filterCountries(event: any) {
    let query = event.query;
    this._countries.getCountries().subscribe((countries: any) => {
      this.filteredCountries = this.filterCountry(query, countries);
    });
  }


  filterCountryInstances(event: any) {
    let query = event.query;
    this._countries.getCountries().subscribe((countries: Country[]) => {
        this.filteredCountryInstances = this.filterCountry(query, countries);
    });
}

  filterCountry(query, countries: any[]): any[] {
    let filtered: any[] = [];
    for (let i = 0; i < countries.length; i++) {
      let country = countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    return filtered;
  }
}
