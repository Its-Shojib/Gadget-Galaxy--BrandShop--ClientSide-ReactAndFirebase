
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay, FreeMode, Scrollbar } from 'swiper/modules';


const CustomerReview = () => {
    return (
        <div className='my-10 '>
            <h2 className='text-center text-5xl font-bold'>Our <span className='text-rose-800'>Customer</span> Reviews</h2>
            <div className='bg-gradient-to-r from-purple-400 to-lime-300 rounded-lg my-10 py-5 px-4'>
                <Swiper
                    slidesPerView={'1'}
                    // breakpoints={{
                    //     320: { slidesPerView: 1, spaceBetween: 80 },
                    //     480: { slidesPerView: 2, spaceBetween: 70 },
                    //     768: { slidesPerView: 2, spaceBetween: 50 },
                    //     1024: { slidesPerView: 3, spaceBetween: 150 },
                    // }}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 90 },
                        1024: { slidesPerView: 3, spaceBetween: 80 },
                    }}

                    // spaceBetween={50}
                    autoplay={true}
                    pagination={{
                        clickable: true,
                    }}
                    freeMode
                    centeredSlides
                    grabCursor
                    centeredSlidesBounds
                    modules={[Pagination, Autoplay, FreeMode, Scrollbar]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl space-y-5 ">
                            <p className='text-lg font-medium px-4'> I absolutely love this tech shop for its extensive range of products. Whether I am in the market for the latest Apple gadgets, powerful Intel processors, sleek Samsung smartphones, robust Microsoft software, cutting-edge OnePlus devices, this store has it all.</p>
                            <div className='flex  items-center gap-3'>
                                <img src="/member1.png" alt="Shoes" className="rounded-full w-20" />
                                <h3 className='text-xl font-bold'>Md Shojib Hossain</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl space-y-5 ">
                            <p className='text-lg font-medium px-4'>The staff at this tech shop is incredibly knowledgeable and always ready to assist. They patiently answer all my questions, provide expert advice, and ensure that I leave with the perfect product. Their dedication to customer satisfaction is truly commendable.</p>
                            <div className='flex  items-center gap-3'>
                                <img src="/member2.png" alt="Shoes" className="rounded-full w-20" />
                                <h3 className='text-xl font-bold'>Mohsena Yeasmin</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl space-y-5 ">
                            <p className='text-lg font-medium px-4'>I appreciate the competitive pricing here. Even with high-end brands like Apple and Samsung, I have found that the prices are reasonable, and there are often great deals and discounts that make it an even better value.</p>
                            <div className='flex  items-center gap-3'>
                                <img src="/member3.png" alt="Shoes" className="rounded-full w-20" />
                                <h3 className='text-xl font-bold'>Masum Billa</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl space-y-5 ">
                            <p className='text-lg font-medium px-4'> The shops commitment to customer satisfaction doesnt end with the sale. They offer reliable warranties and excellent after-sales support for products. Its reassuring to know that if I encounter any issues, I am in good hands.
                            </p>
                            <div className='flex  items-center gap-3'>
                                <img src="/member4.png" alt="Shoes" className="rounded-full w-20" />
                                <h3 className='text-xl font-bold'>Mst Asha Khatun</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl space-y-5 ">
                            <p className='text-lg font-medium px-4'>This tech shop stays ahead of the curve by frequently updating its inventory with the latest releases from Apple, Samsung, Intel, Microsoft, OnePlus, and Google. I always feel like I am getting access to the newest and most exciting technology.</p>
                            <div className='flex  items-center gap-3'>
                                <img src="/member1.png" alt="Shoes" className="rounded-full w-20" />
                                <h3 className='text-xl font-bold'>Niloy Das</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl space-y-5 ">
                            <p className='text-lg font-medium px-4'>The store is thoughtfully organized, making it easy to find. Whether I am after accessories, software, or the latest gadgets, the layout ensures a smooth shopping experience.Its a one-stop-shop for all my tech needs, and I appreciate the convenience it offers.</p>
                            <div className='flex  items-center gap-3'>
                                <img src="/member2.png" alt="Shoes" className="rounded-full w-20" />
                                <h3 className='text-xl font-bold'>Lucky Khatun</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100  shadow-xl space-y-5 ">
                            <p className='text-lg font-medium px-4'> Well-Organized Store Layout: The store is thoughtfully organized, making it easy to find what I am looking for. Whether I am after accessories, software, or the latest gadgets, the layout ensures a smooth shopping experience what I am looking for.</p>
                            <div className='flex  items-center gap-3'>
                                <img src="/member3.png" alt="Shoes" className="rounded-full w-20" />
                                <h3 className='text-xl font-bold'>Aowal Hossain</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default CustomerReview;
