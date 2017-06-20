import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { LoggedInGuard } from './logged-in.guard'
import { AccommodationComponent } from './accommodation/accommodation.component';
import { AccommodationTypeComponent } from './accommodation-type/accommodation-type.component';
import { PlaceComponent } from './place/place.component';
import { RegionComponent } from './region/region.component';
import { CountryComponent } from './country/country.component';
import { RoomComponent } from './room/room.component';
import { RoomReservationComponent } from './room-reservation/room-reservation.component';

import { AccommodationService } from './services/accommodation.service'
import { AccommodationTypeService } from './services/accommodation-type.service';
import { PlaceService } from './services/place.service';
import { RegionService } from './services/region.service';
import { CountryService } from './services/country.service';
import { RoomService } from './services/room.service';
import { RoomReservationService } from './services/room-reservation.service';

import { AddAccommodationComponent } from './accommodation/add-accommodation/add-accommodation.component';
import { AddAccommodationTypeComponent } from './accommodation-type/add-accommodation-type/add-accommodation-type.component';
import { AddPlaceComponent } from './place/add-place/add-place.component';
import { AddRegionComponent } from './region/add-region/add-region.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
import { AddRoomReservationComponent } from './room-reservation/add-room-reservation/add-room-reservation.component';

import { UpdateAccommodationComponent } from './accommodation/update-accommodation/update-accommodation.component';
import { UpdateAccommodationTypeComponent } from './accommodation-type/update-accommodation-type/update-accommodation-type.component';
import { UpdatePlaceComponent } from './place/update-place/update-place.component';
import { UpdateRegionComponent } from './region/update-region/update-region.component';
import { UpdateCountryComponent } from './country/update-country/update-country.component';
import { UpdateRoomComponent } from './room/update-room/update-room.component';
import { UpdateRoomReservationComponent } from './room-reservation/update-room-reservation/update-room-reservation.component';

const routes: Routes = [ 
  {path: 'accommodations', component: AccommodationComponent},
  {path: 'accommodationType', component: AccommodationTypeComponent},
  {path: 'place', component: PlaceComponent},
  {path: 'region', component:RegionComponent},
  {path: 'country', component: CountryComponent},
  {path: 'room', component: RoomComponent},
  {path: 'room-reservation', component: RoomReservationComponent},

  {path: 'add-accommodation', component: AddAccommodationComponent},
  {path: 'add-accommodation-type', component: AddAccommodationTypeComponent},
  {path: 'add-place', component: AddPlaceComponent},
  {path: 'add-region', component: AddRegionComponent},
  {path: 'add-country', component: AddCountryComponent},
  {path: 'add-room', component: AddRoomComponent},
  {path: 'add-room-reservation', component: AddRoomReservationComponent},

  {path: 'update-accommodation/:Id', component: UpdateAccommodationComponent}, 
  {path: 'update-accommodation-type/:Id', component: UpdateAccommodationTypeComponent},
  {path: 'update-place/:Id', component: UpdatePlaceComponent},
  {path: 'update-region/:Id', component: UpdateRegionComponent},
  {path: 'update-country/:Id', component: UpdateCountryComponent},
  {path: 'update-room/:Id', component: UpdateRoomComponent},
  {path: 'update-room-reservation/:Id', component: UpdateRoomReservationComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    AccommodationComponent,
    AccommodationTypeComponent,
    PlaceComponent,
    RegionComponent,
    CountryComponent,
    RoomComponent,
    RoomReservationComponent,

    AddAccommodationComponent,
    AddAccommodationTypeComponent,
    AddPlaceComponent,
    AddRegionComponent,
    AddCountryComponent,
    AddRoomComponent,
    AddRoomReservationComponent,
    
    UpdateAccommodationComponent,
    UpdateAccommodationTypeComponent,
    UpdatePlaceComponent,
    UpdateRegionComponent,
    UpdateCountryComponent,
    UpdateRoomComponent,
    UpdateRoomReservationComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  
  ],
  exports: [ RouterModule ],
  providers: [AuthService, LoggedInGuard, AccommodationService, AccommodationTypeService, 
  PlaceService, RegionService, CountryService, RoomService, RoomReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
