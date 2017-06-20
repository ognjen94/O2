import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Http, Response } from '@angular/http';

import { Room } from '../../model/room.model';
import { RoomService } from '../../services/room.service';
import { Accommodation } from '../../model/accommodation.model';
import { AccommodationService } from '../../services/accommodation.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  providers: [RoomService]
})
export class AddRoomComponent implements OnInit {
    accommodations: Accommodation[];
    error : any;
  
  constructor(private RoomService: RoomService, 
  private AccommodationService: AccommodationService) {
  }

  ngOnInit() {
    this.AccommodationService.getAcc().then(a => this.accommodations = a).catch(error => this.error = error);

    }

      addRegion(region: Room, form: NgForm): void {       
        this.RoomService.addRoom(region);
  }

}