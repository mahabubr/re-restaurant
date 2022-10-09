import { faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useLoaderData } from 'react-router-dom';



const Specials = () => {

    const sliders = useLoaderData()

    return (
        <div className='mt-10 relative text-center'>
            <div>
                <img className='w-full blur-sm brightness-50 h-[700px] object-cover' src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div className='absolute inset-0 w-8/12 mx-auto mt-8'>
                <FontAwesomeIcon icon={faKitchenSet} className="text-7xl text-white" />
                <h2 className='text-5xl mt-6 font-bold text-white'>Specials of the Day</h2>
                <div className='border mt-8'></div>
                <div className='mt-16'>
                    <Swiper
                        slidesPerView={1}
                        breakpoints={
                            {
                               640 : { slidesPerView: 2 },
                               992 : { slidesPerView: 3 },
                            }
                        }
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper "
                    >
                        {
                            sliders.map(slider => <SwiperSlide key={slider.id}>
                                <div className='bg-gray-700 rounded-3xl'>
                                    <img className='rounded-t-3xl h-44 object-cover w-full' src={slider.img} alt="" />
                                    <div className='p-8'>
                                        <h3 className='text-2xl text-white'>{slider.name}</h3>
                                        <p className='mt-2 text-red-300'>${slider.price}</p>
                                    </div>
                                    <button className="btn btn-primary w-full">Full Details</button>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div >
    );
};

export default Specials;