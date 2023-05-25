import Image from 'next/image';
import styles from './page.module.css';
import StudentReviewTypifyContainer from './containers/StudentReviewTypifyContainer';
import InstructorContainer from './containers/InstructorContainer/InstructorContainer';

export default function Home() {
  return (
    <div>
      <InstructorContainer />
      <StudentReviewTypifyContainer />
    </div>
  );
}
