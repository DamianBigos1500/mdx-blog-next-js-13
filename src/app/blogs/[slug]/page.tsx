import postsService from 'src/services/posts.service';
import MdxContent from '@/components/mdxContent/MdxContent';
import styles from '@/styles/components/posts/post.module.scss';
import BlogPostHeader from '@/components/blogPost/BlogPostHeader';
import { BlogPost } from '@/utils/types';
import { headers } from 'next/headers';
import prisma from '@/lib/server';
import { calculateReadingTime } from '@/utils/calculateReadingTime';

// export const generateMetadata = ({ params }: any) => {
//   const { data } = postsService.getPostBySlug(params.slug);
//   return { title: data.title };
// };

const page = async ({ params }: { params: { slug: string } }) => {
  // const { data, content, readingTime } = postsService.getPostBySlug(
  //   params.slug
  // );

  const blogsBySlug = await prisma.blogPost.findFirst({
    where: { slug: params.slug },
    include: {
      data: true,
    },
  });

  if (!blogsBySlug || !blogsBySlug.data) return;

  const readingTime = calculateReadingTime(blogsBySlug.content);

  const headersList = headers();
  const referer = headersList.get('referer');

  return (
    <div className={styles.blog_post__container}>
      <BlogPostHeader
        src={blogsBySlug.data.imageUrl}
        title={blogsBySlug.data.title}
        readingTime={readingTime}
      />

      <div className={styles.blog_post__content}>
        <div className={styles.blog_post__time}>
          <span>
            Meal preparation time: {blogsBySlug.data.preparationTime} min
          </span>
          <span>Article read time: {readingTime} min</span>
        </div>

        <div className={styles.blog_post__mdx}>
          <MdxContent source={blogsBySlug.content} data={blogsBySlug.data} />
        </div>
      </div>
    </div>
  );
};

export default page;
