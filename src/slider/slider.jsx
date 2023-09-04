import React from 'react';
import "./slider.css"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image from "../component/logo/bodyspray.jpg";
import image1 from "../component/logo/iphone.jpg";
import image2 from "../component/logo/watch.jpg";







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
            <div className='sliderimg1'>
                <img src={image1} className='image' />
            </div>

        </>
    );
}
export default Sliderimg
