"use client";
import React from "react";
import Image from "next/image";

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
                Your reliable offshore partner is{" "}
                <br className="sm:hidden lg:block" /> closer than you think!
              </div>
              <div className="text-[18px] font-ThinCus">
                <p>Get a tailored consultation based on your interests.</p>
              </div>
              <a
                href=""
                className="md:absolute md:mt-[-24] sm:right-0 
                lg:mt-0
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
      <div
        className="bg-[#0c152a] text-white pt-[64px]
      pb-FooterBot"
      >
        <div
          className="mx-auto xl:px-[120px] sm:px-[24px] 
        lg:px-[64px] max-w-maxContainer box-border"
        >
          <div
            className="flex-nowrap flex md:flex md:w-full
            sm:justify-normal text-white lg:justify-between
            sm:flex-col md:flex-row"
          >
            <div
              className="lg:flex-noneAuto w-auto lg:max-w-none
              md:flex-noneAuto md:w-auto
              sm:flex-WhySM
              sm:my-[24px]
              sm:max-w-full
                lg:pr-[50px] md:mb-[24px] sm:pr-[24px]"
            >
              <a href="" className="mb-[24px] inline-block">
                <Image
                  src="/images/logo/logo_footer.svg"
                  className="hover:scale-110 transition-all"
                  alt="My Icon"
                  width={89}
                  height={24}
                />
              </a>
              <p
                className="mb-[24px] max-w-[316px] text-[14px]
              font-ThinCus
              sm:text-[2vw] md:text-[14px]
              "
              >
                27 Che Viet Tan Street, Da Nang City, Viet Nam
              </p>
              <p
                className="mb-[24px] max-w-[316px] text-[14px]
              font-ThinCus
              sm:text-[2vw] md:text-[14px]
              "
              >
                Enlab Software Copyright © 2023.
              </p>
              <p
                className="mb-[24px] max-w-[316px] text-[14px]
              font-ThinCus
              sm:text-[2vw] md:text-[14px]
              "
              >
                <a href="" className="mr-[-3px]">
                  <Image
                    src="/images/logo/dcma.png"
                    className="hover:scale-110 transition-all
                    max-w-full"
                    alt="My Icon"
                    width={150}
                    height={200}
                  />
                </a>
              </p>
              <ul className="flex mb-[1rem] break-words">
                <li className="mr-[24px]">
                  <a href="" className="text-white">
                    <Image
                      src="/images/logo/facebook.svg"
                      className="max-w-full align-middle"
                      alt="My Icon"
                      width={14}
                      height={24}
                    />
                  </a>
                </li>
                <li className="mr-[24px]">
                  <a href="" className="text-white">
                    <Image
                      src="/images/logo/linkedin.svg"
                      className="max-w-full align-middle"
                      alt="My Icon"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li className="mr-[24px]">
                  <a href="" className="text-white">
                    <Image
                      src="/images/logo/twitter.svg"
                      className="max-w-full align-middle"
                      alt="My Icon"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li className="mr-[24px]">
                  <a href="" className="text-white">
                    <Image
                      src="/images/logo/instagram.svg"
                      className="max-w-full align-middle"
                      alt="My Icon"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li className="mr-[24px]">
                  <a href="" className="text-white">
                    <Image
                      src="/images/logo/youtube.svg"
                      className="max-w-full align-middle"
                      alt="My Icon"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              </ul>
              <p
                className="mb-[24px] max-w-[316px] lg:text-[14px]
              font-ThinCus flex flex-row flex-wrap
              justify-between"
              >
                <span
                  className="max-w-maxFooterLGs h-auto
                flex-flexFooter mb-[20px]"
                >
                  <Image
                    src="/images/logo/footer-1.png"
                    className="max-w-[80%] w-auto h-auto
                    align-middle max-h-full"
                    alt="My Icon"
                    width={150}
                    height={24}
                  />
                </span>
                <span
                  className="max-w-maxFooterLGs h-auto
                flex-flexFooter mb-[20px]"
                >
                  <Image
                    src="/images/logo/footer-2.png"
                    className="max-w-[80%] w-auto h-auto
                    align-middle max-h-full"
                    alt="My Icon"
                    width={150}
                    height={24}
                  />
                </span>
                <span
                  className="max-w-maxFooterLGs h-auto
                flex-flexFooter mb-[20px]"
                >
                  <Image
                    src="/images/logo/footer-3.jpg"
                    className="max-w-[80%] w-auto h-auto
                    align-middle max-h-full"
                    alt="My Icon"
                    width={150}
                    height={24}
                  />
                </span>
                <span
                  className="max-w-maxFooterLGs h-auto
                flex-flexFooter mb-[20px]"
                >
                  <Image
                    src="/images/logo/footer-4.svg"
                    className="max-w-[80%] w-auto h-auto
                    align-middle max-h-full"
                    alt="My Icon"
                    width={150}
                    height={24}
                  />
                </span>
              </p>
            </div>
            <div
              className="sm:flex sm:my-[24px] lg:my-0
            sm:flex-wrap
            sm:w-full
             lg:flex-noneAuto xl:w-auto max-w-none xl:flex-nowrap"
            >
              <div
                className="flex xl:flex-nowrap
                flex-wrap
                justify-between
                sm:flex-wrap
                sm:w-full xl:w-[unset]
                sm:justify-between lg:justify-[unset]"
              >
                <div
                  className="pr-[50px] xl:max-w-full lg:mt-0
                
                md:my-[24px] md:flex-none
                sm:flex-WhySM sm:max-w-full sm:my-[24px] 
                md:max-w-[50%] sm:pr-[24px]]"
                >
                  <span
                    className="font-bold mb-[20px] block
                    lg:text-[20px] 
                    md:text-[2vw]
                    sm:text-[4vw]"
                  >
                    Tech Development
                  </span>
                  <ul
                    className="md:max-w-[260px] flex
                  flex-col pl-0 mb-0"
                  >
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Web Application Development
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Flutter App Development
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Software Customization & Enhancement
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="pr-[50px] xl:max-w-full lg:mt-0
                md:my-[24px] md:flex-none
                sm:flex-partnerSM sm:max-w-full sm:my-[24px] 
                md:max-w-[50%] sm:pr-[24px]]"
                >
                  <span
                    className="font-bold mb-[20px] block
                    lg:text-[20px] 
                    md:text-[2vw]
                    sm:text-[4vw]"
                  >
                    Works
                  </span>
                  <ul
                    className="md:max-w-[260px] flex
                  flex-col pl-0 mb-0"
                  >
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Real Estate
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Construction
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Marketplace
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Data Management
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Procurement
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Recruitment
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        ERP
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="pr-[50px] xl:max-w-full lg:mt-0
                md:my-[24px] md:flex-none
                sm:flex-partnerSM sm:max-w-full sm:my-[24px] 
                md:max-w-[50%] sm:pr-[24px]]"
                >
                  <span
                    className="font-bold mb-[20px] block
                    lg:text-[20px] 
                    md:text-[2vw]
                    sm:text-[4vw]"
                  >
                    Technologies
                  </span>
                  <ul
                    className="md:max-w-[260px] flex
                  flex-col pl-0 mb-0"
                  >
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        .NET
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        C#
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Microservices
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Angular
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Python
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Node.js
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Vue.js
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="pr-[50px] xl:max-w-full lg:m-0 lg:p-0
                md:my-[24px] md:flex-none
                sm:flex-WhySM sm:max-w-full sm:my-[24px] 
                md:max-w-[50%] sm:pr-[24px]]"
                >
                  <span
                    className="font-bold mb-[20px] block
                    lg:text-[20px] 
                    md:text-[2vw]
                    sm:text-[4vw]"
                  >
                    Company
                  </span>
                  <ul
                    className="md:max-w-[260px] flex
                  flex-col pl-0 mb-0"
                  >
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Think with Enlab
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3vw]"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                  <a
                    href=""
                    className={`leading-[10px] 
                    mt-[20px]
                    pl-[10px] pr-[10px] min-w-[auto] table-cell
                     w-auto h-[30px] p-[0 10px] rounded-[25px] text-center
                     align-middle font-bold cursor-pointer bg-[#faa61a]
                     text-white border-transparent 
                     max-w-[244px] overflow-x-hidden
                     whitespace-nowrap border-[2px] outline-0
                     relative isolate
                     before:z-[-1]
                     before:content['']
                     before:duration-[0.5s]
                     before:absolute
                     before:w-full
                     before:h-full
                     before:bg-white
                     before:left-[-100%]
                     before:top-0
                     before:transition-all
                     hover:before:left-0
                     hover:text-black
                     `}
                  >
                    Subscribe Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
