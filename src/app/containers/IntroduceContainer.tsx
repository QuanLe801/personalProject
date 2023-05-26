import React from 'react';
import styles from './Introduce.module.scss';
import Button from '@/components/Button/Button';

function IntroduceContainer() {
  return (
    <div className={styles.introduce_wrapper}>
      <div className={styles.introduce_title}>
        Chào mừng đến với môi trường{' '}
        <span className={styles.block_text}>Vlearning</span>
      </div>
      <div className={styles.introduce_description}>
        Trở thành lập trình chuyên nghiệp tại cybersoft
      </div>
      <div className={styles.advise}>
        <Button title="Xem khóa học" variant="primary" />
        <span style={{ marginRight: '16px' }}></span>
        <Button title="Tư vấn học" variant="default" />
      </div>
    </div>
  );
}

export default IntroduceContainer;
