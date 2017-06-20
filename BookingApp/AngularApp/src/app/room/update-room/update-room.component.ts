import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Room } from '../../model/room.model';
import { RoomService } from '../../services/room.service';
import { Accommodation } from '../../model/accommodation.model';
import { AccommodationService } from '../../services/accommodation.service';

@Component({
  selector: 'update-room',
  templateUrl: './update-room.component.html',
  providers: [RoomService, AccommodationService]
})
export class UpdateRoomComponent implements OnInit {
  room: Room;
  id: number;
  accommodations: Accommodation[];
  rooms: Room[];
  error: any;

  constructor(
    private RoomService: RoomService, 
    private AccommodationService: AccommodationService,
    private route: ActivatedRoute,
    private location: Location
  ) {
        this.route.params.subscribe((params: Params) => this.id = params["Id"]);
        this.AccommodationService.getAcc().then(a => this.accommodations = a).catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.RoomService.getRoom()
    .then(r => {this.rooms = r;  this.room = this.rooms.find(r => r.Id == this.id)});
    

  }

  updateRegion(): void {
    this.RoomService.updateRoom(this.room)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}