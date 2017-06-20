import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
 
import { AppUserService } from '../../services/app-user.service' 

import { AppUser } from '../../model/app-user.model';


@Component({
  selector: 'update-app-user',
  templateUrl: './update-app-user.component.html',
  providers: [AppUserService]
})
export class UpdateUserComponent implements OnInit {
  user : AppUser;
  id: number;
  appUsers: AppUser[];
  error: any;

  constructor(
    private AppUserService: AppUserService,
    private route: ActivatedRoute,
    private location: Location
  ) {
      this.route.params.subscribe((params: Params) => this.id = params["Id"]);
  }

  ngOnInit(): void {
    this.AppUserService.getUser()
    .then(u => {this.appUsers = u;  this.user = this.appUsers.find(u => u.Id == this.id)});
    

  }

  updateUser(): void {
      debugger
    this.AppUserService.updateAppUser(this.user)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
