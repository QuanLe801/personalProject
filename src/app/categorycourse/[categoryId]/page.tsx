'use client';

import { MdPersonalVideo } from 'react-icons/md';
import styles from './CategoryCourse.module.scss';
import { menuHeader } from '@/utils/const';
import { useParams, useRouter } from 'next/navigation';

function CategoryCourse() {
  const { categoryId } = useParams();
  const category = menuHeader.find((item) => item.id === categoryId);
  const IconCategory = category?.icon;
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>
          <span className={styles.icon}>
            {!!IconCategory && <IconCategory />}
          </span>
          {category?.title}
        </div>
      </div>
    </div>
  );
}

export default CategoryCourse;
