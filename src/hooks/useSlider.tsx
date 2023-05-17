import { useState } from 'react';

const useSlider = (perPage: number, maxValue: number) => {
  const [current, setCurrent] = useState(0);

  function increase(value: number): void {
    if (current + value > maxValue - perPage) setCurrent(maxValue - perPage);
    else setCurrent(current + value);
  }

  function decrease(value: number): void {
    if (current - value < 0) setCurrent(0);
    else setCurrent(current - value);
  }

  return {
    current,
    increase,
    decrease,
    movedValue: -current * (100 / perPage),
    itemWidth: 100 / perPage,
  };
};

export default useSlider;
