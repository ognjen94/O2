import { Component, OnInit } from '@angular/core';

import {
  Router,
  ActivatedRoute
} from '@angular/router';


import { Accommodation } from '../model/accommodation.model';

import { AccommodationService } from '../services/accommodation.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
})

export class AccommodationComponent implements OnInit {
    accommodations : Accommodation[];
    selectedAcc : Accommodation;
    
  constructor(private accommodationService: AccommodationService,
    private router: Router) { 
  }

  getAccommodations(): void {
      this.accommodationService
      .getAcc()
      .then(acc => this.accommodations = acc);
      
  }

  deleteAccommodation(acc : Accommodation) : void {
    this.accommodationService
    .deleteAcc(acc)
    .then(() => {
      this.accommodations = this.accommodations.filter(a => a !== acc);
      if (this.selectedAcc === acc) {this.selectedAcc = null; }
    });
  }

  goToUpdateAccommodation(acc : Accommodation) : void {
    this.router.navigate(['/update-accommodation', this.selectedAcc.Id]);
  }

  onSelect(acc : Accommodation) : void {
    this.selectedAcc = acc; debugger
  }

  goToAddAccommodation(): void {
    this.router.navigate(['/add-accommodation']);
  }

  ngOnInit() {
    this.getAccommodations();
  }
}
