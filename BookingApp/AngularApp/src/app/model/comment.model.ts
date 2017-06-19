import { Accommodation } from './accommodation.model';
import { AppUser } from './app-user.model';

export class Comment {
  constructor(
    public Id: number,
    public Grade: number,
    public Text: string,
    public user: AppUser,
    public accommodation: Accommodation){
    }
}