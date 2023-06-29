import { FaDatabase } from 'react-icons/fa';
import { HiOutlineCursorClick } from 'react-icons/hi';
import { FaLaptopCode } from 'react-icons/fa';
import { FcSmartphoneTablet } from 'react-icons/fc';
import { BsCodeSlash } from 'react-icons/bs';
import { MdSmartToy } from 'react-icons/md';

export const RouteList = [
  {
    title: 'KHÓA HỌC',
    description:
      'Học qua dự án thực tế, học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay',
    listRoute: [
      'Hơn 1000 bài tập và dự án thực tế',
      'Công nghệ cập nhật mới nhất',
      'Hình ảnh, ví dụ, bài giảng sinh động trực quan',
      'Tư duy phân tích, giải quyết vấn đề trong dự án',
      'Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án',
      'Cơ hội thực tập tại các công ty lớn như FPT, Microsoft',
    ],
    bgColor: '#41b294',
    big: true,
  },
  {
    title: 'LỘ TRÌNH PHÙ HỢP',
    description: '',
    listRoute: [
      'Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao',
      'Học, luyện tập code, kỹ thuật phân tích, soft skill',
      'Huấn luyện để phát triển năng lực và niềm đam mê lập trình',
    ],
    bgColor: '#f6ba35',
    big: false,
  },
  {
    title: 'GIẢNG VIÊN',
    description: '',
    listRoute: [
      'Tương tác cùng mentor và giảng viên qua phần thảo luận',
      'Review code và đưa ra các nhận xét góp ý',
      'Chấm điểm tương tác thảo luận giữa các học viên',
    ],
    bgColor: '#f6ba35',
    big: false,
  },
  {
    title: 'HỆ THỐNG HỌC TẬP',
    description: '',
    listRoute: [
      'Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên',
      'Thống kê lượt xem video, làm bài, điểm số theo chu kỳ',
      'Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập',
    ],
    bgColor: '#5c8295',
    big: false,
  },
  {
    title: 'CHỨNG NHẬN',
    description: '',
    listRoute: [
      'Chấm bài và có thể vấn đáp trực tuyến để review',
      'Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo',
      'Kết nối CV của bạn đến với các đối tác của V learning',
    ],
    bgColor: '#41b294',
    big: false,
  },
];

export const ListCourse = [
  {
    imgUrl: '',
    type: 'Tư duy lập trình',
    title: 'Lập Trình Web Django Python 6',
    lecturersAvatar: '',
    lectutersName: 'Elon Musk',
    initPrice: 800000,
    realPrice: 400000,
    rate: 4.9,
    rateCount: 7840,
  },
  {
    imgUrl: '',
    type: 'Tư duy lập trình',
    title: 'Lập Trình Web Django Python 6',
    lecturersAvatar: '',
    lectutersName: 'Elon Musk',
    initPrice: 800000,
    realPrice: 400000,
    rate: 4.9,
    rateCount: 7840,
  },
  {
    imgUrl: '',
    type: 'Tư duy lập trình',
    title: 'Lập Trình Web Django Python 6',
    lecturersAvatar: '',
    lectutersName: 'Elon Musk',
    initPrice: 800000,
    realPrice: 400000,
    rate: 4.9,
    rateCount: 7840,
  },
  {
    imgUrl: '',
    type: 'Tư duy lập trình',
    title: 'Lập Trình Web Django Python 6',
    lecturersAvatar: '',
    lectutersName: 'Elon Musk',
    initPrice: 800000,
    realPrice: 400000,
    rate: 4.9,
    rateCount: 7840,
  },
  {
    imgUrl: '',
    type: 'Tư duy lập trình',
    title: 'Lập Trình Web Django Python 6',
    lecturersAvatar: '',
    lectutersName: 'Elon Musk',
    initPrice: 800000,
    realPrice: 400000,
    rate: 4.9,
    rateCount: 7840,
  },
];

export const numberCountUp = {
  studentsNumber: 99999,
  teacherNumber: 5000,
  timetableNumber: 30000,
  hourglassNumber: 3485685,
};

export const menuHeader = [
  {
    id: 'BackEnd',
    title: 'Lập trình BackEnd',
    des: 'Bootcamp - Lập trình BackEnd từ Zero đến có việc',
    icon: FaDatabase,
  },
  {
    id: 'web',
    title: 'Thiết kế web',
    des: 'Bootcamp - Từ Zero đến có việc',
    icon: HiOutlineCursorClick,
  },
  {
    id: 'mobile',
    title: 'Lập trình di động ',
    des: 'Bootcamp - Lập trình di động từ Zero đến có việc',
    icon: FcSmartphoneTablet,
  },
  {
    id: 'frontend',
    title: 'Lập trình Front End',
    des: 'Bootcamp - Lập trình Front End từ Zero đến có việc',
    icon: BsCodeSlash,
  },
  {
    id: 'fullstack',
    title: 'Lập trình Full Stack',
    des: 'Bootcamp - Lập trình Full Stack từ Zero đến có việc',
    icon: FaLaptopCode,
  },
  {
    id: 'brain',
    title: 'Tư duy lập trình',
    des: 'Bootcamp - Tư duy lập trình từ Zero đến có việc',
    icon: MdSmartToy,
  },
];
