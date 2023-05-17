'use client';

import useSlider from '@/hooks/useSlider';
import { FC, useEffect, useRef } from 'react';
import styles from './slider.module.scss';
import { IPost } from '@/types/Post';
import PostItemCard from '@/features/post/components/PostItemCard/PostItemCard';
import useWindowSize from '@/hooks/useWindowSize';
import Icons from '../UI/Icons/Icons';

interface SliderProps {
  posts: IPost[];
}

const Slider: FC<SliderProps> = ({ posts }) => {
  const windowSize = useWindowSize();
  const { current, increase, decrease, movedValue, itemWidth } = useSlider(
    windowSize[0] > 1000 ? 3 : windowSize[0] < 600 ? 1 : 2,
    posts.length
  );

  return (
    <div className={styles.slider}>
      <h2>Featured Cakes</h2>
      <button
        className={styles.slider__button}
        style={{ left: 0 }}
        onClick={() => decrease(1)}
      >
        <Icons.ChevronLeft size={40} />
      </button>
      <div
        className={styles.slider__container}
        style={{ transform: `translateX(${movedValue}%)` }}
      >
        {posts.map((post: IPost, index: number) => (
          <div
            key={index}
            className={styles.slider__item}
            style={{ width: `${itemWidth}%` }}
          >
            <PostItemCard post={post} />
          </div>
        ))}
      </div>
      <button
        className={styles.slider__button}
        style={{ right: 0 }}
        onClick={() => increase(1)}
      >
        <Icons.ChevronRight size={40} />
      </button>
    </div>
  );
};

export default Slider;
