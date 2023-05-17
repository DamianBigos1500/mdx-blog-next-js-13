'use client';

import useSlider from '@/hooks/useSlider';
import { FC } from 'react';
import styles from './slider.module.scss';

interface SliderProps {}

const Slider: FC<SliderProps> = ({}) => {
  const { current, increase, decrease } = useSlider(4, 8);

  return (
    <div className={styles.slider}>
      <button
        className={styles.slider__button}
        style={{ left: 0 }}
        onClick={() => decrease(1)}
      >
        dec
      </button>
      <div
        className={styles.slider__container}
        style={{ transform: `translateX(${25 * -current}%)` }}
      >
        <div className={styles.slider__item}>asdasd</div>
        <div className={styles.slider__item}>asdasd</div>
        <div className={styles.slider__item}>asdasd</div>
        <div className={styles.slider__item}>asdasd</div>
        <div className={styles.slider__item}>asdasd</div>
        <div className={styles.slider__item}>asdasd</div>
        <div className={styles.slider__item}>asdasd</div>
        <div className={styles.slider__item}>asdasd</div>
      </div>
      <button
        className={styles.slider__button}
        style={{ right: 0 }}
        onClick={() => increase(1)}
      >
        Slider
      </button>
    </div>
  );
};

export default Slider;
