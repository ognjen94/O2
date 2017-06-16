import { Component, OnInit } from '@angular/core';
import { RoomReservation } from '../model/room-reservation.model';

import { RoomReservationService } from '../services/room-reservation.service';

@Component({
  selector: 'app-room-reservation',
  templateUrl: './room-reservation.component.html',
})

export class RoomReservationComponent implements OnInit {
    roomres : RoomReservation[];
    
  constructor(private roomresService: RoomReservationService) { 
  }

  getRoomReservation(): void {
      this.roomresService
      .getRoomReservation()
      .then(rr => {this.roomres = rr; debugger});
  }

  ngOnInit() {
    this.getRoomReservation();
  }
}