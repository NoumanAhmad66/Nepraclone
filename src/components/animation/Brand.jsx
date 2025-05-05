import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logo1 from '../../assets/brand/for.png';
import logo2 from '../../assets/brand/ksp.png';
import logo3 from '../../assets/brand/micro.png';
import logo4 from '../../assets/brand/teng.png';
import logo5 from '../../assets/brand/trend.png';
import './Brand.css';

const BrandLogos = () => {
  const logos = [
    { src: logo1, url: "https://www.example1.com" },
    { src: logo2, url: "https://www.example2.com" },
    { src: logo3, url: "https://www.example3.com" },
    { src: logo4, url: "https://www.example4.com" },
    { src: logo5, url: "https://www.example5.com" },
  ];

  const settings = {
    dots: false, // Hide dots
    infinite: true, // Enable infinite looping
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed
    slidesToShow: 5, // Number of visible items
    slidesToScroll: 1, // Number of items to scroll at once
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480, // Adjust for mobile screens
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="container-fluid px-0 main">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="logo-link"
          >
            <img src={logo.src} alt={`Logo ${index + 1}`} className="logo" />
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default BrandLogos;
