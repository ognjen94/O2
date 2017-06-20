import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Http, Response } from '@angular/http';

import { Comment } from '../../model/comment.model';
import { CommentService } from '../../services/comment.service';
import { AppUserService } from '../../services/app-user.service' ;
import { AppUser } from '../../model/app-user.model';
import { AccommodationService } from '../../services/accommodation.service' ;
import { Accommodation } from '../../model/accommodation.model';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  providers: [CommentService, AppUserService, AccommodationService]
})
export class AddCommentComponent implements OnInit {
  appUser: AppUser[];
  acc: Accommodation[];
  error : any;
  
  constructor(private CommentService: CommentService, 
  private AppUserService: AppUserService,
  private AccommodationService: AccommodationService) {
  }

  ngOnInit() {
    this.AppUserService.getUser().then(u => this.appUser = u).catch(error => this.error = error);
    this.AccommodationService.getAcc().then(a => this.acc = a).catch(error => this.error = error);

  }

      addComment(c: Comment, form: NgForm): void {       
        this.CommentService.addComment(c);
  }

}