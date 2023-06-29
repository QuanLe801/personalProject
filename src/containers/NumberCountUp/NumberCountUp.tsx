import ContainerWrapper from '@/components/ContainerWrapper/ContainerWrapper';
import { numberCountUp } from '@/utils/const';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './NumberCountUp.module.scss';

function NumberCountUp() {
  const CouterUp = dynamic(() => import('@/components/CouterUp'));
  return (
    <ContainerWrapper className={styles.wrapper}>
      <div className={styles['count-wrapper']}>
        <div className={styles.content}>
          <Image src={'/studentsNumber.png'} alt="" width={80} height={80} />
          <CouterUp
            className={styles['count-number']}
            duration={2500}
            endValue={numberCountUp.studentsNumber}
          />
          <p className={styles.text}>Học viên</p>
        </div>
        <div className={styles.content}>
          <Image src={'/timetableNumber.png'} alt="" width={80} height={80} />
          <CouterUp
            className={styles['count-number']}
            duration={2500}
            endValue={numberCountUp.timetableNumber}
          />
          <p className={styles.text}>Khóa học</p>
        </div>
        <div className={styles.content}>
          <Image src={'/hourglassNumber.png'} alt="" width={80} height={80} />
          <CouterUp
            className={styles['count-number']}
            duration={2500}
            endValue={numberCountUp.hourglassNumber}
          />
          <p className={styles.text}>Giờ học</p>
        </div>
        <div className={styles.content}>
          <Image src={'/teacherNumber.png'} alt="" width={80} height={80} />
          <CouterUp
            className={styles['count-number']}
            duration={2500}
            endValue={numberCountUp.teacherNumber}
          />
          <p className={styles.text}>Giảng viên</p>
        </div>
      </div>
    </ContainerWrapper>
  );
}

export default NumberCountUp;
