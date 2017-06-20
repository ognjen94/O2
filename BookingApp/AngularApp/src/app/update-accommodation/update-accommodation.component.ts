import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { AccommodationService } from '../services/accommodation.service';
import { PlaceService } from '../services/place.service'
import { AccommodationTypeService } from '../services/accommodation-type.service' 
import { AppUserService } from '../services/app-user.service' 

import { Accommodation } from '../model/accommodation.model';
import { Place } from '../model/place.model';
import { AppUser } from '../model/app-user.model';
import { AccommodationType } from '../model/accommodation-type.model';

@Component({
  selector: 'update-accommodation',
  templateUrl: './update-accommodation.component.html',
  providers: [AccommodationService, PlaceService, AccommodationTypeService, AppUserService]
})
export class UpdateAccommodationComponent implements OnInit {
  accs: Accommodation[];
  acc: Accommodation;
  id: number;
  places: Place[];
  appUsers: AppUser[];
  accommodationTypes: AccommodationType[];
  error: any;

  constructor(
    private accommodationService: AccommodationService,
    private PlaceService: PlaceService, 
    private AccommodationTypeService: AccommodationTypeService,
    private AppUserService: AppUserService,
    private route: ActivatedRoute,
    private location: Location
  ) {
      this.route.params.subscribe((params: Params) => this.id = params["Id"]);
  }

  ngOnInit(): void {
    this.accommodationService.getAcc()
    .then(acc => {this.accs = acc; debugger; this.acc = this.accs.find(ac => ac.Id == this.id)});
    this.AccommodationTypeService.getAccType().then(accTypes => this.accommodationTypes = accTypes).catch(error => this.error = error);
    this.PlaceService.getPlaces().then(place => this.places = place).catch(error => this.error = error);
    this.AppUserService.getUser().then(appUser => this.appUsers = appUser).catch(error => this.error = error);
      debugger

      /*this.route.params
      .switchMap((params: Params) => this.accommodationService.returnAcc(params['id']))
      .subscribe(hero => this.acc = hero);*/

  }

  updateAccommodation(): void {
      debugger
    this.accommodationService.updateAcc(this.acc)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
