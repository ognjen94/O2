import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Room } from '../model/room.model';

@Injectable()
export class RoomService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private roomUrl = 'http://localhost:54042/api/Rooms';

  constructor(private http: Http) { }

  getAcc(): Promise<RoomService[]> {
    return this.http.get(this.roomUrl)
               .toPromise()
               .then(response => {return response.json() as Room[]})
               .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}