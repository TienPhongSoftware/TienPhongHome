"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const SlideShow: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "5px",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="m-[5px] h-[280px] w-[280px] p-0 relative">
          <Image
            width={280}
            height={280}
            alt="Life@enlab"
            src={"/images/layout/careers-15.jpg"}
            className="object-cover h-full w-full block absolute top-0 left-0 max-w-full align-middle"
          />
        </div>
        <div className="m-[5px] h-[280px] w-[280px] p-0 relative">
          <Image
            width={280}
            height={280}
            alt="Life@enlab"
            src={"/images/layout/careers-16.jpg"}
            className="object-cover h-full w-full block absolute top-0 left-0 max-w-full align-middle"
          />
        </div>
        <div className="m-[5px] h-[280px] w-[280px] p-0 relative">
          <Image
            width={280}
            height={280}
            alt="Life@enlab"
            src={"/images/layout/careers-17.jpg"}
            className="object-cover h-full w-full block absolute top-0 left-0 max-w-full align-middle"
          />
        </div>
        <div className="m-[5px] h-[280px] w-[280px] p-0 relative">
          <Image
            width={280}
            height={280}
            alt="Life@enlab"
            src={"/images/layout/careers-18.jpg"}
            className="object-cover h-full w-full block absolute top-0 left-0 max-w-full align-middle"
          />
        </div>
        <div className="m-[5px] h-[280px] w-[280px] p-0 relative">
          <Image
            width={280}
            height={280}
            alt="Life@enlab"
            src={"/images/layout/careers-19.jpg"}
            className="object-cover h-full w-full block absolute top-0 left-0 max-w-full align-middle"
          />
        </div>
        <div className="m-[5px] h-[280px] w-[280px] p-0 relative">
          <Image
            width={280}
            height={280}
            alt="Life@enlab"
            src={"/images/layout/careers-20.jpg"}
            className="object-cover h-full w-full block absolute top-0 left-0 max-w-full align-middle"
          />
        </div>
        <div className="m-[5px] h-[280px] w-[280px] p-0 relative">
          <Image
            width={280}
            height={280}
            alt="Life@enlab"
            src={"/images/layout/careers-15.jpg"}
            className="object-cover h-full w-full block absolute top-0 left-0 max-w-full align-middle"
          />
        </div>
        <div className="m-[5px] h-[280px] w-[280px] p-0 relative">
          <Image
            width={280}
            height={280}
            alt="Life@enlab"
            src={"/images/layout/careers-21.jpg"}
            className="object-cover h-full w-full block absolute top-0 left-0 max-w-full align-middle"
          />
        </div>
        <div className="m-[5px] h-[280px] w-[280px] p-0 relative">
          <Image
            width={280}
            height={280}
            alt="Life@enlab"
            src={"/images/layout/careers-22.jpg"}
            className="object-cover h-full w-full block absolute top-0 left-0 max-w-full align-middle"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SlideShow;
