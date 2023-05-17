import { IPostData } from './PostData';

export interface IPost {
  id?: string;
  data: IPostData;
  content: string;
  slug: string;
  readingTime: number;
}
