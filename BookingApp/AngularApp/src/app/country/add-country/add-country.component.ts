import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Country } from '../../model/country.model';
import { CountryService } from '../../services/country.service' 


@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  providers: [CountryService]
})
export class AddCountryComponent implements OnInit {
  countries: Country[];
  error : any;
  
  constructor(private CountryService: CountryService) {
  }

  ngOnInit() {
  }

      addCountry(country: Country, form: NgForm): void {
        //console.log(acc.accommodationType.name);
        
        this.CountryService.addCountry(country);
  }

}