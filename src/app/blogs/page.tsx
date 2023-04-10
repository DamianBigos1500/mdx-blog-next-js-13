import BlogPostCard from '@/components/blogPostCard/BlogPostCard';
import styles from '@/styles/components/posts/posts.module.scss';
import { blogPostService } from 'src/services/blogPost.service';
import { BlogPost } from '@/utils/types';
import postsService from 'src/services/posts.service';

const page = async () => {
  const blogPosts: BlogPost[] = await blogPostService.getBlogPosts();

  let data;
  try {
    data = postsService.getPosts();
  } catch (error) {}

  console.log(data);
  
  return (
    <section className={styles.posts}>
      {blogPosts.map((post: any) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </section>
  );
};

export default page;
