import styles from '@/styles/pages/posts/post.module.scss';
import postsService from '@/services/posts.service';
import PostDetails from '@/features/post/components/PostDetails/PostDetails';
import { IPost } from '@/types/Post';
import getCurrentUser from '@/features/auth/utils/getCurrentSession';
import prisma from '@/lib/server';

async function getData(slug: string) {
  const post: IPost = postsService.getPostBySlug(slug);
  const currentUser = await getCurrentUser();

  let pinnedId = null;
  if (currentUser) {
    const likedPost = await prisma.likedPosts.findFirst({
      where: {
        postSlug: post.slug,
        userId: currentUser.id,
      },
    });
    if (likedPost) pinnedId = likedPost.id;
  }

  return { post, currentUser, pinnedId };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const { post, currentUser, pinnedId } = await getData(params.slug);

  return (
    <section className={styles.post__container}>
      <PostDetails post={post} currentUser={currentUser} pinnedId={pinnedId} />
    </section>
  );
};

export default page;
