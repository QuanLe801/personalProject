import React from 'react';
import styles from './Course.module.scss';
import Image from 'next/legacy/image';

function Course() {
  return (
    <div className={styles.course_wrapper}>
      <div className={styles.course_header}>
        <Image
          src="https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-web-django-python-6.jpg"
          alt=""
          width={280}
          height={185}
          objectFit="cover"
        />
      </div>
      <div className={styles.course_content}>
        <span className={styles.course_type}>Tư duy lập trình</span>
        <p className={styles.course_name}>Lập Trình Web Django Python 6 </p>
        <div className={styles.lecture}>
          <div className={styles.lecture_avatar}>
            <Image
              src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png"
              alt=""
              width={34}
              height={34}
              objectFit="cover"
            />
          </div>
          <span className={styles.lecture_name}>Elon Musk</span>
        </div>
      </div>
      <hr />
      <div className={styles.course_footer}>
        <div className={styles.course_price}>
          <span className={styles.init_price}>
            800.000
            <sub className={styles.sub}>đ</sub>
          </span>
          <span className={styles.real_price}>
            400.000
            <sub className={styles.sub}>đ</sub>
          </span>
        </div>
        <div className={styles.rate_wrapper}>
          <div className={styles.rating_star_wrapper}>
            <Image src="/star.svg" alt="" width={14} height={14} />
            <div className={styles.rate}>4.9</div>
          </div>
          <div className={styles.rate_count}>(7840)</div>
        </div>
      </div>
    </div>
  );
}

export default Course;
