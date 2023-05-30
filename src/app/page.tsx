import InstructorContainer from '@/containers/InstructorContainer/InstructorContainer';
import IntroduceContainer from '@/containers/IntroduceContainer/IntroduceContainer';
import RouteContainer from '@/containers/RouteContainer/RouteContainer';
import StudentReviewTypifyContainer from '@/containers/StudentReviewTypifyContainer/StudentReviewTypifyContainer';

export default function Home() {
  return (
    <div>
      <IntroduceContainer />
      <RouteContainer />
      <InstructorContainer />
      <StudentReviewTypifyContainer />
    </div>
  );
}
