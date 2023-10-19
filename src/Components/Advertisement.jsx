
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import {EffectFade, Navigation, Pagination} from 'swiper/modules';

const Advertisement = () => {

  return (
            <div className='h-[600px]'>
                <h1 className='text-center text-4xl font-bold my-5'>Meet Our <span className='text-rose-800'>Best Deal</span></h1>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='w-full '>
                        <img className='h-[450px] w-full' src="/sale-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[450px] w-full' src="/sale-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[450px] w-full' src="/sale-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[450px] w-full' src="/sale-1.jpg" />
                    </SwiperSlide>
                </Swiper>

                <h2 className='my-5 text-center text-4xl font-bold'>Grab Your <span className='text-rose-800'>Brands</span></h2>
            </div>

    );

}
export default Advertisement;