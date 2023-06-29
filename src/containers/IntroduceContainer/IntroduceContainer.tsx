import React from 'react';
import styles from './Introduce.module.scss';
import Button from '@/components/Button/Button';
import ContainerWrapper from '@/components/ContainerWrapper';

function IntroduceContainer() {
  return (
    <ContainerWrapper full={true}>
      <div className={styles.introduce_wrapper}>
        <div className={styles.introduce_title}>
          Chào mừng đến với môi trường{' '}
          <span className={styles.block_text}>Vlearning</span>
        </div>
        <div className={styles.introduce_description}>
          Trở thành lập trình chuyên nghiệp tại cybersoft
        </div>
        <div className={styles.advise}>
          <Button variant="primary">Xem khóa học</Button>
          <span style={{ marginRight: '16px' }}></span>
          <Button variant="default">Tư vấn học</Button>
        </div>
      </div>
    </ContainerWrapper>
  );
}

export default IntroduceContainer;
