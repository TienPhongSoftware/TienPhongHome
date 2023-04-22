"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import Select from "react-select";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import enGB from "date-fns/locale/en-GB";
import DropFileInput from "./DropFiles";

//Select form

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  { label: "Suriname Time", value: "America/Paramaribo" },
  { label: "Eastern Time", value: "America/New_York" },
  { label: "Central Time", value: "America/Chicago" },
  { label: "Mountain Time", value: "America/Denver" },
  { label: "Pacific Time", value: "America/Los_Angeles" },
];

registerLocale("en-GB", enGB);

function ContactForm() {
  //check box All
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleClick2 = () => {
    setIsActive2(!isActive2);
  };

  const handleClick3 = () => {
    setIsActive3(!isActive3);
  };

  //DatePicker
  const [date, setDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setDate(date);
  };
  //TimePicker
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleChange = (date: Date | null) => {
    setStartDate(date);
  };

  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleChangeEnd = (date: Date | null) => {
    setEndDate(date);
  };

  //Drop Files

  return (
    <div
      className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
py-[120px]
    max-w-ContainerContact 
  mx-auto"
    >
      <div className="mb-[0.5rem] md:flex items-center justify-between">
        <h1 className="text-[50px] font-bold text-center mb-0 leading-[1.2] break-words">
          Contact Us
        </h1>
        <div className="mb-[36px] text-center flex">
          <span className="mr-[16px]">
            <Image
              width={138}
              height={152}
              src={"/images/logo/footer-1.png"}
              alt="Top-B2-Bcompanies-in-Vietnam"
              className="max-h-[132px] w-auto h-auto max-w-full"
            />
          </span>
          <span className="mr-[16px]">
            <Image
              width={138}
              height={152}
              src={"/images/logo/footer-2.png"}
              alt="Top-B2-Bcompanies-in-Vietnam"
              className="max-h-[132px] w-auto h-auto max-w-full"
            />
          </span>
          <span>
            <Image
              width={138}
              height={152}
              src={"/images/logo/footer-3.jpg"}
              alt="Top-B2-Bcompanies-in-Vietnam"
              className="max-h-[132px] w-auto h-auto max-w-full sm:invisible md:visible"
            />
          </span>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="basis-0 grow max-w-full">
          <div className="p-0 m-0 ">
            <form action="">
              <div className="text-[#0c152a] font-ThinCus">
                <div className="px-0 lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[540px] w-full mx-auto">
                  <div
                    className="mx-[-16px] grid 
                  md:grid-cols-2 md:gap-2
                  sm:grid-cols-1 sm:gap-1"
                  >
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full">
                      <span className="mb-[24px] block relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          size={40}
                          className="text-[16px] py-[15.3px] leading-[1.5] border 
border-[#c2c2c2] rounded-[5px] font-ThinCus
w-full p-InputContact overflow-visible m-0"
                          placeholder="Name*"
                        />
                      </span>
                      <span className="block relative">
                        <input
                          type="text"
                          name=""
                          size={40}
                          id=""
                          className="text-[16px] py-[15.3px] leading-[1.5] border 
border-[#c2c2c2] rounded-[5px] font-ThinCus
w-full p-InputContact overflow-visible m-0"
                          placeholder="Email*"
                        />
                      </span>
                    </div>
                    <div className="px-[16px] py-[8px] basis-0 grow max-w-full relative w-full sm:flex-WhySM lg:block">
                      <span className="mb-[24px] block relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="text-[16px] py-[15.3px] leading-[1.5] border 
border-[#c2c2c2] rounded-[5px] font-ThinCus
w-full p-InputContact overflow-visible m-0"
                          placeholder="Company*"
                        />
                      </span>
                      <span className="block relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="text-[16px] py-[15.3px] leading-[1.5] border 
border-[#c2c2c2] rounded-[5px] font-ThinCus
w-full p-InputContact overflow-visible m-0"
                          placeholder="Phone number *"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="mx-[-16px] grid grid-cols-1 gap-1">
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full">
                      <span className="mb-[24px] block relative">
                        <textarea
                          name=""
                          id=""
                          cols={40}
                          rows={10}
                          placeholder="Please share anything that will help prepare for our talk. *"
                          aria-required="true"
                          aria-invalid="false"
                          className="border border-[#c2c2c2] py-[15.3px] 
                      leading-[1.5] rounded-[5px] w-full p-InputContact
                      h-[137px]
                      "
                        ></textarea>
                      </span>
                    </div>
                  </div>
                  <div className="mx-[-16px] grid grid-cols-2 gap-2">
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full">
                      <label className="mb-0 select-none inline-block">
                        <span className="block relative">
                          <span className="ml-0 relative pl-[30px] inline-block m-CheckContact">
                            <input
                              type="checkbox"
                              name="your-schedule_choice[]"
                              value="Schedule a talk & we'll call back"
                              className="absolute invisible -z-10 opacity-0"
                              checked={isActive}
                            />
                            <span
                              className={`
                        after:absolute
                        after:h-[20px]
                        after:w-[20px]
                        after:top-0
                        after:left-0
                        after:block
                        ${
                          isActive
                            ? "after:bg-[url(/images/icons/contact-2.svg)]"
                            : "after:bg-[url(/images/icons/contact-1.svg)]"
                        }
                        `}
                              onClick={handleClick}
                            >
                              Schedule a talk & {"we'll"} call back
                            </span>
                          </span>
                        </span>
                      </label>
                    </div>
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full">
                      <label
                        className="mb-0 select-none inline-block"
                        aria-label=""
                      >
                        <span className="block relative">
                          <span className="ml-0 relative pl-[30px] inline-block m-CheckContact">
                            <input
                              type="checkbox"
                              name="your-schedule_choice[]"
                              value="Schedule a talk & we'll call back"
                              className="absolute invisible -z-10 opacity-0"
                              checked={isActive2}
                            />
                            <span
                              className={`
                        after:absolute
                        after:h-[20px]
                        after:w-[20px]
                        after:top-0
                        after:left-0
                        after:block
                        ${
                          isActive2
                            ? "after:bg-[url(/images/icons/contact-2.svg)]"
                            : "after:bg-[url(/images/icons/contact-1.svg)]"
                        }
                        `}
                              onClick={handleClick2}
                            >
                              Request for NDA
                            </span>
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div
                    className={`mx-[-16px]  
                    lg:grid-cols-4 lg:gap-4 
                    sm:grid-cols-1 sm:gap-1 
                    md:grid-cols-2 md:gap-2
                    transition-all duration-1000
                    ease-in-out transform
                    ${
                      isActive
                        ? "max-h-[100%] grid opacity-100"
                        : "max-h-[0%] hidden opacity-0"
                    }
                    `}
                  >
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full">
                      <Select
                        options={options}
                        isSearchable={true}
                        className="leading-[56px]"
                      />
                    </div>
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full">
                      <div className="">
                        <ReactDatePicker
                          selected={date}
                          onChange={handleDateChange}
                          onBlur={(e) =>
                            e.target.setAttribute(
                              "value",
                              date?.toLocaleDateString() ?? ""
                            )
                          }
                          peekNextMonth
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          placeholderText="Date"
                          className="text-[16px] leading-[56px] w-full
          border border-[#c2c2c2] rounded-[5px] p-InputContact"
                        />
                      </div>
                    </div>
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full">
                      <ReactDatePicker
                        selected={startDate}
                        onChange={handleChange}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={60}
                        timeCaption="Time"
                        dateFormat="H:mm"
                        placeholderText="Start time"
                        className="text-[16px] leading-[56px] w-full
          border border-[#c2c2c2] rounded-[5px] p-InputContact"
                      />
                    </div>
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full">
                      <ReactDatePicker
                        selected={endDate}
                        onChange={handleChangeEnd}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={60}
                        timeCaption="Time"
                        dateFormat="H:mm"
                        placeholderText="End time"
                        className="text-[16px] leading-[56px] w-full
          border border-[#c2c2c2] rounded-[5px] p-InputContact"
                      />
                    </div>
                  </div>
                  <div className="mx-[-16px] grid grid-cols-1 gap-1">
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full">
                      <label
                        htmlFor=""
                        className="text-[#0c152a] inline-block mb-[.5rem]"
                      >
                        Attach documents
                      </label>
                      <DropFileInput />
                    </div>
                  </div>
                  <div className="mx-[-16px] grid grid-cols-1 gap-1">
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full">
                      <label
                        className="mb-0 select-none inline-block"
                        aria-label=""
                      >
                        <span className="block relative">
                          <span className="ml-0 relative pl-[30px] inline-block m-CheckContact">
                            <input
                              type="checkbox"
                              name="your-schedule_choice[]"
                              value="Schedule a talk & we'll call back"
                              className="absolute invisible -z-10 opacity-0"
                            />
                            <span
                              className={`
                        after:absolute
                        after:h-[20px]
                        after:w-[20px]
                        after:top-[12px]
                        after:left-0
                        after:block
                        after:bg-[url(/images/icons/contact-3.jpg)]
                        after:bg-no-repeat
                        after:bg-center
                        after:bg-ContactCheckBox
                        after:opacity-[.4]
                        after:translate-y-[-50%]
                        `}
                            >
                              By clicking submit you agree to our
                              <a href="" className="text-[#00aeef]">
                                {" "}
                                Privacy policy{" "}
                              </a>
                              and
                              <a href="" className="text-[#00aeef]">
                                {" "}
                                Cookie policy
                              </a>
                            </span>
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="mx-[-16px] grid grid-cols-1 gap-1">
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full">
                      <iframe
                        title="reCAPTCHA"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdfRqgUAAAAAHKwkYA2Uw8RU0z1pzpwsKpQnz58&amp;co=aHR0cHM6Ly9lbmxhYnNvZnR3YXJlLmNvbTo0NDM.&amp;hl=vi&amp;v=4PnKmGB9wRHh1i04o7YUICeI&amp;size=normal&amp;cb=tb4n2v10snyr"
                        width="304"
                        height="78"
                        role="presentation"
                        name="a-6jlh7sish5ic"
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                      ></iframe>
                    </div>
                  </div>
                  <div className="mx-[-16px] grid grid-cols-1 gap-1 pt-[48px]">
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full text-center">
                      <input
                        type="submit"
                        className="bg-[#00aeef] border-2 border-[#00aeef]
                        max-w-[244px] leading-[50px] min-w-[184px] whitespace-nowrap
                        inline-block px-[40px] text-center text-[18px] text-white
                        rounded-[24px] relative z-10 font-bold overflow-hidden transition-all
                        duration-500 ease-in-out hover:bg-[#e2165a] hover:border-[#e2165a]
                        cursor-pointer p-ContactButton"
                        value="Submit"
                      />
                    </div>
                  </div>
                  <div className="mx-[-16px] grid grid-cols-1 gap-1">
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full text-center">
                      <div className="bg-white shadow-lg rounded-[8px] p-[24px] text-center mt-[120px]">
                        <div className="font-bold mb-[24px] text-[20px] text-[#818181]">
                          Get in touch for more information
                        </div>
                        <div
                          className="mx-auto font-ThinCus md:table-row
                          sm:block
                        sm:max-w-[425px] md:max-w-full
                        "
                        >
                          <div
                            className="md:table-row
                            sm:block
                          sm:relative md:static
                          sm:mb-[24px] md:mb-0
                          "
                          >
                            <div
                              className="md:pr-[26px] md:p-ContactIcon 
                              text-left 
                            sm:pl-0 sm:absolute md:static 
                            sm:top-[-5px] md:top-0 
                            sm:block md:table-cell
                            items-start
                            "
                            >
                              <Image
                                width={25}
                                height={25}
                                alt="Contact Icon"
                                src={"/images/icons/contact-4.svg"}
                              />
                            </div>
                            <div
                              className="md:pr-[14px] font-bold p-ContactIcon
                            text-left sm:block md:table-cell
                            sm:text-[3.5vw] md:text-[2vw] lg:text-[1rem]
                            sm:mb-[5px] md:mb-0 
                            sm:pl-[30px] md:pl-0
                            "
                            >
                              Sales:
                            </div>
                            <div
                              className="md:pr-[14px] font-ThinCus p-ContactIcon
                            text-left sm:block md:table-cell 
                            sm:text-[3.5vw] md:text-[2vw] lg:text-[1rem]
                            sm:mb-[5px] md:mb-0 
                            sm:pl-[30px] md:pl-0
                            "
                            >
                              <a href="tel:+84983757506">+84 983757506</a>
                            </div>
                            <div
                              className="md:pr-[14px] font-ThinCus p-ContactIcon
                            text-left sm:block md:table-cell
                            sm:text-[3.5vw] md:text-[2vw] lg:text-[1rem]
                            md:relative md:pl-[14px] 
                            after:absolute after:left-0
                            md:after:border after:border-[#ccc]
                            after:h-[24px] after:top-[50%]
                            after:mt-GetInContact
                            sm:after:border-0
                            sm:mb-[5px] md:mb-0 
                            sm:pl-[30px] 
                            "
                            >
                              <span className="relative inline-block">
                                <a
                                  href="mailto:info@enlabsoftware.com"
                                  className="hover:text-sky-400"
                                >
                                  info@enlabsoftware.com
                                </a>
                              </span>
                            </div>
                          </div>
                          <div
                            className="md:table-row
                            sm:block
                          sm:relative md:static
                          sm:mb-[24px] md:mb-0
                          "
                          >
                            <div
                              className="md:pr-[26px] md:p-ContactIcon 
                              text-left 
                            sm:pl-0 sm:absolute md:static 
                            sm:top-[-5px] md:top-0 
                            sm:block md:table-cell
                            items-start
                            "
                            >
                              <Image
                                width={25}
                                height={25}
                                alt="Contact Icon"
                                src={"/images/icons/contact-5.svg"}
                              />
                            </div>
                            <div
                              className="md:pr-[14px] font-bold p-ContactIcon
                              text-left sm:block md:table-cell
                              sm:text-[3.5vw] md:text-[2vw] lg:text-[1rem]
                              sm:mb-[5px] md:mb-0 
                              sm:pl-[30px] md:pl-0
                              "
                            >
                              Marketing:
                            </div>
                            <div
                              className="md:pr-[14px] font-ThinCus p-ContactIcon
                              text-left sm:block md:table-cell 
                              sm:text-[3.5vw] md:text-[2vw] lg:text-[1rem]
                              sm:mb-[5px] md:mb-0 
                              sm:pl-[30px] md:pl-0
                              "
                            >
                              <a href="tel:+84983757506">+84 983757506</a>
                            </div>
                            <div
                              className="md:pr-[14px] font-ThinCus p-ContactIcon
                              text-left sm:block md:table-cell
                              sm:text-[3.5vw] md:text-[2vw] lg:text-[1rem]
                              md:relative md:pl-[14px] 
                              after:absolute after:left-0
                              md:after:border after:border-[#ccc]
                              after:h-[24px] after:top-[50%]
                              after:mt-GetInContact
                              sm:after:border-0
                              sm:mb-[5px] md:mb-0 
                              sm:pl-[30px] 
                              "
                            >
                              <span className="relative inline-block">
                                <a
                                  href="mailto:info@enlabsoftware.com"
                                  className="hover:text-sky-400"
                                >
                                  marketing@enlabsoftware.com
                                </a>
                              </span>
                            </div>
                          </div>
                          <div
                            className="md:table-row
                            sm:block
                          sm:relative md:static
                          sm:mb-[24px] md:mb-0
                          "
                          >
                            <div
                              className="md:pr-[26px] md:p-ContactIcon 
                              text-left 
                            sm:pl-0 sm:absolute md:static 
                            sm:top-[-5px] md:top-0 
                            sm:block md:table-cell
                            items-start
                            "
                            >
                              <Image
                                width={25}
                                height={25}
                                alt="Contact Icon"
                                src={"/images/icons/contact-6.svg"}
                              />
                            </div>
                            <div
                              className="md:pr-[14px] font-bold p-ContactIcon
                              text-left sm:block md:table-cell
                              sm:text-[3.5vw] md:text-[2vw] lg:text-[1rem]
                              sm:mb-[5px] md:mb-0 
                              sm:pl-[30px] md:pl-0
                              "
                            >
                              Careers:
                            </div>
                            <div
                              className="md:pr-[14px] font-ThinCus p-ContactIcon
                              text-left sm:block md:table-cell 
                              sm:text-[3.5vw] md:text-[2vw] lg:text-[1rem]
                              sm:mb-[5px] md:mb-0 
                              sm:pl-[30px] md:pl-0
                              "
                            >
                              <a href="tel:+84983757506">+84 905747050</a>
                            </div>
                            <div
                              className="md:pr-[14px] font-ThinCus p-ContactIcon
                              text-left sm:block md:table-cell
                              sm:text-[3.5vw] md:text-[2vw] lg:text-[1rem]
                              md:relative md:pl-[14px] 
                              after:absolute after:left-0
                              md:after:border after:border-[#ccc]
                              after:h-[24px] after:top-[50%]
                              after:mt-GetInContact
                              sm:after:border-0
                              sm:mb-[5px] md:mb-0 
                              sm:pl-[30px] 
                              "
                            >
                              <span className="relative inline-block">
                                <a
                                  href="mailto:info@enlabsoftware.com"
                                  className="hover:text-sky-400"
                                >
                                  career@enlabsoftware.com
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ContactForm), {
  ssr: false,
});