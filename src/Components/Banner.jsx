
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <div className='h-[500px] w-full z-0'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='h-[500px] w-full' src="/b1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[500px] w-full' src="/b2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[500px] w-full' src="/b3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[500px] w-full' src="/b4.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[500px] w-full' src="/b5.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[500px] w-full' src="/b6.jpg" alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;