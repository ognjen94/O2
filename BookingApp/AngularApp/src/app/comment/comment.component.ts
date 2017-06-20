import { Component, OnInit } from '@angular/core';
import { Comment } from '../model/comment.model';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
})

export class CommentComponent implements OnInit {
    comments : Comment[];
    selectedComment: Comment;
    
  constructor(private commentService: CommentService,
    private router: Router) { 
  }

  getComment(): void {
      this.commentService
      .getComment()
      .then(c => {this.comments = c; debugger});
  }

  deleteComment(c : Comment) : void {
    this.commentService
    .deleteComment(c)
    .then(() => {
      this.comments = this.comments.filter(a => a !== c);
      if (this.selectedComment === c) {this.selectedComment = null; }
    });
    }

  goToAddComment(): void {
    this.router.navigate(['/add-comment']);
  }

  goToUpdateComment(c : Comment) : void {
    this.router.navigate(['/update-comment', this.selectedComment.Id]);
  }

   onSelect(c : Comment) : void {
    this.selectedComment = c;
  }

  ngOnInit() {
    this.getComment();
  }
}