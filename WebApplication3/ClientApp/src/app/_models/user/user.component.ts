import { Photo } from "../photo/photo.component";

export interface User {
  id: number;
  username: string;
  role: string;
  created: Date;
  lastActive: Date;
  photoUrl: string;
  introduction?: string;
  photos?: Photo[];

}

