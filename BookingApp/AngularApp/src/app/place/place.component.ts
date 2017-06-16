import { Component, OnInit } from '@angular/core';
import { Place } from '../model/place.model';

import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
})

export class PlaceComponent implements OnInit {
    places : Place[];
    
  constructor(private placesService: PlaceService) { 
  }

  getPlace(): void {
      this.placesService
      .getPlace()
      .then(plac => {this.places = plac; debugger});
  }

  ngOnInit() {
    this.getPlace();
  }
}