'use client';

import { BlogPost } from '@/utils/types';
import Link from 'next/link';
import { FC } from 'react';
import styles from '@/styles/components/posts/blogPost.module.scss';
import Image from 'next/image';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: FC<BlogPostCardProps> = ({ post }) => {
  const ingredientsString = post.data.ingredients.join(', ');

  return (
    <div className={styles.post_card}>
      <div className={styles.post_card__left}>
        <div className={styles.post_card__title}>
          <Link href={`/blogs/${post.slug}`}>{post.data.title}</Link>
        </div>

        <Image
          src={post.data.imageUrl}
          width={400}
          height={200}
          style={{ objectFit: 'cover' }}
          className={styles.post_card__image}
          placeholder="blur"
          blurDataURL={post.data.blurhash}
          sizes="fill"
          alt={post.data.title}
        />
        <div></div>
        

        <div className={styles.post_card__ingredients}>Ingredients: {ingredientsString}</div>
      </div>

      <div className={styles.post_card__right}>
        <div className={styles.post_card__date}>{post.data.publishedAt}</div>
        <div className={styles.post_card__date}>Read recepice...</div>
      
      </div>
    </div>
  );
};

export default BlogPostCard;
