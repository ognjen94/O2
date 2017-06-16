import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Region } from '../model/region.model';

@Injectable()
export class RegionService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private roomUrl = 'http://localhost:54042/api/Region';

  constructor(private http: Http) { }

  getRegion(): Promise<Region[]> {
    return this.http.get(this.roomUrl+"?$expand=country")
               .toPromise()
               .then(response => {return response.json() as Region[]})
               .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}