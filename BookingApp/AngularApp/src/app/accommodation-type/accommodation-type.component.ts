import { Component, OnInit } from '@angular/core';
import { AccommodationType } from '../model/accommodation-type.model';

import { AccommodationTypeService } from '../services/accommodation-type.service';

import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-accommodation-type',
  templateUrl: './accommodation-type.component.html',
})

export class AccommodationTypeComponent implements OnInit {
    accommodationTypes : AccommodationType[];
    selectedAccType : AccommodationType;
    
  constructor(private accommodationTypeService: AccommodationTypeService,
      private router: Router) { 
  }

  getAccommodationTypes(): void {
      this.accommodationTypeService
      .getAccType()
      .then(acc => this.accommodationTypes = acc);
  }

    deleteAccommodationType(accType : AccommodationType) : void {
    this.accommodationTypeService
    .deleteAccType(accType)
    .then(() => {
      this.accommodationTypes = this.accommodationTypes.filter(a => a !== accType);
      if (this.selectedAccType === accType) {this.selectedAccType = null; }
    });
  }

  ngOnInit() {
    this.getAccommodationTypes();
  }

    goToAddAccommodationType(): void {
    this.router.navigate(['/add-accommodation-type']);
  }

   goToUpdateAccommodation(accType : AccommodationType) : void {
    this.router.navigate(['/update-accommodation-type', this.selectedAccType.Id]);
  }

  onSelect(accType : AccommodationType) : void {
    this.selectedAccType = accType; debugger
  }
}
