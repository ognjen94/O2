import { Component, OnInit } from '@angular/core';
import { Room } from '../model/room.model';

import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
})

export class RoomComponent implements OnInit {
    rooms : Room[];
    
  constructor(private roomsService: RoomService) { 
  }

  getRoom(): void {
      this.roomsService
      .getRoom()
      .then(r => {this.rooms = r; debugger});
  }

  ngOnInit() {
    this.getRoom();
  }
}