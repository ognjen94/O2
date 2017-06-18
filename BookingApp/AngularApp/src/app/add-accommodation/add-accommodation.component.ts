import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Accommodation } from '../model/accommodation.model';

import { AccommodationService } from '../services/accommodation.service';
import { PlaceService } from '../services/place.service'
import { AccommodationTypeService } from '../services/accommodation-type.service' 
import { AppUserService } from '../services/app-user.service' 

import { Place } from '../model/place.model';
import { AppUser } from '../model/app-user.model';
import { AccommodationType } from '../model/accommodation-type.model';


@Component({
  selector: 'app-add-accommodation',
  templateUrl: './add-accommodation.component.html',
  providers: [AccommodationService, PlaceService, AccommodationTypeService, AppUserService]
})
export class AddAccommodationComponent implements OnInit {
  places: Place[];
  appUsers: AppUser[];
  accommodationTypes: AccommodationType[];
  error : any;
  
  constructor(private AccommodationService: AccommodationService, 
  private PlaceService: PlaceService, 
  private AccommodationTypeService: AccommodationTypeService,
  private AppUserService: AppUserService) {
  }

  ngOnInit() {
    this.AccommodationTypeService.getAccType().then(accTypes => this.accommodationTypes = accTypes).catch(error => this.error = error);
    this.PlaceService.getPlaces().then(place => this.places = place).catch(error => this.error = error);
    this.AppUserService.getUser().then(appUser => this.appUsers = appUser).catch(error => this.error = error);  
  }

      addAccommodation(acc: Accommodation, form: NgForm): void {
        this.AccommodationService.addAcc(acc);
  }

}