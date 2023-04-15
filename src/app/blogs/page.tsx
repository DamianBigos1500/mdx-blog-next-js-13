import BlogPostCard from '@/components/blogPostCard/BlogPostCard';
import styles from '@/styles/components/posts/posts.module.scss';
import { blogPostService } from 'src/services/blogPost.service';
import { BlogPost } from '@/utils/types';
import { ingredientsService } from 'src/services/ingredients.service';
import IngredientsFilter from '@/components/ingredientsFilter/IngredientsFilter';
import SearchFilter from '@/components/searchFilter/SearchFilter';

const page = async ({ searchParams }: any) => {
  const blogPosts: BlogPost[] | undefined = await blogPostService.getBlogPosts(
    searchParams
  );
  let ingredients;
  try {
    ingredients = await ingredientsService.getIngredients();
  } catch (error) {}

  return (
    <section className={styles.posts}>
      <SearchFilter searchParams={searchParams} />
      <IngredientsFilter
        ingredients={ingredients}
        searchParams={searchParams}
      />
      {blogPosts?.map((post: any) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </section>
  );
};

export default page;
