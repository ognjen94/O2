import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Comment } from '../model/comment.model';

@Injectable()
export class CommentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private accommodationsUrl = 'api/accommodation';  // URL to web api
  private commentUrl = 'http://localhost:54042/api/Comment';

  constructor(private http: Http) { }

  getComment(): Promise<Comment[]> {
    return this.http.get(this.commentUrl+"?$expand=user,accommodation/owner,accommodation/accommodationType,accommodation/place/region/country")
               .toPromise()
               .then(response => {return response.json() as Comment[]})
               .catch(this.handleError);
  }

  addComment(c : Comment): Promise<Comment> {
    return this.http
      .post(this.commentUrl, JSON.stringify(c), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Comment)
      .catch(this.handleError);
  }

    deleteComment(c : Comment): Promise<Comment> {
    const url = `${this.commentUrl}/${c.Id}`
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

    updateComment(c : Comment): Promise<Comment> {
    const url = `${this.commentUrl}/${c.Id}`
    return this.http
      .put(url, JSON.stringify(c), {headers: this.headers})
      .toPromise()
      .then(() => c)
      .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}