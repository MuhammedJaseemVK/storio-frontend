import React from "react";
import Slider from "react-slick";
import Page1 from "../pages/page1.js"
import Page2 from "../pages/page2.js"
import Page3 from "../pages/page3.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full h-screen">
      <Slider {...settings}>
        <Page1 />
        <Page2 />
        <Page3 />
      </Slider>
    </div>
  );
};

export default CarouselComponent;
