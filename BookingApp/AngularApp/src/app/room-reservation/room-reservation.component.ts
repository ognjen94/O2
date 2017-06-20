import { Component, OnInit } from '@angular/core';
import { RoomReservation } from '../model/room-reservation.model';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { RoomReservationService } from '../services/room-reservation.service';

@Component({
  selector: 'app-room-reservation',
  templateUrl: './room-reservation.component.html',
})

export class RoomReservationComponent implements OnInit {
    roomres : RoomReservation[];
    selectedRoom: RoomReservation;
    
  constructor(private roomresService: RoomReservationService,
    private router: Router) { 
  }

  getRoomReservation(): void {
      this.roomresService
      .getRoomReservation()
      .then(rr => {this.roomres = rr; debugger});
  }

   deleteRoomRes(r : RoomReservation) : void {
    this.roomresService
    .deleteRoom(r)
    .then(() => {
      this.roomres = this.roomres.filter(a => a !== r);
      if (this.selectedRoom === r) {this.selectedRoom = null; }
    });
    }

  goToAddRoomRes(): void {
    this.router.navigate(['/add-room-reservation']);
  }

  goToUpdateRoomRes(r : RoomReservation) : void {
    this.router.navigate(['/update-room-reservation', this.selectedRoom.Id]);
  }

   onSelect(r : RoomReservation) : void {
    this.selectedRoom = r;
  }

  ngOnInit() {
    this.getRoomReservation();
  }
}