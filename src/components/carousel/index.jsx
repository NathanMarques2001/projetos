import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Carousel({ images }) {
  const windowWidth = window.innerWidth < 1024 ? false : true;

  const settings = {
    dots: windowWidth,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '95%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
