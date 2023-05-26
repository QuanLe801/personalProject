import Image from 'next/image';
import styles from './page.module.css';
import IntroduceContainer from './containers/IntroduceContainer';
import StudentReviewTypifyContainer from './containers/StudentReviewTypifyContainer';
import InstructorContainer from './containers/InstructorContainer/InstructorContainer';

export default function Home() {
  return (
    <div>
      <IntroduceContainer />
      <InstructorContainer />
      <StudentReviewTypifyContainer />
    </div>
  );
}
