import { Component, OnInit } from '@angular/core';
import { Accommodation } from '../model/accommodation.model';

import { AccommodationService } from '../services/accommodation.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
})




export class AccommodationComponent implements OnInit {
    accommodations : Accommodation[];
        hidden: boolean = true;
    
  constructor(private accommodationService: AccommodationService) { 
  }

    back()
  {

  }

  getAccommodations(): void {
      this.accommodationService
      .getAcc()
      .then(acc => {this.accommodations = acc; debugger})
      .catch(reason => alert(reason));
  }

  ngOnInit() {
    this.getAccommodations();
  }
}
