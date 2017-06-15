import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Accommodation } from '../model/accommodation.model';

@Injectable()
export class AccommodationService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private accommodationsUrl = 'http://localhost:54042/api/accommodation';

  constructor(private http: Http) { }

  getAcc(): Promise<Accommodation[]> {
    return this.http.get(this.accommodationsUrl)
               .toPromise()
               .then(response =>  {
                  debugger
                  return response.json().data as Accommodation[];})
               .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}