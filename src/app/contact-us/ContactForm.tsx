"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import Select from "react-select";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import enGB from "date-fns/locale/en-GB";
import DropFileInput from "./DropFiles";

//SendEmail Import
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingComponent from "../../../components/share/AppLoading";

//Captcha
import ReCAPTCHA from "react-google-recaptcha";

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

//Send Emails
const ininValues = {
  name: "",
  email: "",
  company: "",
  phoneNumber: "",
  shareAnyThing: "",
  CheckTime: "",
  Time: "",
  Date: "",
  StartTime: "",
  EndTime: "",
  Files: "",
  message: "",
};

const initState = { values: ininValues };

function ContactForm() {
  //Captcha
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaVerify = (response: string | null) => {
    if (response) {
      setIsCaptchaVerified(true);
    } else {
      setIsCaptchaVerified(false);
    }
  };

  //Captcha

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (data: any) => {
    setLoading(true);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (isCaptchaVerified) {
          // Xử lý logic khi Captcha đã được xác minh và nút "Submit" được nhấp
          if (res.status === 200) {
            setLoading(false);
            // console.log("Response succeeded!");
            toast("Thank you for contacting us!");
          } else {
            setLoading(false);
            // console.log("Email/Password is invalid.");
            toast("Email/Password is invalid.");
          }
        } else {
          // Xử lý logic khi Captcha không hợp lệ và nút "Submit" được nhấp
          toast("Invalid captcha. Cannot submit form.");
        }
        // console.log("Response received", res);
      })
      .catch((e) => console.log(e));
    reset();
  };

  // console.log("contact Detail", contactDetail);
  //Send Emails
  const [state, setState] = useState(initState);

  const { values } = state;

  const handleFormChange = (target: any) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

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
    <>
      {loading && <LoadingComponent showLoading={true} />}
      <div
        className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
py-[120px]
    max-w-ContainerContact 
  mx-auto"
      >
        <div className="mb-[0.5rem] md:flex items-center justify-center">
          <h1 className="text-[50px] font-bold text-center mb-0 leading-[1.2] break-words">
            Contact Us
          </h1>
        </div>
        <div className="flex flex-wrap">
          <div className="basis-0 grow max-w-full">
            <div className="p-0 m-0 ">
              <form onSubmit={handleSubmit(onSubmit)} method="POST">
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
                            id="fullName"
                            size={40}
                            className="text-[16px] py-[15.3px] leading-[1.5] border 
border-[#c2c2c2] rounded-[5px] font-ThinCus
w-full p-InputContact overflow-visible m-0"
                            placeholder="Name*"
                            required
                            {...register("fullName", { required: true })}
                          />
                        </span>
                        <span className="block relative">
                          <input
                            type="text"
                            size={40}
                            id="email"
                            className="text-[16px] py-[15.3px] leading-[1.5] border 
border-[#c2c2c2] rounded-[5px] font-ThinCus
w-full p-InputContact overflow-visible m-0"
                            placeholder="Email*"
                            {...register("email", { required: true })}
                          />
                        </span>
                      </div>
                      <div className="px-[16px] py-[8px] basis-0 grow max-w-full relative w-full sm:flex-WhySM lg:block">
                        <span className="mb-[24px] block relative">
                          <input
                            type="text"
                            id="company"
                            className="text-[16px] py-[15.3px] leading-[1.5] border 
border-[#c2c2c2] rounded-[5px] font-ThinCus
w-full p-InputContact overflow-visible m-0"
                            placeholder="Company*"
                            {...register("company", { required: true })}
                          />
                        </span>
                        <span className="block relative">
                          <input
                            type="text"
                            id="phone"
                            className="text-[16px] py-[15.3px] leading-[1.5] border 
border-[#c2c2c2] rounded-[5px] font-ThinCus
w-full p-InputContact overflow-visible m-0"
                            placeholder="Phone number *"
                            {...register("phone", { required: true })}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="mx-[-16px] grid grid-cols-1 gap-1">
                      <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full">
                        <span className="mb-[24px] block relative">
                          <textarea
                            id="message"
                            cols={40}
                            rows={10}
                            placeholder="Please share anything that will help prepare for our talk. *"
                            aria-required="true"
                            aria-invalid="false"
                            className="border border-[#c2c2c2] py-[15.3px] 
                      leading-[1.5] rounded-[5px] w-full p-InputContact
                      h-[137px]
                      "
                            {...register("message", { required: true })}
                          ></textarea>
                        </span>
                      </div>
                    </div>
                    {/* <div className="mx-[-16px] grid grid-cols-2 gap-2">
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full">
                      <label className="mb-0 select-none inline-block">
                        <span className="block relative">
                          <span className="ml-0 relative pl-[30px] inline-block m-CheckContact">
                            <input
                              type="checkbox"
                              className="absolute invisible -z-10 opacity-0"
                              checked={isActive}
                              value={values.CheckTime}
                              {...register("timeCheck", { required: true })}
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
                    ease-in-out transform z-50 relative
                    ${
                      isActive
                        ? "max-h-[100%] grid opacity-100"
                        : "max-h-[0%] hidden opacity-0"
                    }
                    `}
                  >
                    <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full">
                      <Select
                        isSearchable={true}
                        className="leading-[56px] z-50 relative"
                        options={options}
                        onChange={handleFormChange}
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
                          className="text-[16px] leading-[56px] w-full z-50 relative
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
                        className="text-[16px] leading-[56px] w-full z-50 relative
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
                        className="text-[16px] leading-[56px] w-full relative
          border border-[#c2c2c2] rounded-[5px] p-InputContact z-50"
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
                  </div> */}
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
                        <ReCAPTCHA
                          sitekey="6Ld_XRsmAAAAADfev60np3UEgjZ73rPFZKrXQxs8"
                          onChange={handleCaptchaVerify}
                        />
                      </div>
                    </div>
                    <div className="mx-[-16px] grid grid-cols-1 gap-1 pt-[48px]">
                      <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full text-center">
                        <button
                          type="submit"
                          className="bg-[#00aeef] border-2 border-[#00aeef]
                        max-w-[244px] leading-[50px] min-w-[184px] whitespace-nowrap
                        inline-block px-[40px] text-center text-[18px] text-white
                        rounded-[24px] relative z-10 font-bold overflow-hidden transition-all
                        duration-500 ease-in-out hover:bg-[#e2165a] hover:border-[#e2165a]
                        cursor-pointer p-ContactButton"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="mx-[-16px] grid grid-cols-1 gap-1">
                      <div className="px-[16px] py-[8px] basis-[0] grow max-w-full relative w-full text-center">
                        <div className="bg-white shadow-lg rounded-[8px] p-[24px] text-center mt-[120px]">
                          <div className="font-bold mb-[24px] text-[20px] text-[#818181]">
                            Get in touch for more information
                          </div>
                          <div
                            className="mx-auto font-ThinCus md:table
                          sm:block
                        sm:max-w-[425px] md:max-w-full
                        text-center
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
                                <a href="tel:+84983757506">(+84) 905 666 770</a>
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
                                    href="mailto:info@tienphong.it"
                                    className="hover:text-sky-400"
                                  >
                                    info@tienphong.it
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
                                <a href="tel:+84983757506">(+84) 905 666 770</a>
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
                                    href="mailto:info@tienphong.it"
                                    className="hover:text-sky-400"
                                  >
                                    info@tienphong.it
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
                                <a href="tel:+84983757506">(+84) 905 666 770</a>
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
                                    href="mailto:info@tienphong.it"
                                    className="hover:text-sky-400"
                                  >
                                    info@tienphong.it
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
      <ToastContainer />
    </>
  );
}

export default dynamic(() => Promise.resolve(ContactForm), {
  ssr: false,
});
