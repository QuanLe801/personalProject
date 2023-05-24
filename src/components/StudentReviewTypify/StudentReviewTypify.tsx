import Image from 'next/image';
import styles from './StudentReviewTypify.module.scss';

function StudentReviewTypify() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <div className={styles['triangle-left-right']}></div>
        <div className={styles['smallbox-left-top']}></div>
        <div className={styles['smallbox-right-top']}></div>
        <div className={styles['smallbox-right-bottom']}></div>
        <Image
          className={styles['img-avatar']}
          src="/instrutor1.jpg"
          alt=""
          width={240}
          height={240}
        />
      </div>
      <div className={styles.body}>
        <blockquote>
          <p>
            Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập
            trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn
            được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng
            lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
          </p>
        </blockquote>
        <div className={styles.user}>
          <p>Nhi Dev</p>
          <span>Học viên xuất sắc</span>
        </div>
      </div>
    </div>
  );
}

export default StudentReviewTypify;
