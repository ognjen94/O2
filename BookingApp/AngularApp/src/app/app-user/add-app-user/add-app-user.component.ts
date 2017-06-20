import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Http, Response } from '@angular/http';

import { AppUserService } from '../../services/app-user.service' 

import { AppUser } from '../../model/app-user.model';



@Component({
  selector: 'app-add-app-user',
  templateUrl: './add-app-user.component.html',
  providers: [AppUserService]
})
export class AddUserComponent implements OnInit {
  appUsers: AppUser[];
  error : any;
  
  constructor(private AppUserService: AppUserService) {
  }

  ngOnInit() {
     
  }

      addUser(u: AppUser, form: NgForm): void {
        //console.log(acc.accommodationType.name);
        
        this.AppUserService.addAppUser(u);debugger
  }

}