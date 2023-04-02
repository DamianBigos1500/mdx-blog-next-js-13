import BlogPostCard from '@/components/blogPostCard/BlogPostCard';
import styles from '@/styles/components/posts/posts.module.scss';
import { blogPostService } from 'src/services/blogPost.service';
import { BlogPost } from '@/utils/types';

const page = async () => {
  const blogPosts: BlogPost[] = await blogPostService.getBlogPosts();

  return (
    <section className={styles.posts}>
      {blogPosts.map((post: any) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </section>
  );
};

export default page;
