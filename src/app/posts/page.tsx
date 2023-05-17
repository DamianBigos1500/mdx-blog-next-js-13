import IngredientsFilter from '@/features/post/components/IngredientsFilter/IngredientsFilter';
import BlogPostCard from '@/features/post/components/PostCard/PostCard';
import SearchFilter from '@/features/post/components/SearchFilter/SearchFilter';
import postsService from '@/services/posts.service';
import styles from '@/styles/pages/posts/posts.module.scss';
import { IPost } from '@/types/Post';

async function getData(searchParams: any) {
  const posts: IPost[] = postsService.getPosts(searchParams);
  const ingredients: string[] = postsService.getAllIngredients();

  return { posts, ingredients };
}

const page = async ({ searchParams }: any) => {
  const { posts, ingredients } = await getData(searchParams);

  return (
    <section className={styles.posts}>
      <SearchFilter searchParams={searchParams} />
      <IngredientsFilter
        searchParams={searchParams}
        ingredients={ingredients}
      />

      {posts?.map((post: any) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </section>
  );
};

export default page;
