import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../assets/bnner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.webp";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 10
        }}
      >
        <ul className="flex space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full border border-black bg-transparent" />
    )
  };

  return (
    <div className="relative w-screen">
      <Slider
        {...settings}
      >
        <img src={banner1} alt="Banner 1" className="w-full" />
        <img src={banner2} alt="Banner 2" className="w-full" />
        <img src={banner3} alt="Banner 3" className="w-full" />
      </Slider>

      {/* Active dot style override */}
      <style>
        {`
          .slick-dots li.slick-active div {
            background-color: black !important;
            border-color: black !important;
          }
        `}
      </style>
    </div>
  );
}

export default Banner;
