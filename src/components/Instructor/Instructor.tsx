'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Instructor.module.scss';
// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import ItemInstructor from './ItemInstructor';
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
function Instructor() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Giảng viên hàng đầu</p>
      <Swiper
        pagination={{
          clickable: true,
        }}
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
  );
}

export default Instructor;
