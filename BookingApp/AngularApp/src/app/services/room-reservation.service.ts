import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { RoomReservation } from '../model/room-reservation.model';

@Injectable()
export class RoomReservationService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private roomUrl = 'http://localhost:54042/api/RoomReservation';

  constructor(private http: Http) { }

  getRoomReservation(): Promise<RoomReservation[]> {
    return this.http.get(this.roomUrl)
               .toPromise()
               .then(response => {return response.json() as RoomReservation[]})
               .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}