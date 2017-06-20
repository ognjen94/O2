import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AppUser } from '../model/app-user.model';

@Injectable()
export class AppUserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private appUserUrl = 'http://localhost:54042/api/AppUser';

  constructor(private http: Http) { }

  getUser(): Promise<AppUser[]> {
    return this.http.get(this.appUserUrl)
               .toPromise()
               .then(response => {return response.json() as AppUser[]})
               .catch(this.handleError);
  }

    addAppUser(user :AppUser): Promise<AppUser> {
    return this.http
      .post(this.appUserUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as AppUser)
      .catch(this.handleError);
  }

  deleteAppUser(user : AppUser): Promise<AppUser> {
    const url = `${this.appUserUrl}/${user.Id}`
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  updateAppUser(user : AppUser): Promise<AppUser> {
    const url = `${this.appUserUrl}/${user.Id}`
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}