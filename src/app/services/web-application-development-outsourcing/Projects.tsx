"use client";
import React, { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

function Projects() {
  const prevButtonClassName = "swiper-button-prev";
  const nextButtonClassName = "swiper-button-next";

  //Click button Prev,Next
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  function handleClick2() {
    setClicked2(true);
  }

  function handleOutsideClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains("my-button")) {
      return;
    }
    setClicked(false);
  }
  function handleOutsideClick2(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains("my-button2")) {
      return;
    }
    setClicked2(false);
  }

  // Thêm class "bg-opacity-100" nếu đã được click, ngược lại thêm class "bg-opacity-50"
  const buttonClass = `my-button ${
    clicked ? "bg-opacity-100" : "bg-opacity-50"
  }`;

  const buttonClass2 = `my-button2 ${
    clicked2 ? "bg-opacity-100" : "bg-opacity-50"
  }`;

  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick2);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick2);
    };
  }, []);
  //

  return (
    <section className="bg-[#f8f9fb] sm:py-[48px] md:py-[96px] text-black">
      <div
        className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
            max-w-maxContainer 
          mx-auto"
      >
        <h3
          className="xl:text-[48px] font-bold mb-[64px] leading-[1.2]
        sm:text-[7vw]
        md:text-[5.2vw]
        lg:text-[4vw]"
        >
          Projects we’ve involved
        </h3>
        <div className="mx-[-24px]">
          <Swiper
            modules={[Navigation]}
            navigation={{
              enabled: true,
              prevEl: `.${prevButtonClassName}`,
              nextEl: `.${nextButtonClassName}`,
            }}
            loop={true}
            breakpoints={{
              // when window width is >= 0px
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // when window width is >= 1280px
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide className="group">
              <div
                className="flex-Projects 
                        bg-transparent
                         duration-75 pb-[64px] 
                         max-w-Projects
                      rounded-[16px] 
                      relative 
                      z-10
                      m-[24px] 
                      
                      text-[#222428]
                      after:transition-all
                      after:duration-[0.5s]
                      after:absolute
                      after:top-[-24px]
                      after:bottom-[-24px]
                      after:right-[-24px]
                      after:left-[-24px]
                      after:z-[-10]
                      group-hover:after:rounded-[10px]
                      group-hover:after:shadow-sm
                      group-hover:after:bg-white
                      "
              >
                <div>
                  <a
                    href=""
                    className="
                           mx-[-16px] relative sm:h-0 pb-[59.9%] overflow-hidden block mb-[16px]"
                  >
                    <Image
                      width={958}
                      height={623}
                      alt="Works Photo"
                      src={"/images/layout/works-1.jpg"}
                      className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                    />
                  </a>
                  <div className="md:mb-4 sm:mb-[16]">
                    <a
                      href=""
                      className="md:font-bold text-[20px] sm:font-[500]
                          group-hover:text-sky-500
                          "
                    >
                      Marketing Automation Platform
                    </a>
                  </div>
                  <div className="font-ThinCus sm:text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[0.9vw]">
                    <strong>Technologies:</strong> ASP .Net Core, Angular,
                    DevExtreme, RESTful API, Cloud MongoDB, AWS cloud
                  </div>
                  <div className="bottom-[16px] left-0 absolute">
                    <a className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="group">
              <div
                className="flex-Projects 
                        bg-transparent
                         duration-75 pb-[64px] 
                         max-w-Projects
                      rounded-[16px] 
                      relative 
                      z-10
                      m-[24px] 
                      
                      text-[#222428]
                      after:transition-all
                      after:duration-[0.5s]
                      after:absolute
                      after:top-[-24px]
                      after:bottom-[-24px]
                      after:right-[-24px]
                      after:left-[-24px]
                      after:z-[-10]
                      group-hover:after:rounded-[10px]
                      group-hover:after:shadow-sm
                      group-hover:after:bg-white
                      "
              >
                <div>
                  <a
                    href=""
                    className="
                           mx-[-16px] relative sm:h-0 pb-[59.9%] overflow-hidden block mb-[16px]"
                  >
                    <Image
                      width={958}
                      height={623}
                      alt="Works Photo"
                      src={"/images/layout/works-1.jpg"}
                      className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                    />
                  </a>
                  <div className="md:mb-4 sm:mb-[16]">
                    <a
                      href=""
                      className="md:font-bold text-[20px] sm:font-[500]
                          group-hover:text-sky-500
                          "
                    >
                      Marketing Automation Platform
                    </a>
                  </div>
                  <div className="font-ThinCus sm:text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[0.9vw]">
                    <strong>Technologies:</strong> ASP .Net Core, Angular,
                    DevExtreme, RESTful API, Cloud MongoDB, AWS cloud
                  </div>
                  <div className="bottom-[16px] left-0 absolute">
                    <a className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="group">
              <div
                className="flex-Projects 
                        bg-transparent
                         duration-75 pb-[64px] 
                         max-w-Projects
                      rounded-[16px] 
                      relative 
                      z-10
                      m-[24px] 
                      
                      text-[#222428]
                      after:transition-all
                      after:duration-[0.5s]
                      after:absolute
                      after:top-[-24px]
                      after:bottom-[-24px]
                      after:right-[-24px]
                      after:left-[-24px]
                      after:z-[-10]
                      group-hover:after:rounded-[10px]
                      group-hover:after:shadow-sm
                      group-hover:after:bg-white
                      "
              >
                <div>
                  <a
                    href=""
                    className="
                           mx-[-16px] relative sm:h-0 pb-[59.9%] overflow-hidden block mb-[16px]"
                  >
                    <Image
                      width={958}
                      height={623}
                      alt="Works Photo"
                      src={"/images/layout/works-1.jpg"}
                      className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                    />
                  </a>
                  <div className="md:mb-4 sm:mb-[16]">
                    <a
                      href=""
                      className="md:font-bold text-[20px] sm:font-[500]
                          group-hover:text-sky-500
                          "
                    >
                      Marketing Automation Platform
                    </a>
                  </div>
                  <div className="font-ThinCus sm:text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[0.9vw]">
                    <strong>Technologies:</strong> ASP .Net Core, Angular,
                    DevExtreme, RESTful API, Cloud MongoDB, AWS cloud
                  </div>
                  <div className="bottom-[16px] left-0 absolute">
                    <a className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="group">
              <div
                className="flex-Projects 
                        bg-transparent
                         duration-75 pb-[64px] 
                         max-w-Projects
                      rounded-[16px] 
                      relative 
                      z-10
                      m-[24px] 
                      
                      text-[#222428]
                      after:transition-all
                      after:duration-[0.5s]
                      after:absolute
                      after:top-[-24px]
                      after:bottom-[-24px]
                      after:right-[-24px]
                      after:left-[-24px]
                      after:z-[-10]
                      group-hover:after:rounded-[10px]
                      group-hover:after:shadow-sm
                      group-hover:after:bg-white
                      "
              >
                <div>
                  <a
                    href=""
                    className="
                           mx-[-16px] relative sm:h-0 pb-[59.9%] overflow-hidden block mb-[16px]"
                  >
                    <Image
                      width={958}
                      height={623}
                      alt="Works Photo"
                      src={"/images/layout/works-1.jpg"}
                      className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                    />
                  </a>
                  <div className="md:mb-4 sm:mb-[16]">
                    <a
                      href=""
                      className="md:font-bold text-[20px] sm:font-[500]
                          group-hover:text-sky-500
                          "
                    >
                      Marketing Automation Platform
                    </a>
                  </div>
                  <div className="font-ThinCus sm:text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[0.9vw]">
                    <strong>Technologies:</strong> ASP .Net Core, Angular,
                    DevExtreme, RESTful API, Cloud MongoDB, AWS cloud
                  </div>
                  <div className="bottom-[16px] left-0 absolute">
                    <a className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="group">
              <div
                className="flex-Projects 
                        bg-transparent
                         duration-75 pb-[64px] 
                         max-w-Projects
                      rounded-[16px] 
                      relative 
                      z-10
                      m-[24px] 
                      
                      text-[#222428]
                      after:transition-all
                      after:duration-[0.5s]
                      after:absolute
                      after:top-[-24px]
                      after:bottom-[-24px]
                      after:right-[-24px]
                      after:left-[-24px]
                      after:z-[-10]
                      group-hover:after:rounded-[10px]
                      group-hover:after:shadow-sm
                      group-hover:after:bg-white
                      "
              >
                <div>
                  <a
                    href=""
                    className="
                           mx-[-16px] relative sm:h-0 pb-[59.9%] overflow-hidden block mb-[16px]"
                  >
                    <Image
                      width={958}
                      height={623}
                      alt="Works Photo"
                      src={"/images/layout/works-1.jpg"}
                      className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                    />
                  </a>
                  <div className="md:mb-4 sm:mb-[16]">
                    <a
                      href=""
                      className="md:font-bold text-[20px] sm:font-[500]
                          group-hover:text-sky-500
                          "
                    >
                      Marketing Automation Platform
                    </a>
                  </div>
                  <div className="font-ThinCus sm:text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[0.9vw]">
                    <strong>Technologies:</strong> ASP .Net Core, Angular,
                    DevExtreme, RESTful API, Cloud MongoDB, AWS cloud
                  </div>
                  <div className="bottom-[16px] left-0 absolute">
                    <a className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="group">
              <div
                className="flex-Projects 
                        bg-transparent
                         duration-75 pb-[64px] 
                         max-w-Projects
                      rounded-[16px] 
                      relative 
                      z-10
                      m-[24px] 
                      
                      text-[#222428]
                      after:transition-all
                      after:duration-[0.5s]
                      after:absolute
                      after:top-[-24px]
                      after:bottom-[-24px]
                      after:right-[-24px]
                      after:left-[-24px]
                      after:z-[-10]
                      group-hover:after:rounded-[10px]
                      group-hover:after:shadow-sm
                      group-hover:after:bg-white
                      "
              >
                <div>
                  <a
                    href=""
                    className="
                           mx-[-16px] relative sm:h-0 pb-[59.9%] overflow-hidden block mb-[16px]"
                  >
                    <Image
                      width={958}
                      height={623}
                      alt="Works Photo"
                      src={"/images/layout/works-1.jpg"}
                      className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                    />
                  </a>
                  <div className="md:mb-4 sm:mb-[16]">
                    <a
                      href=""
                      className="md:font-bold text-[20px] sm:font-[500]
                          group-hover:text-sky-500
                          "
                    >
                      Marketing Automation Platform
                    </a>
                  </div>
                  <div className="font-ThinCus sm:text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[0.9vw]">
                    <strong>Technologies:</strong> ASP .Net Core, Angular,
                    DevExtreme, RESTful API, Cloud MongoDB, AWS cloud
                  </div>
                  <div className="bottom-[16px] left-0 absolute">
                    <a className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="group">
              <div
                className="flex-Projects 
                        bg-transparent
                         duration-75 pb-[64px] 
                         max-w-Projects
                      rounded-[16px] 
                      relative 
                      z-10
                      m-[24px] 
                      
                      text-[#222428]
                      after:transition-all
                      after:duration-[0.5s]
                      after:absolute
                      after:top-[-24px]
                      after:bottom-[-24px]
                      after:right-[-24px]
                      after:left-[-24px]
                      after:z-[-10]
                      group-hover:after:rounded-[10px]
                      group-hover:after:shadow-sm
                      group-hover:after:bg-white
                      "
              >
                <div>
                  <a
                    href=""
                    className="
                           mx-[-16px] relative sm:h-0 pb-[59.9%] overflow-hidden block mb-[16px]"
                  >
                    <Image
                      width={958}
                      height={623}
                      alt="Works Photo"
                      src={"/images/layout/works-1.jpg"}
                      className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                    />
                  </a>
                  <div className="md:mb-4 sm:mb-[16]">
                    <a
                      href=""
                      className="md:font-bold text-[20px] sm:font-[500]
                          group-hover:text-sky-500
                          "
                    >
                      Marketing Automation Platform
                    </a>
                  </div>
                  <div className="font-ThinCus sm:text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[0.9vw]">
                    <strong>Technologies:</strong> ASP .Net Core, Angular,
                    DevExtreme, RESTful API, Cloud MongoDB, AWS cloud
                  </div>
                  <div className="bottom-[16px] left-0 absolute">
                    <a className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="group">
              <div
                className="flex-Projects 
                        bg-transparent
                         duration-75 pb-[64px] 
                         max-w-Projects
                      rounded-[16px] 
                      relative 
                      z-10
                      m-[24px] 
                      
                      text-[#222428]
                      after:transition-all
                      after:duration-[0.5s]
                      after:absolute
                      after:top-[-24px]
                      after:bottom-[-24px]
                      after:right-[-24px]
                      after:left-[-24px]
                      after:z-[-10]
                      group-hover:after:rounded-[10px]
                      group-hover:after:shadow-sm
                      group-hover:after:bg-white
                      "
              >
                <div>
                  <a
                    href=""
                    className="
                           mx-[-16px] relative sm:h-0 pb-[59.9%] overflow-hidden block mb-[16px]"
                  >
                    <Image
                      width={958}
                      height={623}
                      alt="Works Photo"
                      src={"/images/layout/works-1.jpg"}
                      className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                    />
                  </a>
                  <div className="md:mb-4 sm:mb-[16]">
                    <a
                      href=""
                      className="md:font-bold text-[20px] sm:font-[500]
                          group-hover:text-sky-500
                          "
                    >
                      Marketing Automation Platform
                    </a>
                  </div>
                  <div className="font-ThinCus sm:text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[0.9vw]">
                    <strong>Technologies:</strong> ASP .Net Core, Angular,
                    DevExtreme, RESTful API, Cloud MongoDB, AWS cloud
                  </div>
                  <div className="bottom-[16px] left-0 absolute">
                    <a className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div>
              <button
                onClick={handleClick}
                type="button"
                className={`
                ${buttonClass}
                ${prevButtonClassName}
                
                z-[50]
                left-[24px] mt-[-120px] bg-white 
                 rounded-Projects absolute top-[50%]
                w-[60px] h-[60px] mr-0 inline-block min-w-[32px] text-center text-white
                border-0 p-0
                `}
              >
                <svg
                  width="23"
                  height="44"
                  viewBox="0 0 23 44"
                  fill="none"
                  className="inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleClick}
                >
                  {" "}
                  <path
                    d="M21 42L3.82843 24.8284C2.26633 23.2663 2.26633 20.7337 3.82843 19.1716L21 2"
                    stroke="#0C152A"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </svg>
              </button>
              <button
                onClick={handleClick2}
                type="button"
                className={`
                ${buttonClass2}
                ${nextButtonClassName}
                
                z-[50] m-0
                mt-[-120px] bg-white 
                right-[24px] rounded-Projects absolute top-[50%]
                w-[60px] h-[60px] mr-0 inline-block min-w-[32px] text-center text-white
                border-0 p-0
                `}
              >
                <svg
                  width="23"
                  height="44"
                  viewBox="0 0 23 44"
                  fill="none"
                  className="inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleClick}
                >
                  {" "}
                  <path
                    d="M2 2L19.1716 19.1716C20.7337 20.7337 20.7337 23.2663 19.1716 24.8284L2 42"
                    stroke="#0C152A"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Projects;
