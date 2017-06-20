import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { CountryService } from '../../services/country.service' 
import { Country } from '../../model/country.model';

@Component({
  selector: 'update-country',
  templateUrl: './update-country.component.html',
  providers: [CountryService]
})
export class UpdateCountryComponent implements OnInit {
  countries: Country[];
  country: Country;
  id: number;
  error: any;

  constructor(
    private CountryService: CountryService,
    private route: ActivatedRoute,
    private location: Location
  ) {
      this.route.params.subscribe((params: Params) => this.id = params["Id"]);
  }

  ngOnInit(): void {
    this.CountryService.getCountry()
    .then(c => {this.countries =c;  this.country = this.countries.find(ac => ac.Id == this.id)});
  }

  updateCountry(): void {
      debugger
    this.CountryService.updateCounty(this.country)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
