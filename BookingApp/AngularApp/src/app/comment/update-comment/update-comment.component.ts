import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Comment } from '../../model/comment.model';
import { CommentService } from '../../services/comment.service';
import { AppUserService } from '../../services/app-user.service' ;
import { AppUser } from '../../model/app-user.model';
import { AccommodationService } from '../../services/accommodation.service' ;
import { Accommodation } from '../../model/accommodation.model';

@Component({
  selector: 'update-comment',
  templateUrl: './update-comment.component.html',
  providers: [CommentService, AppUserService, AccommodationService]
})
export class UpdateRegionComponent implements OnInit {
  comment: Comment;
  id: number;
  appUsers: AppUser[];
  accommodations: Accommodation[];
  comments: Comment[];
  error: any;

  constructor(
    private CommentService: CommentService, 
    private AppUserService: AppUserService,
    private AccommodationService: AccommodationService,
    private route: ActivatedRoute,
    private location: Location
  ) {
        this.route.params.subscribe((params: Params) => this.id = params["Id"]);
        this.AppUserService.getUser().then(u => this.appUsers = u).catch(error => this.error = error);
        this.AccommodationService.getAcc().then(a => this.accommodations = a).catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.CommentService.getComment()
    .then(c => {this.comments = c;  this.comment = this.comments.find(c => c.Id == this.id)});
    

  }

  updateComment(): void {
    this.CommentService.updateComment(this.comment)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}