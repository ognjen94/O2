import { Component, OnInit } from '@angular/core';
import { Place } from '../model/place.model';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
})

export class PlaceComponent implements OnInit {
    places : Place[];
    selectedPlace : Place;
    
  constructor(private placesService: PlaceService,
    private router: Router) { 
  }

  getPlace(): void {
      this.placesService
      .getPlaces()
      .then(plac =>this.places = plac);
  }

    deletePlace(p : Place) : void {
    this.placesService
    .deletePlace(p)
    .then(() => {
      this.places = this.places.filter(a => a !== p);
      if (this.selectedPlace === p) {this.selectedPlace = null; }
    });
    }

  goToAddPlace(): void {
    this.router.navigate(['/add-place']);
  }

  goToUpdatePlace(place : Place) : void {
    this.router.navigate(['/update-place', this.selectedPlace.Id]);
  }

   onSelect(p : Place) : void {
    this.selectedPlace = p;
  }

  ngOnInit() {
    this.getPlace();
  }
}