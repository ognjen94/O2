import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Country } from '../model/country.model';

@Injectable()
export class CountryService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private countryUrl = 'http://localhost:54042/api/Country';

  constructor(private http: Http) { }

  getCountry(): Promise<Country[]> {
    return this.http.get(this.countryUrl)
               .toPromise()
               .then(response => {return response.json() as Country[]})
               .catch(this.handleError);
  }

    addCountry(country : Country): Promise<Country> {
    return this.http
      .post(this.countryUrl, JSON.stringify(country), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Country)
      .catch(this.handleError);
  }

    updateCounty(country : Country): Promise<Country> {
    const url = `${this.countryUrl}/${country.Id}`
    return this.http
      .put(url, JSON.stringify(country), {headers: this.headers})
      .toPromise()
      .then(() => country)
      .catch(this.handleError);
  }

    deleteCountry(country : Country): Promise<Country> {
    const url = `${this.countryUrl}/${country.Id}`
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}