'use client';

import { BlogPost } from '@/utils/types';
import { FC } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/savedBlogsCard/savedBlogsCard.module.scss';
import Link from 'next/link';

interface SavedBlogsCardProps {
  blog: BlogPost;
}

const SavedBlogsCard: FC<SavedBlogsCardProps> = ({ blog }) => {
  return (
    <div className={styles.blog_card}>
      <Image
        src={blog.data.imageUrl}
        alt={''}
        width={250}
        height={200}
        className={styles.blog_card__image}
      />
      <div className={styles.blog_card__center}>
        <Link href={'blogs/' + blog.slug} className={styles.blog_card__title}>
          {blog.data.title}
        </Link>
      </div>
      <div className={styles.blog_card__right}>
        <Link href={'blogs/' + blog.slug}>
          <div className={styles.blog_card__button}>Read receipe...</div>
        </Link>
      </div>
    </div>
  );
};

export default SavedBlogsCard;
