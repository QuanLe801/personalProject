import InstructorContainer from '@/containers/InstructorContainer/InstructorContainer';
import IntroduceContainer from '@/containers/IntroduceContainer/IntroduceContainer';
import ListCourseContainer from '@/containers/ListContainer/ListCourseContainer';
import RouteContainer from '@/containers/RouteContainer/RouteContainer';
import StudentReviewTypifyContainer from '@/containers/StudentReviewTypifyContainer/StudentReviewTypifyContainer';

export default function Home() {
  return (
    <div>
      <IntroduceContainer />
      <RouteContainer />
      <ListCourseContainer />
      <InstructorContainer />
      <StudentReviewTypifyContainer />
    </div>
  );
}
