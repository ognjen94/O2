import { Region } from './region.model';

export class Place{
    constructor(
        public Id: number,
        public Name: string,
        public region: Region){
    }
}