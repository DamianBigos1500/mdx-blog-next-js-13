import { IPost } from '@/types/Post';
import { FC } from 'react';
import styles from './postItemCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
interface PostItemCardProps {
  post: IPost;
}

const PostItemCard: FC<PostItemCardProps> = ({ post }) => {

  return (
    <div className={styles.item}>
      {post.data.imageUrl && (
        <div className={styles.banner_img}>
          <Link href={`/posts/${post.slug}`}>
            <Image
              src={post.data.imageUrl}
              alt={post.data.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Link>
        </div>
      )}
      <Link href={`/posts/${post.slug}`} className={styles.blogTitle}>
        {post.data.title}
      </Link>

      {post.data && (
        <div className={styles.blogDate}>{post.data.publishedAt}</div>
      )}

      {post.data.ingredients && (
        <div className={styles.ingredients}>
          Ingredients:{' '}
          {post.data.ingredients.map((ing, index, ingredients) => (
            <span key={ing}>
              {ing}
              {ingredients.length - 1 > index ? ', ' : ''}
            </span>
          ))}
        </div>
      )}

      {post.data.description && (
        <div className={styles.description}>{post.data.description}</div>
      )}
    </div>
  );
};

export default PostItemCard;
