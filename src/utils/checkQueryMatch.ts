import { IPost } from '@/types/Post';
import CustomQueries from './CustomQueries';
import PARAMS_ENUM from '@/data/PARAMS_ENUM';

export const checkQueryMatch = (post: IPost, searchParams: any) => {
  const queries = new CustomQueries(searchParams);
  const search = Array.from(queries.get(PARAMS_ENUM.SEARCH) ?? [])[0];

  // QUERY INPUT
  if (
    search &&
    !post.content.includes(search) &&
    !post.data.title.includes(search)
  )
    return false;

  // QUERY INGREDIENTS
  const ingredients = Array.from(queries.get(PARAMS_ENUM.ING) ?? []);
  for (let i = 0; i < ingredients.length; i++) {
    if (!post.data.ingredients.includes(ingredients[i])) {
      return false;
    }
  }

  return true;
};
