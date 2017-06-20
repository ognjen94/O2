import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Http, Response } from '@angular/http';
import { RoomReservation } from '../../model/room-reservation.model';

import { RoomReservationService } from '../../services/room-reservation.service';


@Component({
  selector: 'app-add-room-reservation',
  templateUrl: './add-room-reservation.component.html',
  providers: [RoomReservationService]
})
export class AddRoomReservationComponent implements OnInit {
  room: RoomReservation[];
  error : any;
  
  constructor(private RoomReservationService: RoomReservationService) {
  }

  ngOnInit() {
    this.RoomReservationService.getRoomReservation().then(r => this.room = r).catch(error => this.error = error);
  }

      addRoom(room: RoomReservation, form: NgForm): void {       
        this.RoomReservationService.addRoomReservation(room);
  }

}