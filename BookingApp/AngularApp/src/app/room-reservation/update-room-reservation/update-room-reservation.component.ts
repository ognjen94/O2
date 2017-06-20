import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { RoomReservationService } from '../../services/room-reservation.service'

import { RoomReservation } from '../../model/room-reservation.model';

@Component({
  selector: 'update-room-reservation',
  templateUrl: './update-room-reservation.component.html',
  providers: [RoomReservationService]
})
export class UpdateRoomReservationComponent implements OnInit {
  room: RoomReservation;
  id: number;
  rooms: RoomReservation[];
  error: any;

  constructor(
    private RoomReservationService: RoomReservationService, 
    private route: ActivatedRoute,
    private location: Location
  ) {
      this.route.params.subscribe((params: Params) => this.id = params["Id"]);
      this.RoomReservationService.getRoomReservation().then(r => this.rooms = r).catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.RoomReservationService.getRoomReservation()
    .then(r => {this.rooms = r;  this.room = this.rooms.find(r => r.Id == this.id)});

  }

  updateRoom(): void {
    this.RoomReservationService.updateRoom(this.room)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}