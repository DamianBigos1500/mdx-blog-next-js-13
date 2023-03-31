import BlogPostCard from '@/components/blogPostCard/BlogPostCard';
import { BlogPost } from '@/utils/types';
import postsService from 'src/services/posts.service';
import styles from '@/styles/components/posts/posts.module.scss';

const page = () => {
  // const blogPosts: BlogPost[] = postsService.getPosts();
  // console.log(blogPosts);

  return (
    <section className={styles.posts}>
      asdasdsd
      {/* {blogPosts.map((post: BlogPost) => (
        <BlogPostCard key={post.slug} post={post} />
      ))} */}
    </section>
  );
};

export default page;
