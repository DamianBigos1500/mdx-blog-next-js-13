// import BlogPostCard from '@/components/blogPostCard/BlogPostCard';
// import { blogPostService } from 'src/services/blogPost.service';
// import { BlogPost } from '@/utils/types';
// import { ingredientsService } from 'src/services/ingredients.service';
// import IngredientsFilter from '@/components/ingredientsFilter/IngredientsFilter';
// import SearchFilter from '@/components/searchFilter/SearchFilter';

import BlogPostCard from '@/features/post/components/PostCard/PostCard';
import postsService from '@/services/posts.service';
import styles from '@/styles/pages/posts/posts.module.scss';
import { IPost } from '@/types/Post';

const page = async ({ searchParams }: any) => {
  // const blogPosts: BlogPost[] | undefined = await blogPostService.getBlogPosts(
  //   searchParams
  // );
  // let ingredients;
  // try {
  //   ingredients = await ingredientsService.getIngredients();
  // } catch (error) {}

  const posts: IPost[] = postsService.getPosts();

  return (
    <section className={styles.posts}>
      {/* <SearchFilter searchParams={searchParams} /> */}
      {/* <IngredientsFilter
        ingredients={ingredients}
        searchParams={searchParams}
      /> */}

      {posts?.map((post: any) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </section>
  );
};

export default page;
