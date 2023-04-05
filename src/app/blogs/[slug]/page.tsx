import MdxContent from '@/components/mdxContent/MdxContent';
import styles from '@/styles/components/posts/post.module.scss';
import BlogPostHeader from '@/components/blogPost/BlogPostHeader';
import { blogPostService } from 'src/services/blogPost.service';
import { BlogPost } from '@/utils/types';

// export const generateMetadata = ({ params }: any) => {
//   const { data } = postsService.getPostBySlug(params.slug);
//   return { title: data.title };
// };

const page = async ({ params }: { params: { slug: string } }) => {
  const blogPost: BlogPost | null = await blogPostService.getBlogPostBySlug(
    params.slug
  );
  if (!blogPost) return;
  const { data, readingTime, content } = blogPost;

  return (
    <div className={styles.blog_post__container}>
      <BlogPostHeader src={data.imageUrl} title={data.title} />

      <div className={styles.blog_post__content}>
        <div className={styles.blog_post__time}>
          <span>Preparation time: {data.preparationTime} min</span>
          <span>Read time: {readingTime} min</span>
        </div>

        <div className={styles.blog_post__mdx}>
          <MdxContent source={content} data={data} />
        </div>
      </div>
    </div>
  );
};

export default page;
