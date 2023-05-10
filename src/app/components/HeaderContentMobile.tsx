"use client";
import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
  isActive: boolean;
}

function HeaderContentMobile(props: Props) {
  const { isActive } = props;

  const classes = isActive
    ? "translate-x-0 opacity-100"
    : "translate-x-[100%] opacity-0";

  const combinedClasses = `transition-all duration-[0.5s] ease-in-out fixed h-[100vh] bg-white w-full z-30 top-0 pt-[84px] pb-[24px] overflow-hidden overflow-y-auto lg:hidden transform ${classes}`;

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
  //Nav Responsive
  return (
    <div className={combinedClasses}>
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
                  Software Optimization & Enhancement
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
                  Production Inventory
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
                  Flexible Budget
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
                  Poster Delivery
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
                  Health Care
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
              Think with Tien Phong
            </a>
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
      </ul>
    </div>
  );
}

export default HeaderContentMobile;
