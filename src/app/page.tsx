import Image from 'next/image';
import styles from './page.module.css';
import Instructor from '@/components/Instructor';
import StudentReviewTypify from '@/components/StudentReviewTypify';
import IntroduceContainer from './containers/IntroduceContainer';

export default function Home() {
  return (
    <div>
      <IntroduceContainer />
      <Instructor />
      <StudentReviewTypify />
    </div>
  );
}
