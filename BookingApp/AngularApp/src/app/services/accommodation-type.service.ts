import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AccommodationType } from '../model/accommodation-type.model';

@Injectable()
export class AccommodationTypeService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private accTypeUrl = 'http://localhost:54042/api/AccommodationType';

  constructor(private http: Http) { }

  getAccType(): Promise<AccommodationType[]> {
    return this.http.get(this.accTypeUrl)
               .toPromise()
               .then(response => {return response.json() as AccommodationType[]})
               .catch(this.handleError);
  }

    addAccType(accType : AccommodationType): Promise<AccommodationType> {
    return this.http
      .post(this.accTypeUrl, JSON.stringify(accType), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as AccommodationType)
      .catch(this.handleError);
  }

    deleteAccType(accType : AccommodationType): Promise<AccommodationType> {
    const url = `${this.accTypeUrl}/${accType.Id}`
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

    updateAccType(accType : AccommodationType): Promise<AccommodationType> {
    const url = `${this.accTypeUrl}/${accType.Id}`
    return this.http
      .put(url, JSON.stringify(accType), {headers: this.headers})
      .toPromise()
      .then(() => accType)
      .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}