import MdxContent from '@/components/mdxContent/MdxContent';
import styles from '@/styles/components/posts/post.module.scss';
import BlogPostHeader from '@/components/blogPost/BlogPostHeader';
import { blogPostService } from 'src/services/blogPost.service';
import { BlogPost } from '@/utils/types';
import PostOptions from '@/components/postOptions/PostOptions';
import prisma from '@/lib/server';
import getCurrentUser from '@/utils/getCurrentUser';
import postsService from 'src/services/posts.service';

export function generateStaticParams() {
  return [
    { slug: 'aws-quickstart' },
    { slug: 'gpt-3-generated-poetry' },
    { slug: 'sass-starter' },
    { slug: 'wolfhunter' },
  ];
}

const page = async ({ params }: { params: { slug: string } }) => {
  // const blogPost: BlogPost | null = await blogPostService.getBlogPostBySlug(
  //   params.slug
  // );
  // if (!blogPost) return;
  // const { data, readingTime, content } = blogPost;

  let blogPostmdx: any;
  try {
    blogPostmdx = postsService.getPostBySlug(params.slug);
  } catch (error) {}

  console.log(blogPostmdx);
  const { data, readingTime, content } = blogPostmdx;

  let pinnedId = '';
  try {
    const currentUser = await getCurrentUser();

    if (currentUser) {
      // get id of pinnedBlog
      const likedUserBlogs = await prisma.pinnedBlogs.findUnique({
        where: {
          like_identifier: {
            blogPostSlug: params.slug,
            userId: currentUser.id,
          },
        },
      });
      if (likedUserBlogs) pinnedId = likedUserBlogs.id;
    }
  } catch (error) {}

  // const downloadPdf

  return (
    <section className={styles.blog_post__container}>
      <BlogPostHeader src={data.imageUrl} title={data.title} />

      <div className={styles.blog_post__content}>
        <PostOptions
          content={content}
          data={data}
          pinnedId={pinnedId}
          blogSlug={params.slug}
        />

        <div className={styles.blog_post__time}>
          <span>Preparation time: {data.preparationTime} min</span>
          <span>Read time: {readingTime} min</span>
        </div>

        <div className={styles.blog_post__mdx}>
          <MdxContent source={content} data={data} />
        </div>
      </div>
    </section>
  );
};

export default page;
