import React from 'react';
import styles from './ListCourse.module.scss';
import Course from '@/components/Course/Course';

function ListCourseContainer() {
  return (
    <div className={styles.listRoute_wrapper}>
      <h4 className={styles.route_type}>Khóa học phổ biến</h4>
      <Course />
    </div>
  );
}

export default ListCourseContainer;
