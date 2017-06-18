import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AppUser } from './model/app-user.model';

import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService,
    private router: Router) {
    
   }

   logIn(username:string, password:string){
    this.authService.logIn();
  }
  
    logOut(){
        this.authService.logOut();
    }

    isLoggedIn() : boolean{
        return this.authService.isLoggedIn();
    }

    goToAccommodation(): void {
    this.router.navigate(['/accommodations']);
  }
  
    goToAccommodationType(): void {
    this.router.navigate(['/accommodationType']);
  }
  goToPlace(): void {
    this.router.navigate(['/place']);
  }s
}
