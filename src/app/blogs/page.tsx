import BlogPostCard from '@/components/blogPostCard/BlogPostCard';
import { BlogPost } from '@/utils/types';
import postsService from 'src/services/posts.service';
import styles from '@/styles/components/posts/posts.module.scss';
import ClientOnly from '@/components/oncyClient/onlyClient';

const page = async () => {
  const blogPosts: BlogPost[] = postsService.getPosts();

  return (
    <section className={styles.posts}>
      <ClientOnly>
        {blogPosts.map((post: BlogPost) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </ClientOnly>
    </section>
  );
};

export default page;
