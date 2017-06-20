import { Component, OnInit } from '@angular/core';
import { Room } from '../model/room.model';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
})

export class RoomComponent implements OnInit {
    rooms : Room[];
    selectedRoom: Room;
    
  constructor(private roomsService: RoomService,
    private router: Router) { 
  }

  getRoom(): void {
      this.roomsService
      .getRoom()
      .then(r => {this.rooms = r; debugger});
  }

  deleteRoom(r : Room) : void {
    this.roomsService
    .deleteRoom(r)
    .then(() => {
      this.rooms = this.rooms.filter(a => a !== r);
      if (this.selectedRoom === r) {this.selectedRoom = null; }
    });
    }

  goToAddRoom(): void {
    this.router.navigate(['/add-room']);
  }

  goToUpdateRoom(r : Room) : void {
    this.router.navigate(['/update-room', this.selectedRoom.Id]);
  }

   onSelect(r : Room) : void {
    this.selectedRoom = r;
  }

  ngOnInit() {
    this.getRoom();
  }
}