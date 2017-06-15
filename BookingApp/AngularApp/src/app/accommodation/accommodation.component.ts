import { Component, OnInit } from '@angular/core';
import { Accommodation } from '../model/accommodation.model';

import { AccommodationService } from '../services/accommodation.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
})




export class AccommodationComponent implements OnInit {
    accommodations : Accommodation[];
    
  constructor(private accommodationService: AccommodationService) { 
  }

  getAccommodations(): void {
      this.accommodationService
      .getAcc()
      .then(acc => {this.accommodations = acc; debugger});
  }

  ngOnInit() {
    this.getAccommodations();
  }
}
