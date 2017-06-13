import { Accommodation } from './accommodation.model';
import { AppUser } from './app-user.model';

export class Comment {
  constructor(
    public id: number,
    public grade: number,
    public text: string,
    public user: AppUser,
    public accommodation: Accommodation){
    }
}