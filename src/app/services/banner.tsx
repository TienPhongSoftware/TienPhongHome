"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

function Banner() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [isScrollCus, setIsScrollCus] = useState(false);

  const handleScroll = () => {
    const offsetHeight = document.documentElement.offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = scrollTop / (offsetHeight - window.innerHeight);

    setIsScrollCus(scrollPercent >= 0.3);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageLoaded]);

  return (
    <div>
      <div
        className={`visible z-[-10000]  top-0 left-0
      overflow-hidden transform translate-x-0 
      translate-y-0 translate-z-0 h-full lg:w-full 
      sm:w-full md:w-[820px] bg-center bg-cover
      ${isScrollCus ? "" : "fixed"}
      `}
      >
        <Image
          src="/images/layout/banner-video-Tien-Phong-software.jpg"
          className="
          absolute sm:h-[560px] lg:h-[638px] sm:w-[1702px] lg:w-[1916px] max-w-none sm:object-cover xl:object-cover
          align-middle border-none
          "
          alt="Banner"
          width={2000}
          height={2000}
        />
      </div>
      <div
        className="pt-[80px] text-left justify-start h-[560px]
      relative z-10 flex items-center after:bg-filterBannerPages
      after:z-[-10] after:absolute after:object-cover after:h-full
      after:w-full after:left-0 after:top-0 after:text-left"
      >
        <div
          className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
        w-full mx-auto max-w-maxContainer
        "
        >
          <h1
            className="text-white font-bold mb-[0.5rem]
            lg:text-[4.7vw] sm:text-[10vw] md:text-[6vw]
          leading-[1.2]"
            data-aos="fade-up"
          >
            A reliable one-stop source for <br /> your software development
          </h1>
          <div
            className="lg:text-[1.7vw] sm:text-[5vw] 
          md:text-[3vw] text-white font-ThinCus mb-[44px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>Act with speed and agility</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
