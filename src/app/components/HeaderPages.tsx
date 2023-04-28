"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";

library.add(faComputer, faMobile, faScrewdriverWrench, faCaretDown);

function HeaderPages() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prevState) => !prevState);
  }

  //Nav Responsive
  const [activeDropNav, setActiveDropNav] = useState<number[]>([]);

  const handleClickDropNav = (index: number) => {
    if (activeDropNav.includes(index)) {
      setActiveDropNav(activeDropNav.filter((i) => i !== index));
    } else {
      setActiveDropNav([...activeDropNav, index]);
    }
  };

  const isActiveDropNav = (index: number) => {
    return activeDropNav.includes(index);
  };
  //Scroll effects
  const [pageLoaded, setPageLoaded] = useState(false);
  const [isScrolledDefault, setIsScrolledDefault] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollCus, setIsScrollCus] = useState(false);

  const handleScroll = () => {
    const offsetHeight = document.documentElement.offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = scrollTop / (offsetHeight - window.innerHeight);

    setIsScrolledDefault(scrollTop === 0);
    setIsScrolled(scrollTop > 0 && scrollPercent < 0.1);
    setIsScrollCus(scrollPercent >= 0.1);
  };

  useEffect(() => {
    if (!pageLoaded) {
      setIsScrolledDefault(true);
      setPageLoaded(true);
    } else {
      setIsScrolledDefault(window.pageYOffset === 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageLoaded]);

  //Scroll effects

  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isHovered) {
      setIsHovered(false);
      setIsDropdownOpen(false);
    } else {
      setIsHovered(false);
      setIsDropdownOpen(false);
    }
  };

  const [isHoveredWorks, setIsHoveredWorks] = useState(false);
  const [isDropdownOpenWorks, setIsDropdownOpenWorks] = useState(false);

  const handleMouseEnterWorks = () => {
    setIsHoveredWorks(true);
    setIsDropdownOpenWorks(true);
  };

  const handleMouseLeaveWorks = () => {
    if (!isHoveredWorks) {
      setIsHoveredWorks(false);
      setIsDropdownOpenWorks(false);
    } else {
      setIsHoveredWorks(false);
      setIsDropdownOpenWorks(false);
    }
  };

  const [isHoveredTech, setIsHoveredTech] = useState(false);
  const [isDropdownOpenTech, setIsDropdownOpenTech] = useState(false);

  const handleMouseEnterTech = () => {
    setIsHoveredTech(true);
    setIsDropdownOpenTech(true);
  };

  const handleMouseLeaveTech = () => {
    if (!isHoveredTech) {
      setIsHoveredTech(false);
      setIsDropdownOpenTech(false);
    } else {
      setIsHoveredTech(false);
      setIsDropdownOpenTech(false);
    }
  };

  const [isHoveredThinkWith, setIsHoveredThinkWith] = useState(false);
  const [isDropdownOpenThinkWith, setIsDropdownOpenThinkWith] = useState(false);

  const handleMouseEnterThinkWith = () => {
    setIsHoveredThinkWith(true);
    setIsDropdownOpenThinkWith(true);
  };

  const handleMouseLeaveThinkWith = () => {
    if (!isHoveredThinkWith) {
      setIsHoveredThinkWith(false);
      setIsDropdownOpenThinkWith(false);
    } else {
      setIsHoveredThinkWith(false);
      setIsDropdownOpenThinkWith(false);
    }
  };

  return (
    <div>
      <header className="relative z-40 block bg-white">
        <nav
          className={`sm:min-h-[60px] sm:overflow-[unset]
      fixed w-full min-h-[80px] top-0 left-0
      transition-bg 
      ${
        isScrolledDefault
          ? "sm:bg-[#545b69] lg:bg-transparent bg-opacity-100 text-white"
          : ""
      }
      ${isScrolled ? "bg-black shadow-lg bg-opacity-80" : ""}
      ${isScrollCus ? "bg-white bg-opacity-100" : ""}
      z-50`}
        >
          <div
            className="lg:mx-auto 
            xl:px-[120px] sm:px-[24px] lg:px-[64px] 
        max-w-maxContainer"
          >
            <div className="lg:flex lg:justify-unset xl:justify-between lg:items-center">
              <div className="lg:flex lg:justify-start sm:top-0 sm:left-0">
                <a
                  href="/"
                  className={`min-h[80px] transition-all m-0
                flex 
                lg:justify-center items-center
                lg:scale-100
                sm:origin-left lg:origin-center
                sm:min-h-[60px] lg:min-h-[unset]
                sm:justify-start
                sm:pl-[24px] lg:pl-0
                sm:pr-[24px] lg:pr-0
                sm:top-0 sm:left-0
                sm:fixed lg:static
                sm:w-full
                sm:z-10
                ${isScrolled ? "text-white" : ""}
                 `}
                >
                  <Image
                    src="/images/logo/logo.svg"
                    className="hover:scale-110 transition-all"
                    alt="My Icon"
                    width={100}
                    height={100}
                  />
                </a>

                <div className="sm:hidden lg:flex space-x-6 max-w-full ml-[1.7vw]">
                  <ul className="flex-nowrap whitespace-nowrap webkit-box-orient-horizontal flex-row inline-flex pl-0 mb-0 list-none">
                    <li className="ml-[1.7vw] flex justify-center relative min-h-[80px] transition-all text-center">
                      <div
                        className={`m-auto`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a
                          href="services"
                          className={`hover:text-[#00aeef] transition-all pr-0 pl-0 inline-flex text-[14px] font-bold 
                          ${isScrolledDefault ? "text-white" : ""}
                          ${isScrolled ? "text-white" : ""}`}
                        >
                          Services
                        </a>
                        <ul
                          className={`pointer-events transition-all absolute 
                          border-0 left-0 translate-x-[-24px] p-0 bg-[0 0] 
                          rounded-[24px] overflow-hidden shadow-lg float-none 
                          top-[100%] min-w-[10rem] text-black text-left 
                          list-none before:absolute before:bg-white 
                          before:z-[-20] 
                          ${
                            isDropdownOpen
                              ? "mt-[-20px] opacity-100 visible block"
                              : "invisible opacity-0 mt-[15px]"
                          }`}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <li className="block group m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="pl-16 m-0 p-16px24px
                               bg-white block transition-all duration-300 
                               relative text-black 
                               hover:text-white hover:bg-[#00aeef]"
                            >
                              Web Application Development
                              <FontAwesomeIcon
                                icon={faComputer}
                                className="bg-center bg-no-repeat absolute h-[24px]
                            w-[24px] left-[24px] pointer-events-none text-[#00aeef] duration-300 group-hover:text-white"
                              />
                              <span className="block text-[12px] font-thin">
                                Enterprise applications maximize your efficiency
                              </span>
                            </a>
                          </li>
                          <li className="block group m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="pl-16 m-0 p-16px24px bg-white block transition-all 
                              duration-300 relative text-black group-hover:text-white hover:bg-[#e2127a]"
                            >
                              Flutter App Development
                              <FontAwesomeIcon
                                icon={faMobile}
                                className="bg-center bg-no-repeat absolute h-[24px] duration-300
                            w-[24px] left-[24px] pointer-events-none text-[#ca1780] group-hover:text-white"
                              />
                              <span className="block text-[12px] font-thin">
                                Building the next-gen mobile app that rocks
                              </span>
                            </a>
                          </li>
                          <li className="block group m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="pl-16 m-0 p-16px24px bg-white block transition-all duration-300 relative text-black group-hover:text-white hover:bg-[#fd9f24]"
                            >
                              Software Customization & Enhancement
                              <FontAwesomeIcon
                                icon={faScrewdriverWrench}
                                className="bg-center bg-no-repeat absolute h-[24px] duration-300
                            w-[24px] left-[24px] pointer-events-none  text-[#f7a233] group-hover:text-white"
                              />
                              <span className="block text-[12px] font-thin">
                                Make your existing software better
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="ml-[1.7vw] relative min-h-[80px] transition-all text-center flex justify-center items-center">
                      <div
                        className={`m-auto`}
                        onMouseEnter={handleMouseEnterWorks}
                        onMouseLeave={handleMouseLeaveWorks}
                      >
                        <a
                          href="works"
                          className={`hover:text-[#00aeef] transition-all pr-0 pl-0 
                          inline-flex text-[14px] font-bold  
                          ${isScrolledDefault ? "text-white" : ""}
                          ${isScrolled ? "text-white" : ""}`}
                        >
                          Works
                        </a>
                        <ul
                          className={`pointer-events transition-all absolute 
                          border-0 left-0 translate-x-[-24px] p-0 bg-[0 0] 
                          rounded-[24px] overflow-hidden shadow-lg 
                          float-none top-[100%] min-w-[10rem] text-black 
                          text-left list-none before:absolute before:bg-white 
                          before:z-[-20] 
                          ${
                            isDropdownOpenWorks
                              ? "mt-[-20px] opacity-100 visible block"
                              : "invisible opacity-0 mt-[15px]"
                          }`}
                          onMouseEnter={handleMouseEnterWorks}
                          onMouseLeave={handleMouseLeaveWorks}
                        >
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#00aeef]"
                            >
                              Real Estate
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#e2127a]"
                            >
                              Construction
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#fd9f24]"
                            >
                              Education
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#00aeef]"
                            >
                              Marketplace
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#e2127a]"
                            >
                              Data Management
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#fd9f24]"
                            >
                              Procurement
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#00aeef]"
                            >
                              Marketing
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#e2127a]"
                            >
                              Recruitment
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#fd9f24]"
                            >
                              ERP
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="ml-[1.7vw] relative min-h-[80px] transition-all text-center flex justify-center items-center">
                      <div
                        className={`m-auto`}
                        onMouseEnter={handleMouseEnterTech}
                        onMouseLeave={handleMouseLeaveTech}
                      >
                        <a
                          href="technologies"
                          className={`hover:text-[#00aeef] transition-all 
                          pr-0 pl-0 inline-flex text-[14px] font-bold 
                          ${isScrolledDefault ? "text-white" : ""}
                          ${isScrolled ? "text-white" : ""}`}
                        >
                          Technologies
                        </a>
                        <ul
                          className={`pointer-events transition-all absolute border-0 left-0 translate-x-[-24px] p-0 bg-[0 0] rounded-[24px] overflow-hidden shadow-lg float-none top-[100%] min-w-[10rem] text-black text-left list-none before:absolute before:bg-white before:z-[-20] ${
                            isDropdownOpenTech
                              ? "mt-[-20px] opacity-100 visible block"
                              : "invisible opacity-0 mt-[15px]"
                          }`}
                          onMouseEnter={handleMouseEnterTech}
                          onMouseLeave={handleMouseLeaveTech}
                        >
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#00aeef]"
                            >
                              .Net
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#e2127a]"
                            >
                              C#
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#fd9f24]"
                            >
                              Microservices
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#00aeef]"
                            >
                              Angular
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#e2127a]"
                            >
                              Python
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#fd9f24]"
                            >
                              Node.js
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#00aeef]"
                            >
                              Vue.js
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="ml-[1.7vw] relative min-h-[80px] transition-all text-center flex justify-center items-center">
                      <a
                        href="about-us"
                        className={`hover:text-[#00aeef] 
                        transition-all pr-0 pl-0 inline-flex 
                        text-[14px] font-bold  
                        ${isScrolledDefault ? "text-white" : ""}
                        ${isScrolled ? "text-white" : ""}`}
                      >
                        About us
                      </a>
                    </li>
                    <li className="ml-[1.7vw] relative min-h-[80px] transition-all text-center flex justify-center items-center">
                      <a
                        href="careers"
                        className={`hover:text-[#00aeef] 
                        transition-all pr-0 pl-0 inline-flex 
                        text-[14px] font-bold 
                        ${isScrolledDefault ? "text-white" : ""}
                        ${isScrolled ? "text-white" : ""}`}
                      >
                        Careers
                      </a>
                    </li>
                    <li className="ml-[1.7vw] relative min-h-[80px] transition-all text-center flex justify-center items-center">
                      <div
                        className={`m-auto`}
                        onMouseEnter={handleMouseEnterThinkWith}
                        onMouseLeave={handleMouseLeaveThinkWith}
                      >
                        <a
                          href="#"
                          className={`hover:text-[#00aeef] transition-all 
                          pr-0 pl-0 inline-flex text-[14px] font-bold 
                          ${isScrolledDefault ? "text-white" : ""}
                          ${isScrolled ? "text-white" : ""}`}
                        >
                          Think with Enlab
                        </a>
                        <ul
                          className={`pointer-events transition-all absolute border-0 left-0 translate-x-[-24px] p-0 bg-[0 0] rounded-[24px] overflow-hidden shadow-lg float-none top-[100%] min-w-[10rem] text-black text-left list-none before:absolute before:bg-white before:z-[-20] ${
                            isDropdownOpenThinkWith
                              ? "mt-[-20px] opacity-100 visible block"
                              : "invisible opacity-0 mt-[15px]"
                          }`}
                          onMouseEnter={handleMouseEnterThinkWith}
                          onMouseLeave={handleMouseLeaveThinkWith}
                        >
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#00aeef]"
                            >
                              Blog
                            </a>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all duration-300">
                            <a
                              href=""
                              className="m-0 p-16px24px bg-white block transition-all duration-300 relative text-black hover:text-white hover:bg-[#e2127a]"
                            >
                              Whitepaper
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end sm:hidden lg:flex md:ml-[10px]">
                <ul className="mb-0 flex items-center p-0 break-words">
                  <li className="inline-block">
                    <a
                      href=""
                      className={`leading-[36px] pl-[20px] pr-[20px] min-w-[auto] table-cell
                      w-auto h-[40px] p-[0 30px] rounded-[25px] text-center
                      align-middle font-bold cursor-pointer bg-[#faa61a]
                      text-white border-transparent 
                      max-w-[244px] overflow-x-hidden
                      whitespace-nowrap border-[2px] outline-0
                      relative isolate
 
                      lg:text-[12px]
                      lg:h-[30px]
                      lg:leading-[28px]
                      lg:px-[16px]
 
                      xl:text-[14px]
                      xl:h-[40px]
                      xl:leading-[36px]
                      xl:px-[20px]
 
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
                      Schedule a Call
                    </a>
                  </li>
                  <li className="inline-block ml-4">
                    <a
                      href="contact-us"
                      className={`leading-[36px] pl-[20px] pr-[20px] min-w-[auto] table-cell
                      w-auto h-[40px] p-[0 30px] rounded-[25px] text-center
                      align-middle font-bold cursor-pointer bg-[#00aeef]
                      text-white border-transparent 
                      max-w-[244px] overflow-x-hidden
                      whitespace-nowrap border-[2px] outline-0
                      relative isolate
 
                      lg:text-[12px]
                      lg:h-[30px]
                      lg:leading-[28px]
                      lg:px-[16px]
 
                      xl:text-[14px]
                      xl:h-[40px]
                      xl:leading-[36px]
                      xl:px-[20px]
 
                      before:z-[-1]
                      before:content['']
                      before:absolute
                      before:duration-[0.5s]
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
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span
              className="lg:hidden absolute
          right-[10px] top-[20px] cursor-pointer z-30
          transform rotate-0 translate-z-0
          transition-transform duration-[3s] 
          w-[24px] h-[24px]
          ease-out   
          transition-color 
          -webkit-transition-transform 
          after:absolute 
          after:block 
          after:left-[-40%]
             after:right-[-40%] 
             after:top-[-40%] 
             after:bottom-[-40%]
             after:content-[' ']
             
"
            >
              <span
                onClick={handleClick}
                className={`block absolute h-[3px]
             top-[8px] w-full
             
             before:content-[' ']
             before:transform 
             before:rotate-0 before:translate-y-[-6px] 
             before:translate-z-0
             before:absolute
             before:left-[0]
             before:top-[0]
             before:right-[0]
             before:bottom-[0]
             before:origin-toggleNav
             before:w-full
             before:transition-all
             before:duration-[0.3s]
             before:ease-out
             
             after:content-[' ']
             
             after:rotate-0 after:translate-y-[6px] 
             after:translate-z-0
             after:absolute
             after:left-[0]
             after:top-[0]
             after:right-[0]
             after:bottom-[0]
             after:origin-toggleNav
             after:w-full
             after:transition-all
             after:duration-[0.3s]
             after:ease-out 
             ${isScrolledDefault ? "before:bg-white after:bg-white" : ""}
             ${
               isActive
                 ? "after:rotate-[-45deg] after:translate-y-[2px] before:translate-y-[1px] before:rotate-[45deg]"
                 : "after:rotate-0 before:rotate-0"
             }
             ${
               isScrolled
                 ? "before:bg-white after:bg-white"
                 : "after:bg-black before:bg-black"
             } z-50`}
              ></span>
            </span>
          </div>
        </nav>
      </header>
      <div
        className={`transition-all duration-[0.5s] ease-in-out fixed
  h-[100vh] bg-white w-full z-30 top-0 pt-[84px] pb-[24px]
  overflow-hidden overflow-y-auto lg:hidden transform
  ${isActive ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"}`}
      >
        <div className="sm:w-full sm:pb-[24px]">
          <ul className="block ml-auto mr-auto px-[24px] mb-0 list-none">
            <li
              className={`translate-x-0 delay-0 block w-full
             h-[inherit] text-left transition-all duration-[0.5s]
             overflow-hidden
             `}
              onClick={() => handleClickDropNav(0)}
            >
              <span
                className="absolute top-0 right-0 w-[56px] h-[56px]
              bg-transparent color-[transparent]
               cursor-pointer text-right flex items-center justify-end"
              >
                <FontAwesomeIcon icon={faCaretDown} width={10} />
              </span>
              <a
                href="services"
                className="block text-[14px] font-bold
              text-[#0c152a] pt-0 pb-0 leading-[56px] whitespace-nowrap
              px-0"
              >
                Services
              </a>
              <ul
                className={`p-navDropdown overflow-hidden mx-[-24px]
    rounded-none border-0 bg-[#fafafa] static float-none
    min-w-[10rem] m-NavDropDown text-[1rem] text-[#212529]
    text-left list-none pt-3  duration-[1s] delay-0 
    ${
      isActiveDropNav(0)
        ? "opacity-100 h-auto visible block"
        : " opacity-0 duration-0 hidden"
    }
  `}
              >
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Web Application Development
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Flutter App Development
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Software Customization & Enhancement
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="translate-x-0 delay-0 block w-full
             h-[inherit] text-left transition-all duration-[3s]"
              onClick={() => handleClickDropNav(1)}
            >
              <span
                className="absolute top-0 right-0 w-[56px] h-[56px]
              bg-transparent color-[transparent]
               cursor-pointer text-right flex items-center justify-end"
              >
                <FontAwesomeIcon icon={faCaretDown} width={10} />
              </span>
              <a
                href="works"
                className="block text-[14px] font-bold
              text-[#0c152a] pt-0 pb-0 leading-[56px] whitespace-nowrap
              px-0"
              >
                Works
              </a>
              <ul
                className={`p-navDropdown overflow-hidden mx-[-24px]
    rounded-none border-0 bg-[#fafafa] static float-none
    min-w-[10rem] m-NavDropDown text-[1rem] text-[#212529]
    text-left list-none pt-3  duration-[1s] delay-0 
    ${
      isActiveDropNav(1)
        ? "opacity-100 h-auto visible block"
        : " opacity-0 duration-0 hidden"
    }
  `}
              >
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Real Estate
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Construction
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Education
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Marketplace
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Data Management
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Procurement
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Marketing
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Recruitment
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    ERP
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="translate-x-0 delay-0 block w-full
             h-[inherit] text-left transition-all duration-[3s]"
              onClick={() => handleClickDropNav(3)}
            >
              <span
                className="absolute top-0 right-0 w-[56px] h-[56px]
              bg-transparent color-[transparent]
               cursor-pointer text-right flex items-center justify-end"
              >
                <FontAwesomeIcon icon={faCaretDown} width={10} />
              </span>
              <a
                href="technologies"
                className="block text-[14px] font-bold
              text-[#0c152a] pt-0 pb-0 leading-[56px] whitespace-nowrap
              px-0"
              >
                Technologies
              </a>
              <ul
                className={`p-navDropdown overflow-hidden mx-[-24px]
    rounded-none border-0 bg-[#fafafa] static float-none
    min-w-[10rem] m-NavDropDown text-[1rem] text-[#212529]
    text-left list-none pt-3  duration-[1s] delay-0 
    ${
      isActiveDropNav(3)
        ? "opacity-100 h-auto visible block"
        : " opacity-0 duration-0 hidden"
    }
  `}
              >
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    .NET
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    C#
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Microservices
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Angular
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Python
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Node.js
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Vue.js
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="translate-x-0 delay-0 block w-full
             h-[inherit] text-left transition-all duration-[3s]"
            >
              <a
                href="about-us"
                className="block text-[14px] font-bold
              text-[#0c152a] pt-0 pb-0 leading-[56px] whitespace-nowrap
              px-0"
              >
                About us
              </a>
            </li>
            <li
              className="translate-x-0 delay-0 block w-full
             h-[inherit] text-left transition-all duration-[3s]"
            >
              <a
                href="careers"
                className="block text-[14px] font-bold
              text-[#0c152a] pt-0 pb-0 leading-[56px] whitespace-nowrap
              px-0"
              >
                Careers
              </a>
            </li>
            <li
              className="translate-x-0 delay-0 block w-full
             h-[inherit] text-left transition-all duration-[3s]"
              onClick={() => handleClickDropNav(4)}
            >
              <span
                className="absolute top-0 right-0 w-[56px] h-[56px]
              bg-transparent color-[transparent]
               cursor-pointer text-right flex items-center justify-end"
              >
                <FontAwesomeIcon icon={faCaretDown} width={10} />
              </span>
              <a
                href=""
                className="block text-[14px] font-bold
              text-[#0c152a] pt-0 pb-0 leading-[56px] whitespace-nowrap
              px-0"
              >
                Think with Enlab
              </a>
              <ul
                className={`p-navDropdown overflow-hidden mx-[-24px]
    rounded-none border-0 bg-[#fafafa] static float-none
    min-w-[10rem] m-NavDropDown text-[1rem] text-[#212529]
    text-left list-none pt-3  duration-[1s] delay-0 
    ${
      isActiveDropNav(4)
        ? "opacity-100 h-auto visible block"
        : " opacity-0 duration-0 hidden"
    }
  `}
              >
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left "
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Blog
                  </a>
                </li>
                <li
                  className="block w-full min-h-[inherit]
                transition-all duration-3s ease-in-out text-left"
                >
                  <a
                    href=""
                    className="block text-[14px] font-bold
                  text-[#212529] py-0 px-0 
                  leading-[56px] whitespace-nowrap"
                  >
                    Whitepaper
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <ul
          className="flex translate-x-0 transition-all
        w-full"
        >
          <li className="ml-[24px]">
            <a
              href="contact-us"
              className={`leading-[36px] pl-[20px] pr-[20px] min-w-[auto] table-cell
                     w-auto h-[40px] p-[0 30px] rounded-[25px] text-center
                     align-middle font-bold cursor-pointer bg-[#00aeef]
                     text-white border-transparent 
                     max-w-[244px] overflow-x-hidden
                     whitespace-nowrap border-[2px] outline-0
                     relative isolate
                     before:z-[-1]
                     before:content['']
                     before:absolute
                     before:duration-[0.5s]
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
              Contact Us
            </a>
          </li>
          <li className="ml-[24px]">
            <a
              href=""
              className={`leading-[36px] pl-[20px] pr-[20px] min-w-[auto] table-cell
                     w-auto h-[40px] p-[0 30px] rounded-[25px] text-center
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
              Schedule a Call
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(HeaderPages), {
  ssr: false,
});
