import MdxContent from '@/components/Mdx/MdxContent/MdxContent';
import PostHeader from '@/features/post/components/PostHeader/PostHeader';
import styles from '@/styles/pages/posts/post.module.scss';
import axios from '@/lib/axios';
import postsService from '@/services/posts.service';
// import PostOptions from '@/components/postOptions/PostOptions';
// import prisma from '@/lib/server';
// import getCurrentUser from '@/utils/getCurrentUser';


async function getData(slug: string) {
  const res = await fetch('api/getPostBySlug');

  return res.json();
}

const page = async ({ params }: { params: { slug: string } }) => {
  const post: any = postsService.getPostBySlug(params.slug);
  const { data, readingTime, content } = post;

  // let pinnedId = '';
  // let currentUser;

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
      <PostHeader src={data.imageUrl} title={data.title} />

      <div className={styles.post__content}>
        {/* <PostOptions
          pinnedId={pinnedId}
          blogSlug={post.slug}
          currentUser={currentUser}
        /> */}

        <div className={styles.post__time}>
          <span>Preparation time: {data.preparationTime} min</span>
          <span>Read time: {readingTime} min</span>
        </div>

        <div className={styles.post__mdx}>
          <MdxContent source={content} data={data} />
        </div>
      </div>
    </section>
  );
};

export default page;
