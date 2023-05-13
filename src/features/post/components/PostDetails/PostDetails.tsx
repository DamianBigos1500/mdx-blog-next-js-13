import { FC } from 'react';
import PostHeader from '../PostHeader/PostHeader';
import MdxContent from '@/components/Mdx/MdxContent/MdxContent';
import styles from './postDetails.module.scss';
interface PostDetailsProps {
  post: any;
}

const PostDetails: FC<PostDetailsProps> = ({ post }) => {
  return (
    <>
      <PostHeader src={post.data.imageUrl} title={post.data.title} />

      <div className={styles.post__content}>
        {/* <PostOptions
      pinnedId={pinnedId}
      blogSlug={post.slug}
      currentUser={currentUser}
    /> */}

        <div className={styles.post__time}>
          <span>Preparation time: {post.data.preparationTime} min</span>
          <span>Read time: {post.readingTime} min</span>
        </div>

        <div className={styles.post__mdx}>
          <MdxContent source={post.content} data={post.data} />
        </div>
      </div>
    </>
  );
};

export default PostDetails;
