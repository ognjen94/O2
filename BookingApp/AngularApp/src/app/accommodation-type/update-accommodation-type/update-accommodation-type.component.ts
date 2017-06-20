import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { AccommodationTypeService } from '../../services/accommodation-type.service' 
import { AccommodationType } from '../../model/accommodation-type.model';

@Component({
  selector: 'update-accommodation-type',
  templateUrl: './update-accommodation-type.component.html',
  providers: [AccommodationTypeService]
})
export class UpdateAccommodationTypeComponent implements OnInit {
  accTypes: AccommodationType[];
  accType: AccommodationType;
  id: number;
  error: any;

  constructor(
    private AccommodationTypeService: AccommodationTypeService,
    private route: ActivatedRoute,
    private location: Location
  ) {
      this.route.params.subscribe((params: Params) => this.id = params["Id"]);
  }

  ngOnInit(): void {
    this.AccommodationTypeService.getAccType()
    .then(acc => {this.accTypes = acc;  this.accType = this.accTypes.find(ac => ac.Id == this.id)});
  }

  updateAccommodationType(): void {
      debugger
    this.AccommodationTypeService.updateAccType(this.accType)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
