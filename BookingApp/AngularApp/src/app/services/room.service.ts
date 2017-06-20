import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Room } from '../model/room.model';

@Injectable()
export class RoomService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private roomUrl = 'http://localhost:54042/api/Room';

  constructor(private http: Http) { }

  getRoom(): Promise<Room[]> {
    return this.http.get(this.roomUrl+"?$expand=accommodation/owner, accommodation/accommodationType, accommodation/place/region/country")//
               .toPromise()
               .then(response => {return response.json() as Room[]})
               .catch(this.handleError);
  }

  addRoom(r : Room): Promise<Room> {
    return this.http
      .post(this.roomUrl, JSON.stringify(r), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Room)
      .catch(this.handleError);
  }

    deleteRoom(r : Room): Promise<Room> {
    const url = `${this.roomUrl}/${r.Id}`
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

    updateRoom(r : Room): Promise<Room> {
    const url = `${this.roomUrl}/${r.Id}`
    return this.http
      .put(url, JSON.stringify(r), {headers: this.headers})
      .toPromise()
      .then(() => r)
      .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}