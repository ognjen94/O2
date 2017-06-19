import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Accommodation } from '../model/accommodation.model';

@Injectable()
export class AccommodationService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private accommodationsUrl = 'http://localhost:54042/api/accommodation';

  constructor(private http: Http) { }

  getAcc(): Promise<Accommodation[]> {
    return this.http.get(this.accommodationsUrl+"?$expand=owner,place/region/country,accommodationType")
               .toPromise()
               .then(response => {return response.json() as Accommodation[]})
               .catch(this.handleError);
  }

  returnAcc(id : number): Promise<Accommodation> {
    const url = `${this.accommodationsUrl}/${id}`
    return this.http.get(url)
               .toPromise()
               .then(response => {return response.json() as Accommodation})
               .catch(this.handleError);
  }

  addAcc(acc : Accommodation): Promise<Accommodation> {
    return this.http
      .post(this.accommodationsUrl, JSON.stringify(acc), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Accommodation)
      .catch(this.handleError);
  }

  deleteAcc(acc : Accommodation): Promise<Accommodation> {
    const url = `${this.accommodationsUrl}/${acc.Id}`
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  updateAcc(acc : Accommodation): Promise<Accommodation> {
    const url = `${this.accommodationsUrl}/${acc.Id}`
    return this.http
      .put(url, JSON.stringify(acc), {headers: this.headers})
      .toPromise()
      .then(() => acc)
      .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}