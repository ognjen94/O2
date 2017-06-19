import { Country } from './country.model';

export class Region{
    constructor(
        public Id: number,
        public Name: string,
        public country: Country){
        }
}