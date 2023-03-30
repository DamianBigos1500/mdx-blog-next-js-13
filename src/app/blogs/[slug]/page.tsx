'server only'

import postsService from 'src/services/posts.service';
import MdxContent from '@/components/mdxContent/MdxContent';
import styles from '@/styles/components/posts/post.module.scss';
import BlogPostHeader from '@/components/blogPost/BlogPostHeader';

export const generateMetadata = async ({ params }: any) => {
  const { data } = postsService.getPostBySlug(params.slug);
  return { title: data.title };
};

const page = async ({ params }: { params: { slug: string } }) => {
  const { data, content, readingTime } = postsService.getPostBySlug(
    params.slug
  );

  return (
    <div className={styles.blog_post__container}>
      <BlogPostHeader
        src={data.imageUrl}
        title={data.title}
        readingTime={readingTime}
      />

      <div className={styles.blog_post__content}>
        <div className={styles.blog_post__time}>
          <span>Meal preparation time: {data.preparationTime} min</span>
          <span>Article read time: {readingTime} min</span>
        </div>

        <div className={styles.blog_post__mdx}>
          <MdxContent source={content} data={data} />
        </div>
      </div>
    </div>
  );
};

export default page;
