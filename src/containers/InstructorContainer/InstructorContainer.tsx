'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Instructor.module.scss';
// import required modules
import { Pagination } from 'swiper';
import ItemInstructor from '@/components/ItemInstructor';
import ContainerWrapper from '@/components/ContainerWrapper/ContainerWrapper';
const list = [
  {
    name: 'Nam',
    des: 'Giáo sư công nghệ phần mềm',
    'point-review': 5,
    'quantity-review': 99999,
    img: '/instrutor1.jpg',
  },
  {
    name: 'Nam',
    des: 'Giáo sư công nghệ phần mềm',
    'point-review': 5,
    'quantity-review': 99999,
    img: '/instrutor1.jpg',
  },
  {
    name: 'Nam',
    des: 'Giáo sư công nghệ phần mềm',
    'point-review': 5,
    'quantity-review': 99999,
    img: '/instrutor1.jpg',
  },
  {
    name: 'Nam',
    des: 'Giáo sư công nghệ phần mềm',
    'point-review': 5,
    'quantity-review': 99999,
    img: '/instrutor1.jpg',
  },
  {
    name: 'Nam',
    des: 'Giáo sư công nghệ phần mềm',
    'point-review': 5,
    'quantity-review': 99999,
    img: '/instrutor1.jpg',
  },
  {
    name: 'Nam',
    des: 'Giáo sư công nghệ phần mềm',
    'point-review': 5,
    'quantity-review': 99999,
    img: '/instrutor1.jpg',
  },
  {
    name: 'Nam',
    des: 'Giáo sư công nghệ phần mềm',
    'point-review': 5,
    'quantity-review': 99999,
    img: '/instrutor1.jpg',
  },
  {
    name: 'Nam',
    des: 'Giáo sư công nghệ phần mềm',
    'point-review': 5,
    'quantity-review': 99999,
    img: '/instrutor1.jpg',
  },
  {
    name: 'Nam',
    des: 'Giáo sư công nghệ phần mềm',
    'point-review': 5,
    'quantity-review': 99999,
    img: '/instrutor1.jpg',
  },
  {
    name: 'Nam',
    des: 'Giáo sư công nghệ phần mềm',
    'point-review': 5,
    'quantity-review': 99999,
    img: '/instrutor1.jpg',
  },
];
function InstructorContainer() {
  return (
    <ContainerWrapper>
      <div className={styles.wrapper}>
        <p className={styles.title}>Giảng viên hàng đầu</p>
        <Swiper
          pagination={{
            clickable: true,
          }}
          slidesPerGroup={3}
          slidesPerView={5}
          loop={true}
          modules={[Pagination]}
          className={styles.slides}
        >
          {list.map((item, index) => (
            <SwiperSlide key={index}>
              <ItemInstructor item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ContainerWrapper>
  );
}

export default InstructorContainer;
