import { IUser } from './User';

interface IPinnedPost {
  id?: string;
  postSlug: string;
  userId: string;
  user?: IUser;
}
