import BlogPostCard from '@/components/blogPostCard/BlogPostCard';
import { BlogPost } from '@/utils/types';
import postsService from 'src/services/posts.service';
import styles from '@/styles/components/posts/posts.module.scss';
import prisma from '@/lib/server';
import { calculateReadingTime } from '@/utils/calculateReadingTime';

const page = async () => {
  const blogPosts: BlogPost[] = postsService.getPosts();

  const blogs = await prisma.blogPost.findMany({
    include: {
      data: true,
    },
  });

  const newBlog: BlogPost[] = blogs.map((blog: any) => {
    return {
      ...blog,
      readingTime: calculateReadingTime(blog.content),
      data: {
        ...blog.data,
        ingredients: ['eggs', 'flavour', 'cholcolade', 'strawberries'],
      },
    };
  });

  console.log(newBlog);

  return (
    <section className={styles.posts}>
      {newBlog.map((post: BlogPost) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </section>
  );
};

export default page;
