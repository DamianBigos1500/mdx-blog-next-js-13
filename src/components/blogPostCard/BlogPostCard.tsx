'use client';

import { BlogPost } from '@/utils/types';
import Link from 'next/link';
import { FC } from 'react';
import styles from '@/styles/components/posts/blogPost.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: FC<BlogPostCardProps> = ({ post }) => {
  const router = useRouter();

  const ingredientsString = post.data.ingredients.join(', ');
  let blogLink = `/blogs/${post.slug}`;

  return (
    <div className={`${styles.post_card} shadow`}>
      <div className={styles.post_card__left}>
        <div className={styles.post_card__title}>
          <Link href={blogLink}>{post.data.title}</Link>
        </div>

        <div
          className={styles.post_card__images_wrapper}
          onClick={() => {
            router.push(blogLink);
          }}
        >
          <Image
            src={post.data.imageUrl}
            width={400}
            height={240}
            style={{ objectFit: 'cover' }}
            className={styles.post_card__image}
            placeholder="blur"
            blurDataURL={post.data.blurhash}
            alt={post.data.title}
          />

          <Image
            src={post.data.secondImageUrl}
            width={400}
            height={240}
            style={{ objectFit: 'cover' }}
            className={`${styles.post_card__image_second} ${styles.post_card__image_second_back}`}
            placeholder="blur"
            blurDataURL={post.data.blurhash}
            alt={post.data.title}
          />
        </div>

        <div className={styles.post_card__product_info}>
          <div className={styles.post_card__preparation_time}>
            {post.data.preparationTime} min to prepare
          </div>

          <div className={styles.post_card__description}>
            {post.data.description}
          </div>

          <div className={styles.post_card__ingredients}>
            Ingredients: {ingredientsString}
          </div>
        </div>
      </div>

      <div className={styles.post_card__right}>
        <div className={styles.post_card__additional_info}>
          <div className={styles.post_card__date}>{post.data.publishedAt}</div>
          <div className={styles.post_card__read_time}>
            {post.readingTime} min reading
          </div>
        </div>
        <Link href={blogLink} className={styles.post_card__button}>
          Read recepice...
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
