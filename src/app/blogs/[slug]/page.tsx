import MdxContent from '@/components/mdxContent/MdxContent';
import styles from '@/styles/components/posts/post.module.scss';
import BlogPostHeader from '@/components/blogPost/BlogPostHeader';
import { blogPostService } from 'src/services/blogPost.service';
import { BlogPost } from '@/utils/types';
import PostOptions from '@/components/postOptions/PostOptions';
import prisma from '@/lib/server';
import getCurrentUser from '@/utils/getCurrentUser';

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

  const currentUser = await getCurrentUser();

  let isPinned = false;

  if (currentUser) {
    const likedUserBlogs = await prisma.user
      .findFirst({
        where: {
          email: currentUser?.email,
        },
      })
      .likedBlogs();

    isPinned = likedUserBlogs?.find(
      (liked) => liked.blogPostSlug === blogPost.slug
    )
      ? true
      : false;
  }
  // if(user?.likedBlogs.)

  // if (user != null) {
  //   const like = await prisma.likedBlogs.upsert({
  //     where: {
  //       like_identifier: {
  //         blogPostSlug: blogPost.slug,
  //         userId: user.id,
  //       },
  //     },
  //     update: {},
  //     create: {
  //       blogPostSlug: blogPost.slug,
  //       user: {
  //         connect: {
  //           id: user.id,
  //         },
  //       },
  //     },
  //   });
  //   console.log(like);
  // }

  return (
    <section className={styles.blog_post__container}>
      <BlogPostHeader src={data.imageUrl} title={data.title} />

      <div className={styles.blog_post__content}>
        <PostOptions content={content} isPinned={isPinned} />

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
