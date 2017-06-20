import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Region } from '../model/region.model';

@Injectable()
export class RegionService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private regionUrl = 'http://localhost:54042/api/Region';

  constructor(private http: Http) { }

  getRegion(): Promise<Region[]> {
    return this.http.get(this.regionUrl+"?$expand=country")
               .toPromise()
               .then(response => {return response.json() as Region[]})
               .catch(this.handleError);
  }

  addRegion(r : Region): Promise<Region> {
    return this.http
      .post(this.regionUrl, JSON.stringify(r), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Region)
      .catch(this.handleError);
  }

    deleteRegion(r : Region): Promise<Region> {
    const url = `${this.regionUrl}/${r.Id}`
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

    updateRegion(r : Region): Promise<Region> {
    const url = `${this.regionUrl}/${r.Id}`
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