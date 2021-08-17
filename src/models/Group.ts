import { User } from "./User";

export interface Group {
  name: string;
  group_image_url: string;
  description: string;
  id: number;
  creator: User;
  participants: User[];
  invitedMembers: User[];
}
