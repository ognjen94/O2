import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Place } from '../../model/place.model';

import { PlaceService } from '../../services/place.service';
import { RegionService } from '../../services/region.service' ;

import { Region } from '../../model/region.model';


@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  providers: [PlaceService, RegionService]
})
export class AddPlaceComponent implements OnInit {
  region: Region[];
  error : any;
  
  constructor(private RegionService: RegionService, 
  private PlaceService: PlaceService) {
  }

  ngOnInit() {
    this.RegionService.getRegion().then(reg => this.region = reg).catch(error => this.error = error);
  }

      addPlace(place: Place, form: NgForm): void {
        //console.log(acc.accommodationType.name);
        
        this.PlaceService.addPlace(place);
  }

}