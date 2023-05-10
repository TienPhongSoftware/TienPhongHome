"use client";
import React from "react";
import Image from "next/image";
import FooterContent from "./FooterContent";

function Footer() {
  return (
    <footer>
      <div className="relative">
        <div
          className="mx-auto xl:px-[120px] sm:px-[24px] 
        lg:px-[64px] max-w-maxContainer box-border
        after:h-[50%] after:absolute after:z-[-10] after:w-full
        after:bg-[#0c152a] after:left-0 after:bottom-0"
        >
          <div
            className="text-white rounded-FooterBigRa
            bg-FooterBigTop shadow-lg flex flex-wrap"
            data-aos="fade-up"
          >
            <div
              className="relative lg:m-footerTop lg:pr-[16%]
            basis-[0%] grow max-w-full lg:text-left
            sm:mx-[16px] sm:pr-0 md:pr-[16%] sm:text-center
            sm:m-footerTopSM
            "
            >
              <div
                className="lg:text-[40px] font-bold mb-4 
                lg:leading-[48px] sm:leading-[1.5]
                lg:text-[] sm:text-[4.3vw]"
              >
                Uncover your dependable offshore ally{" "}
              </div>
              <div className="text-[18px] font-ThinCus">
                <p>
                  Experience a personalized consultation tailored to your unique
                  needs and interests.
                </p>
              </div>
              <a
                href="contact-us"
                className="md:absolute md:mt-[-24px] sm:right-0 
                lg:mt-[-24px]
                leading-[52px]
              md:top-[30%] bg-[#faa61a] border-[#faa61a]
              max-w-[244px] min-w-[184px] whitespace-nowrap
              inline-block px-[40px] text-center text-[16px]
              text-white border-2 rounded-[32px] z-10
              font-bold overflow-hidden transition-all
              outline-0
              before:z-[-1]
                     before:content['']
                     before:absolute
                     before:w-full
                     before:h-full
                     before:bg-white
                     before:left-[-100%]
                     before:top-0
                     before:transition-all
                     hover:before:left-0
                     hover:text-black before:duration-[0.5s]
                     sm:relative
                     sm:mt-[32px]
                     sm:top-auto"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <FooterContent />
    </footer>
  );
}

export default Footer;
