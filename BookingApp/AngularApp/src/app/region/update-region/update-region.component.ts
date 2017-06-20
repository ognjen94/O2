import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { CountryService } from '../../services/country.service'
import { RegionService } from '../../services/region.service'

import { Country } from '../../model/country.model';
import { Region } from '../../model/region.model';

@Component({
  selector: 'update-region',
  templateUrl: './update-region.component.html',
  providers: [CountryService, RegionService]
})
export class UpdateRegionComponent implements OnInit {
  region: Region;
  id: number;
  countries: Country[];
  regions: Region[];
  error: any;

  constructor(
    private CountryService: CountryService, 
    private RegionService: RegionService,
    private route: ActivatedRoute,
    private location: Location
  ) {
      this.route.params.subscribe((params: Params) => this.id = params["Id"]);
      this.CountryService.getCountry().then(c => this.countries = c).catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.RegionService.getRegion()
    .then(r => {this.regions = r;  this.region = this.regions.find(r => r.Id == this.id)});
    

  }

  updateRegion(): void {
    this.RegionService.updateRegion(this.region)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}