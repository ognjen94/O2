import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { LoggedInGuard } from './logged-in.guard'
import { AccommodationComponent } from './accommodation/accommodation.component';
import { AccommodationService } from './services/accommodation.service'
import { AccommodationTypeComponent } from './accommodation-type/accommodation-type.component';
import { AccommodationTypeService } from './services/accommodation-type.service';
import { AddAccommodationComponent } from './accommodation/add-accommodation/add-accommodation.component';
import { PlaceComponent } from './place/place.component';
import { PlaceService } from './services/place.service';
import { AddPlaceComponent } from './place/add-place/add-place.component';
import { UpdatePlaceComponent } from './place/update-place/update-place.component';
import { UpdateAccommodationComponent } from './accommodation/update-accommodation/update-accommodation.component';
import { AddAccommodationTypeComponent } from './accommodation-type/add-accommodation-type/add-accommodation-type.component';
import {UpdateAccommodationTypeComponent} from './accommodation-type/update-accommodation-type/update-accommodation-type.component';


const routes: Routes = [ 
  {path: 'accommodations', component: AccommodationComponent},
  {path: 'accommodationType', component: AccommodationTypeComponent},
  {path: 'add-accommodation', component: AddAccommodationComponent},
  {path: 'place', component: PlaceComponent},
  {path: 'add-place', component: AddPlaceComponent},
  {path: 'update-place/:Id', component: UpdatePlaceComponent},
  {path: 'update-accommodation/:Id', component: UpdateAccommodationComponent},
  {path: 'add-accommodation-type', component: AddAccommodationTypeComponent},
  {path: 'update-accommodation-type/:Id', component: UpdateAccommodationTypeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AccommodationComponent,
    AccommodationTypeComponent,
    AddAccommodationComponent,
    PlaceComponent,
    AddPlaceComponent,
    UpdatePlaceComponent,
    UpdateAccommodationComponent,
    UpdateAccommodationTypeComponent,
    AddAccommodationTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  
  ],
  exports: [ RouterModule ],
  providers: [AuthService, LoggedInGuard, AccommodationService, AccommodationTypeService, PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
