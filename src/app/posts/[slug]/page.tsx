import MdxContent from '@/components/Mdx/MdxContent/MdxContent';
import PostHeader from '@/features/post/components/PostHeader/PostHeader';
import postsService from '@/services/posts.service';
import styles from '@/styles/pages/posts/post.module.scss';
import rootDirectory from '@/utils/rootDirectory';
import axios from '@/lib/axios';
// import PostOptions from '@/components/postOptions/PostOptions';
// import prisma from '@/lib/server';
// import getCurrentUser from '@/utils/getCurrentUser';

const postFilesDir = rootDirectory + '/public/mdx';

async function getData(slug: string) {
  const res = await axios.post('http://localhost:3000/api/getPostBySlug', {
    slug,
  });

  return res;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const res: any = await getData(params.slug);
  const { data, readingTime, content } = res.data.post;

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
