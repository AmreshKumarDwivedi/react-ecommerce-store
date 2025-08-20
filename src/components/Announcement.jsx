import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Announcement() {

const announcement = [
 "🚚 Free Shipping on Orders Over ₹999",
    "💳 Secure Payment Gateway",
    "🎉 New Arrivals Every Week!"

]
  const settings = {
    dots: false,          
    infinite: true,       
    speed: 500,           
    slidesToShow: 1,      
    slidesToScroll: 1,
    autoplay: true,  
    draggable:true,     
    autoplaySpeed: 3000,  
    arrows: true          
  };




  return (
    <div className="bg-yellow-100 text-gray-800 py-2 px-4 text-sm font-medium w-screen">
      <Slider {...settings}>
         {announcement.map((text, index) => (
          <div key={index} className="text-center">
            {text}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Announcement
