import { AccommodationType } from './accommodation-type.model';
import { Place } from './place.model';
import { AppUser } from './app-user.model';

export class Accommodation {
    constructor(
        public Id: number,
        public Name: string,
        public Description: string,
        public Address: string,
        public AverageGrade: number,
        public Latitude: number,
        public Longitude: number,
        public ImageURL: string,
        public Approved: boolean,
        public accommodationType: AccommodationType,
        public place : Place,
        public owner: AppUser) {
  }
}