import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BlurredCarousel.css'; // Create this CSS file for styling

const AutoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // 1 second for smooth sliding
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds for automatic sliding
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="auto-carousel-container">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="carousel-slide">
          <div className="card">
            <h2>Step 1</h2>
            <p>Click on Send Button</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-slide">
        <div className="card">
            <h2>Step 2</h2>
            <p>Choose Files to Share them</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-slide">
        <div className="card">
            <h2>Step 3</h2>
            <p>Click on Upload Button</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AutoCarousel;
