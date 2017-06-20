import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Http, Response } from '@angular/http';
import { AccommodationType } from '../../model/accommodation-type.model';
import { AccommodationTypeService } from '../../services/accommodation-type.service' 


@Component({
  selector: 'app-add-accommodation-type',
  templateUrl: './add-accommodation-type.component.html',
  providers: [AccommodationTypeService]
})
export class AddAccommodationTypeComponent implements OnInit {
  accommodationTypes: AccommodationType[];
  error : any;
  
  constructor(private AccommodationTypeService: AccommodationTypeService) {
  }

  ngOnInit() {
  }

      addAccommodationType(accType: AccommodationType, form: NgForm): void {
        //console.log(acc.accommodationType.name);
        
        this.AccommodationTypeService.addAccType(accType);
  }

}