import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Country } from '../../model/country.model';

import { CountryService } from '../../services/country.service';
import { RegionService } from '../../services/region.service' ;

import { Region } from '../../model/region.model';


@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  providers: [CountryService, RegionService]
})
export class AddRegionComponent implements OnInit {
  country: Country[];
  error : any;
  
  constructor(private RegionService: RegionService, 
  private CountryService: CountryService) {
  }

  ngOnInit() {
    this.CountryService.getCountry().then(c => this.country = c).catch(error => this.error = error);
  }

      addRegion(region: Region, form: NgForm): void {       
        this.RegionService.addRegion(region);
  }

}