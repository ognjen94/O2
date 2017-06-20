import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { PlaceService } from '../../services/place.service'
import { RegionService } from '../../services/region.service'

import { Place } from '../../model/place.model';
import { Region } from '../../model/region.model';

@Component({
  selector: 'update-place',
  templateUrl: './update-place.component.html',
  providers: [PlaceService, RegionService]
})
export class UpdatePlaceComponent implements OnInit {
  place: Place;
  id: number;
  places: Place[];
  regions: Region[];
  error: any;

  constructor(
    private PlaceService: PlaceService, 
    private RegionService: RegionService,
    private route: ActivatedRoute,
    private location: Location
  ) {
      this.route.params.subscribe((params: Params) => this.id = params["Id"]);
      this.RegionService.getRegion().then(reg => this.regions = reg).catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.PlaceService.getPlaces()
    .then(p => {this.places = p;  this.place = this.places.find(p => p.Id == this.id)});
    

  }

  updatePlace(): void {
      debugger
    this.PlaceService.updatePlace(this.place)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
