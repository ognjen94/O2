import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Comment } from '../model/comment.model';

@Injectable()
export class CommentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private accTypeUrl = 'http://localhost:54042/api/Comment';

  constructor(private http: Http) { }

  getComment(): Promise<Comment[]> {
    return this.http.get(this.accTypeUrl+"?$expand=user,accommodation")
               .toPromise()
               .then(response => {return response.json() as Comment[]})
               .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}