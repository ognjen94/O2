import { Component, OnInit } from '@angular/core';
import { Country } from '../model/country.model';

import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
})

export class CountryComponent implements OnInit {
    countries : Country[];
    
  constructor(private countryService: CountryService) { 
  }

  getCountry(): void {
      this.countryService
      .getCountry()
      .then(c => {this.countries = c; debugger});
  }

  ngOnInit() {
    this.getCountry();
  }
}