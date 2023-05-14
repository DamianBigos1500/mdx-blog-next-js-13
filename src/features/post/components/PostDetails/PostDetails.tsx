import { FC } from 'react';
import PostHeader from '../PostHeader/PostHeader';
import MdxContent from '@/components/Mdx/MdxContent/MdxContent';
import styles from './postDetails.module.scss';
import PostOptions from '../PostOptions/PostOptions';
import { IPost } from '@/types/Post';
import { IUser } from '@/types/User';

interface PostDetailsProps {
  post: IPost;
  currentUser: IUser | null;
  pinnedId: string | null | number;
}

const PostDetails: FC<PostDetailsProps> = ({ post, currentUser, pinnedId }) => {
  return (
    <>
      <PostHeader src={post.data.imageUrl} title={post.data.title} />

      <div className={styles.post__content}>
        <PostOptions
          pinnedId={pinnedId}
          postSlug={post.slug}
          currentUser={currentUser}
        />

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
