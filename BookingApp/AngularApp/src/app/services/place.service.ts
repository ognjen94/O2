import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Place } from '../model/place.model';

@Injectable()
export class PlaceService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private accTypeUrl = 'http://localhost:54042/api/Places';

  constructor(private http: Http) { }

  getAcc(): Promise<Place[]> {
    return this.http.get(this.accTypeUrl)
               .toPromise()
               .then(response => {return response.json() as Place[]})
               .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}