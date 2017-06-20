import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Place } from '../model/place.model';

@Injectable()
export class PlaceService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private placeUrl = 'http://localhost:54042/api/Places';

  constructor(private http: Http) { }

  getPlaces(): Promise<Place[]> {
    return this.http.get(this.placeUrl+"?$expand=region/country")//+"?$expand=region/country"
               .toPromise()
               .then(response => {return response.json() as Place[]})
               .catch(this.handleError);
  }

    addPlace(place : Place): Promise<Place> {
    return this.http
      .post(this.placeUrl, JSON.stringify(place), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Place)
      .catch(this.handleError);
  }

    deletePlace(place : Place): Promise<Place> {
    const url = `${this.placeUrl}/${place.Id}`
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

    updatePlace(place : Place): Promise<Place> {
    const url = `${this.placeUrl}/${place.Id}`
    return this.http
      .put(url, JSON.stringify(place), {headers: this.headers})
      .toPromise()
      .then(() => place)
      .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}