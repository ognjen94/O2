import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AppUser } from '../model/app-user.model';

@Injectable()
export class AppUserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private appUserUrl = 'http://localhost:54042/api/AppUsers';

  constructor(private http: Http) { }

  getAcc(): Promise<AppUserService[]> {
    return this.http.get(this.appUserUrl)
               .toPromise()
               .then(response => {return response.json() as AppUser[]})
               .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}