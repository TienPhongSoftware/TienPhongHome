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
    <div className="overflow-hidden">
      <div
        className={`visible z-[-10000]  top-0 left-0
      overflow-hidden transform translate-x-0 
      translate-y-0 translate-z-0 h-full lg:w-full 
      sm:w-full md:w-[820px] bg-center bg-cover
      ${isScrollCus ? "" : "fixed"}
      `}
      >
        <Image
          src="/images/layout/banner-3.jpg"
          className="
          absolute sm:h-[560px] lg:h-[638px] sm:w-[1351px] lg:w-[1916px] max-w-none sm:object-contain xl:object-cover
          align-middle border-none bg-center bg-cover sm:translate-x-[-480px] xl:translate-x-0
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
            lg:text-[56px] sm:text-[10vw] md:text-[6vw]
          leading-[1.2]"
            data-aos="fade-up"
          >
            Software Customization & <br /> Enhancement
          </h1>
          <div
            className="lg:text-[1.2vw] sm:text-[5vw] 
          md:text-[3vw] text-white font-ThinCus mb-[44px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>Make your existing software better</p>
          </div>
          <a
            data-aos="fade-up"
            data-aos-delay="200"
            href=""
            className="mr-6 bg-[#00aeef] border-[#00aeef] 
                  lg:px-[40px] lg:leading-[52px]
      lg:min-w-[184px] lg:text-[16px] max-w-[244px] whitespace-nowrap
      inline-block text-center text-white border-2 rounded-[32px] relative
      z-10 font-bold overflow-hidden transition-all outline-0 isolate
      before:z-[-1]
      before:content['']
      before:absolute
      before:w-full
      before:h-full
      before:bg-white
      before:left-[-100%]
      before:top-0
      before:transition-all
      before:duration-[0.5s]
      hover:before:left-0
      hover:duration-500
      hover:text-black
      sm:min-w-[34vw]
      sm:text-[3.8vw]
      sm:leading-[10vw]
      sm:px-[5vw]
      md:min-w-[10vw]
      md:text-[2.8vw]
      md:leading-[8vw]
      md:px-[5vw]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
