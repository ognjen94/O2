import { Component, OnInit } from '@angular/core';
import { Comment } from '../model/comment.model';

import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
})

export class CommentComponent implements OnInit {
    comments : Comment[];
    
  constructor(private commentService: CommentService) { 
  }

  getComment(): void {
      this.commentService
      .getComment()
      .then(c => {this.comments = c; debugger});
  }

  ngOnInit() {
    this.getComment();
  }
}