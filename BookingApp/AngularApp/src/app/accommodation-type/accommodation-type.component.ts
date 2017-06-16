import { Component, OnInit } from '@angular/core';
import { AccommodationType } from '../model/accommodation-type.model';

import { AccommodationTypeService } from '../services/accommodation-type.service';

@Component({
  selector: 'app-accommodation-type',
  templateUrl: './accommodation-type.component.html',
})

export class AccommodationTypeComponent implements OnInit {
    accommodationTypes : AccommodationType[];
    
  constructor(private accommodationTypeService: AccommodationTypeService) { 
  }

  getAccommodationTypes(): void {
      this.accommodationTypeService
      .getAccType()
      .then(acc => {this.accommodationTypes = acc; debugger});
  }

  ngOnInit() {
    this.getAccommodationTypes();
  }
}
