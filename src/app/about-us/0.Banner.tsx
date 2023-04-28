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
      translate-y-0 translate-z-0 h-[560px] lg:w-[1483px] xl:w-full
      sm:w-[414px] md:w-[820px] bg-center bg-repeat object-center
      ${isScrollCus ? "" : "fixed"}
      `}
      >
        <Image
          src="/images/layout/banner-1.jpg"
          className=" bg-center object-center sm:h-[560px] lg:h-[638px] sm:w-[1702px] lg:w-[1916px] 
          absolute max-w-none sm:object-contain xl:object-cover
          align-middle border-none
          "
          alt="Banner"
          width={1702}
          height={560}
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
            lg:text-[4vw] sm:text-[10vw] md:text-[6vw]
          leading-[1.2]"
            data-aos="fade-up"
          >
            Your Tech Partner <br /> on Demand.
          </h1>
          <div
            className="lg:text-[1.7vw] xl:text-[1.2vw] sm:text-[5vw] 
          md:text-[3vw] text-white font-ThinCus mb-[44px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>Lean but veteran</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
