import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styles from './ItemInstructor.module.scss';
interface ItemInstructorI {
  item: {
    name: String;
    des: String;
    'point-review': React.ReactNode;
    'quantity-review': React.ReactNode;
    img: string;
  };
}

function ItemInstructor({ item }: ItemInstructorI) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={item.img}
        alt=""
        width={80}
        height={80}
        className={styles.avatar}
      />
      <p>{item.name}</p>
      <p className={styles.des}>{item.des}</p>
      <div className={styles.review}>
        <div className={styles['review-point']}>
          <span>
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </span>
          <span className={styles['star-point']} style={{ width: '100%' }}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
        </div>
        <span className={styles['number-point']}>
          {Number(item['point-review']).toFixed(1)}
        </span>
      </div>

      <p className={styles['quantity-review']}>
        {item['quantity-review']} đánh giá
      </p>
    </div>
  );
}

export default ItemInstructor;
