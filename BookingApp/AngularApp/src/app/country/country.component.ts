import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Country } from '../model/country.model';

import { CountryService } from '../services/country.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
})

export class CountryComponent implements OnInit {
    countries : Country[];
    selectedCountry : Country;
    
  constructor(private countryService: CountryService,
      private router: Router) { 
  }

  getCountry(): void {
      this.countryService
      .getCountry()
      .then(c => this.countries = c);
  }

  deleteCountry(country : Country) : void {
    this.countryService
    .deleteCountry(country)
    .then(() => {
      this.countries = this.countries.filter(c => c !== country);
      if (this.selectedCountry === country) {this.selectedCountry = null; }
    });
  }

  goToAddCountry(): void {
    this.router.navigate(['/add-country']);
  }

  ngOnInit() {
    this.getCountry();
  }

     goToUpdateCountry(country : Country) : void {
    this.router.navigate(['/update-country', this.selectedCountry.Id]);
  }


    onSelect(country : Country) : void {
    this.selectedCountry = country;
  }
}