import styles from '@/styles/pages/posts/post.module.scss';
import postsService from '@/services/posts.service';
import PostDetails from '@/features/post/components/PostDetails/PostDetails';
import { IPost } from '@/types/Post';
// import PostOptions from '@/components/postOptions/PostOptions';
// import prisma from '@/lib/server';
// import getCurrentUser from '@/utils/getCurrentUser';

async function getData(slug: string) {
  const post: IPost = postsService.getPostBySlug(slug);
  return { post };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const { post } = await getData(params.slug);

  try {
    // currentUser = await getCurrentUser();
    // if (currentUser) {
    //   const likedUserBlogs = await prisma.pinnedBlogs.findUnique({
    //     where: {
    //       like_identifier: {
    //         postSlug: post.slug,
    //         userId: currentUser.id,
    //       },
    //     },
    //   });
    //   if (likedUserBlogs) pinnedId = likedUserBlogs.id;
    // }
  } catch (error) {}

  return (
    <section className={styles.post__container}>
      <PostDetails post={post} />
    </section>
  );
};

export default page;
