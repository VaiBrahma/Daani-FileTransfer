import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BlurredCarousel.css'; // Create this CSS file for styling

const BlurredCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // 1 second for smooth sliding
    autoplay: true,
    autoplaySpeed: 1000, // 1 second for automatic sliding
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="blurred-carousel-container">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="carousel-slide">
          <h1>Page 1</h1>
        </div>

        {/* Slide 2 */}
        <div className="carousel-slide">
          <h1>Page 2</h1>
        </div>

        {/* Slide 3 */}
        <div className="carousel-slide">
          <h1>Page 3</h1>
        </div>
      </Slider>
    </div>
  );
};

export default BlurredCarousel;
