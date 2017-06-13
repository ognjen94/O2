import { Accommodation } from './accommodation.model';

export class Room{
    constructor(
        public id: number,
        public roomNumber: number,
        public bedCount: number,
        public description: string,
        public pricePerNight: number,
        public accommodation: Accommodation){
        }
}