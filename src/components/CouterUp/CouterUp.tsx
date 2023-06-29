'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './CouterUp.module.scss';

interface CouterUpItF {
  endValue: number;
  duration: number;
  className?: string;
}

const timout = 33;

function CouterUp({ duration, endValue, className }: CouterUpItF) {
  const [count, setCount] = useState(0);
  const speed = useMemo(() => Math.floor((endValue / duration) * timout), []);
  const time = useRef(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const updateCount = () => {
    if (time.current < duration) {
      setCount((prevCount) => prevCount + speed);
      time.current += timout;
      timer.current = setTimeout(updateCount, timout); // Thay đổi số 1000 thành khoảng thời gian (ms) bạn muốn
    } else {
      setCount(endValue);
    }
  };

  useEffect(() => {
    setCount(0);
    time.current = 0;
    timer.current = setTimeout(updateCount, timout); // Thay đổi số 1000 thành khoảng thời gian (ms) bạn muốn

    return () => {
      !!timer.current && clearTimeout(timer.current);
    };
  }, [endValue]);

  return (
    <p className={styles.number + `${className ? ` ${className}` : ''}`}>
      {count}
    </p>
  );
}

export default CouterUp;
