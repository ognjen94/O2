import { Component, OnInit } from '@angular/core';

import {
  Router,
  ActivatedRoute
} from '@angular/router';


import { AppUser } from '../model/app-user.model';

import { AppUserService } from '../services/app-user.service';

@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
})

export class AppUserComponent implements OnInit {
    appUsers : AppUser[];
    selectedUser : AppUser;
    
  constructor(private AppUserService: AppUserService,
    private router: Router) { 
  }

  getUsers(): void {
      this.AppUserService
      .getUser()
      .then(u => this.appUsers = u);
      
  }

  deleteUser(u : AppUser) : void {
    this.AppUserService
    .deleteAppUser(u)
    .then(() => {
      this.appUsers = this.appUsers.filter(a => a !== u);
      if (this.selectedUser === u) {this.selectedUser = null; }
    });
  }

  goToUpdateUser(u : AppUser) : void {
    this.router.navigate(['/update-app-user', this.selectedUser.Id]);
  }

  onSelect(u : AppUser) : void {
    this.selectedUser = u; debugger
  }

  goToAddUser(): void {
    this.router.navigate(['/add-app-user']);
  }

  ngOnInit() {
    this.getUsers();
  }
}
