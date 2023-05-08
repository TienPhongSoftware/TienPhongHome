"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
function OneTeam() {
  const [isScrolledToDiv, setIsScrolledToDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const div = document.getElementById("Member");
      if (div) {
        const { top } = div.getBoundingClientRect();
        if (top <= window.innerHeight * 0.5 && top >= 0) {
          setIsScrolledToDiv(true);
        } else {
          setIsScrolledToDiv(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="py-[96px] text-center">
      <div
        className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
mx-auto lg:max-w-maxPartner sm:max-w-maxPartnerSM"
      >
        <h2
          className="mb-[56px] font-bold text-black
  lg:text-[4.1vw] xl:text-[3vw] sm:text-[9vw] md:text-[6vw]"
        >
          One Team. One Dream.
        </h2>
        <div
          className="
                lg:text-[1.5vw] xl:text-[1vw] sm:text-[3.5vw] 
                md:text-[2.5vw] font-LightCus text-black
                "
        >
          We are engineers coming from different experiences and backgrounds –
          but have the same passion for leveraging cutting-edge technologies to
          construct world-class digital products. On the way to contributing to
          the customer’s success, we become mature in our career and find a
          purposeful and meaningful life.
        </div>
      </div>
      <div
        className="sm:max-w-full lg:max-w-none
      sm:overflow-x-auto lg:overflow-visible
      "
        id="Member"
      >
        <div
          className="scale-[0.800781] mt-[56px] h-[650px]
            z-10 relative sm:min-w-[1024px] lg:min-w-0
            after:bg-white 
            after:bg-[url(/images/logo/logo-icon.svg)]
            after:bg-sauMuoi after:shadow-lg after:w-[368px]
            after:h-[368px] after:absolute after:z-[-10]
            after:rounded-[50%] after:top-[50%] after:left-[50%]
            after:-translate-x-[50%] after:-translate-y-[50%]
            after:bg-no-repeat after:bg-center
            "
        >
          <div
            className="absolute top-[50%] left-[50%]
              sm:scale-[.8] lg:scale-125
              "
          >
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[-87.5px] top-[-7px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-1.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="Member"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-2.5px] top-[-104px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-2.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="Member"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[104.5px] top-[-54px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-3.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="Member"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${isScrolledToDiv ? "left-[98px] top-[61px]" : "top-0 left-0"}`}
            >
              <Image
                src="/images/members/mem-4.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="Member"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-110.972px] top-[-138px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-6.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[-195px] top-[-21px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-7.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-187.5px] top-[97px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-8.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-203.986px] top-[213px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-9.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[54px] h-[54px] mt-[-27px] ml-[-27px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md bg-[#faa61a]
                ${
                  isScrolledToDiv ? "left-[-167px] top-[294px]" : "top-0 left-0"
                }`}
            ></span>
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-79.9999px] top-[285px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-10.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[29.5px] top-[276px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-11.jpeg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[89px] top-[189px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-12.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[209px] top-[152px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-13.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[212px] top-[49px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-14.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[211px] top-[-54px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-15.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[204px] top-[-156px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-16.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[97.5px] top-[-160px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-17.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[54px] h-[54px] mt-[-27px] ml-[-27px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md bg-[#00aeef]
                ${
                  isScrolledToDiv
                    ? "left-[3.00002px] top-[-198px]"
                    : "top-0 left-0"
                }`}
            ></span>
            <span
              className={` Members
                  rounded-imageMemTL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[-21px] top-[-274px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-18.png"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[78px] top-[-280px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-19.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[188.5px] top-[-273px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-20.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[287px] top-[-270px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-21.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[302px] top-[-171px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-22.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[310px] top-[-62px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-23.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[317px] top-[84px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-24.png"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[336px] top-[196px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-25.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[336px] top-[295px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-26.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[245px] top-[263px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-27.png"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[142.5px] top-[306px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-28.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md bg-[#00aeef]
                ${
                  isScrolledToDiv ? "left-[221px] top-[365px]" : "top-0 left-0"
                }`}
            ></span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[448px] top-[268px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-29.jpeg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[451px] top-[159px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-30.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[424.014px] top-[49px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-31.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[412px] top-[-69px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-32.jpeg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[407px] top-[-177px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-33.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[393px] top-[-280px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-34.png"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[500px] top-[-278px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-35.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[510px] top-[-168px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-36.png"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[523px] top-[-59px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-37.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[529px] top-[66px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-38.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md bg-[#faa61a]
                ${
                  isScrolledToDiv ? "left-[552px] top-[182px]" : "top-0 left-0"
                }`}
            ></span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[118px] h-[118px] mt-[-59px] ml-[-59px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-133.5px] top-[-264px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-39.png"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-246.458px] top-[-284px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-40.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-223.472px] top-[-154px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-41.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-339.972px] top-[-162px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-42.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-351.486px] top-[-280px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-43.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-442.972px] top-[-157px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-44.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-457.986px] top-[-281px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-45.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[118px] h-[118px] mt-[-59px] ml-[-59px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md bg-[#ed145b]
                ${
                  isScrolledToDiv ? "left-[-524px] top-[-48px]" : "top-0 left-0"
                }`}
            ></span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-402.5px] top-[-56px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-46.jpeg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-298.972px] top-[-56px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-47.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[-287px] top-[46px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-48.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[-399px] top-[59px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-49.png"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[-508px] top-[74px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-50.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[-518px] top-[205px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-51.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[-486px] top-[319px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-52.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[-417px] top-[159px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-53.jpeg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv ? "left-[-397px] top-[267px]" : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-54.jpg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemDR delay-100 duration-500
                  transition-all transform ease-in-out
                w-[92px] h-[92px] mt-[-46px] ml-[-46px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-314.5px] top-[151px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-55.jpeg"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
            <span
              className={` Members
                  rounded-imageMemTL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[118px] h-[118px] mt-[-59px] ml-[-59px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md bg-[#ed145b]
                ${
                  isScrolledToDiv
                    ? "left-[-273.958px] top-[323px]"
                    : "top-0 left-0"
                }`}
            ></span>
            <span
              className={` Members
                  rounded-imageMemDL delay-100 duration-500
                  transition-all transform ease-in-out
                w-[174px] h-[174px] mt-[-87px] ml-[-87px] absolute
                text-center leading-[174px] select-none overflow-hidden
                shadow-md
                ${
                  isScrolledToDiv
                    ? "left-[-50.5px] top-[145px]"
                    : "top-0 left-0"
                }`}
            >
              <Image
                src="/images/members/mem-5.png"
                className="object-cover absolute h-full
                    w-full left-0 top-0 max-w-full"
                alt="CEO"
                width={150}
                height={150}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default dynamic(() => Promise.resolve(OneTeam), {
  ssr: false,
});
