import React from 'react';
import "./slider.css"

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import image from "../component/logo/bodyspray.jpg";
import image1 from "../component/logo/iphone.jpg";
import image2 from "../component/logo/watch.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Sliderimg = () => {


    // const settings = {
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // };



    return (
        <>
            <div className='sliderimg1'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={image} className='image' /></SwiperSlide>
                    <SwiperSlide><img src={image1} className='image' /></SwiperSlide>
                    <SwiperSlide><img src={image2} className='image' /></SwiperSlide>
                   
                </Swiper>
            </div>






            {/* <div className='sliderimg1'>
                <Slider {...settings}>
                    <div>
                        <img src={image1} className='image' />
                    </div>
                    <div>
                        <img src={image2} className='image' />
                    </div>
                    <div>
                        <img src={image} className='image' />
                    </div>
                </Slider>
            </div> */}



            {/* <div className='sliderimg1'>
                <img src={image1} className='image' />
            </div> */}

        </>
    );
}
export default Sliderimg
