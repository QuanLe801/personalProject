import Image from 'next/image';
import styles from './page.module.css';
import Instructor from '@/components/Instructor';
import StudentReviewTypify from '@/components/StudentReviewTypify';

export default function Home() {
  return (
    <div>
      <Instructor />
      <StudentReviewTypify />
    </div>
  );
}
