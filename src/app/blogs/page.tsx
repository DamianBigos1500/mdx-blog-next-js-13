import BlogPostCard from '@/components/blogPostCard/BlogPostCard';
import { BlogPost } from '@/utils/types';
import postsService from 'src/services/posts.service';
import styles from '@/styles/components/posts/posts.module.scss';
import ClientOnly from '@/components/oncyClient/onlyClient';
import getPrismaPosts from 'src/services/prismaposts';

const page = async () => {
  const blogPosts: BlogPost[] = postsService.getPosts();
  const blogPrisma = await getPrismaPosts();

  return (
    <section className={styles.posts}>
      <ClientOnly>
        {blogPrisma.map((post: any) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </ClientOnly>
    </section>
  );
};

export default page;
