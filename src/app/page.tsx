"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import PageWrapper from "./components/PageWrapper";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Pagination]);

function Home() {
  const TechWeLikeCount = 15;

  const [visibleThinkB, setvisibleThinkB] = useState(false);
  const [visibleLearn, setvisibleLearn] = useState(false);
  const [visibleHappyCus, setvisibleHappyCus] = useState(false);

  const [ThinkBRef, ThinkBInView] = useInView({ threshold: 0 });
  const [LearnRef, LearnInView] = useInView({ threshold: 0 });
  const [HappyCusRef, HappyCusInView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (ThinkBInView) {
      setvisibleThinkB(true);
    }
  }, [ThinkBInView]);

  useEffect(() => {
    if (LearnInView) {
      setvisibleLearn(true);
    }
  }, [LearnInView]);

  useEffect(() => {
    if (HappyCusInView) {
      setvisibleHappyCus(true);
    }
  }, [HappyCusInView]);

  return (
    <PageWrapper>
      <main className="min-h-[80vh] bg-white block">
        <section
          className="sm:min-h-[568px] sm:overflow-hidden sm:h-auto
        md:min-h-[100vh]
      lg:overflow-visible bg-[url('/images/layout/cover-work.jpg')] relative
      bg-no-repeat text-white z-10 h-[100vh] min-h-[740px] 
      block"
        >
          <div
            className="z-30 absolute w-full left-0 top-[50%]
         sm:translate-y-[-50%] select-none"
          >
            <div
              className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
            max-w-maxContainer 
          mx-auto"
            >
              <div className="lg:max-w-[50%] sm:max-w-[100%]">
                <h2
                  className="lg:text-[60px] sm:text-[8vw] 
                md:text-[6vw]
                font-bold mb-4 text-white"
                  data-aos="fade-right"
                >
                  The lab for your digital transformation
                </h2>
                <div
                  className="lg:mb-[48px] sm:mb-[10vw] 
                sm:text-[4vw] md:text-[2.3vw] leading-[1.8] 
              max-w-[622px] lg:text-[18px]"
                >
                  <p className="m-0 break-words">
                    Enlab Software is a dedicated offshore software development
                    company, providing{" "}
                    <strong>
                      <span className="text-[#00aeef]">
                        enterprise applications
                      </span>
                    </strong>{" "}
                    with
                    <strong>
                      <span className="text-[#ed145b]">
                        {" "}
                        top-notch quality{" "}
                      </span>
                    </strong>
                    in every Agile delivery. All done with complete
                    <span className="text-[#faa61a]">
                      <strong> transparency and integrity.</strong>
                    </span>
                  </p>
                </div>
                <div className="sm:flex lg:flex">
                  <a
                    href="contact-us"
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
                  <a
                    href=""
                    className="mr-6 bg-[0 0] border-[#00aeef] text-[#00aeef]
                  lg:px-[40px] lg:leading-[52px]
                  lg:min-w-[184px] lg:text-[16px] max-w-[244px] whitespace-nowrap
      inline-block text-center border-2 rounded-[32px] relative
      z-10 font-bold overflow-hidden transition-all outline-0
      isolate
      before:z-[-1]
      before:content['']
      before:absolute
      before:w-full
      before:h-full
      before:bg-[#00aeef]
      before:left-[-100%]
      before:top-0
      before:transition-all
      before:duration-[0.5s]
      hover:before:left-0
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
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-[url('/images/layout/cover-work.jpg')] bg-cover
        bg-center absolute top-0 left-0 w-full h-full z-10
        before:absolute before:top-0 before:left-0 before:w-full before:h-full
        before:bg-gradient-to-b before:from-slate-800 before:via-slate-800
         before:to-slate-900 before:opacity-50 before:z-10"
          >
            <video
              src="https://media.enlabsoftware.com/wp-content/uploads/2022/05/27085756/File-final-up-banner-website.mp4"
              autoPlay
              loop
              muted
              className="object-cover block w-full h-full max-w-[unset]"
            />
          </div>
        </section>
        <section className="block">
          <div className="text-center pb-[180px] bg-[#f8f9fb]">
            <div
              className="lg:max-w-maxPartner lg:pl-[120px] lg:pr-[120px] 
          mx-auto text-center sm:pl-[24px] sm:pr-[24px]"
            >
              <h2 className="pt-4 pb-4 text-[32px] font-bold mt-0 mb-[0.5rem]">
                Companies doing great things with us
              </h2>
              <div>
                <div className="justify-center flex flex-wrap">
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                  items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] sm:flex-partnerSM
                  sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-1.svg"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                  items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] sm:flex-partnerSM
                  sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-2.svg"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] sm:flex-partnerSM
                sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-3.png"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] sm:flex-partnerSM
                sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-4.svg"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                </div>
                <div className="justify-center flex flex-wrap">
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] sm:flex-partnerSM
                sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-5.svg"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] sm:flex-partnerSM
                sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-6.svg"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] sm:flex-partnerSM
                sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-7.svg"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] sm:flex-partnerSM
                sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-8.png"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                </div>
                <div className="justify-center flex flex-wrap">
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] sm:flex-partnerSM
                sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-9.svg"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] sm:flex-partnerSM
                sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-10.svg"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] sm:flex-partnerSM
                sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-11.png"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] sm:flex-partnerSM
                sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-12.png"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                </div>
                <div className="justify-center flex flex-wrap">
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] sm:flex-partnerSM
                sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-13.svg"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] sm:flex-partnerSM
                sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-14.png"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                  <div
                    className="pt-[16px] pb-[16px] lg:flex-partner flex justify-center
                items-center sm:pr-[16px] sm:pl-[16px] lg:pr-[unset] lg:pl-[unset] 
                sm:flex-partnerSM
                sm:max-w-[50%] sm:justify-center"
                    data-aos="fade-up"
                    data-aos-offset="-300"
                  >
                    <Image
                      src="/images/logo/logo-15.svg"
                      className="w-[169px] h-auto max-h-[60px] object-contain
                  max-w-full align-middle border-none text-center mx-auto"
                      alt="Vantage-point15year-blackWhite"
                      width={958}
                      height={415}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-IntroMem lg:pr-[120px] lg:pl-[120px] mx-auto">
            <div
              className="mt-[-140px] pb-[120px] text-[18px] 
          sm:pl-[24px] sm:pr-[24px]"
            >
              <div
                className="bg-white shadow-lg rounded-IntroMem 
            p-0 pt-6 pb-6 text-center max-w-maxWWD
            before:h-12 before:w-12 
            before:bg-[url('/images/logo/logo-intromem.svg')]
            before:inline-block
            before:mb-6"
              >
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{ delay: 3000 }}
                >
                  <SwiperSlide>
                    <div className="px-[48px] p-[5%] pt-[1%] sm:text-[3.2vw] lg:text-[1.2vw]">
                      <div className="mb-[24px]">
                        <p>
                          Enlab Software is a truly awesome team, and we will{" "}
                          <span className="text-[#00aeef]">
                            <strong>
                              definitely call on them again in the future
                            </strong>
                          </span>
                          . Despite our time pressures they pushed the work
                          through and were{" "}
                          <span className="text-[#00aeef]">
                            <strong>
                              very professional, both in work and communication
                            </strong>
                          </span>
                          . Thanks, team!
                          <span className="text-[#ed145b]">
                            <strong>
                              <br />
                            </strong>
                          </span>
                        </p>
                      </div>
                      <div className="font-bold">
                        Chris Mahoney{" "}
                        <span className="text-[#818181]">
                          - CEO of Anasoft Consulting Pty Ltd.
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="px-[48px] p-[5%] pt-[1%] sm:text-[3.2vw] lg:text-[1.2vw]">
                      <div className="mb-[24px]">
                        <p>
                          Enlab Software has exceptional resources to work with.{" "}
                          <span className="text-[#ed145b]">
                            <strong>
                              I recommend them to anyone needing Web or SQL
                              Development
                            </strong>
                          </span>
                          . The team helped design and develop a{" "}
                          <span className="text-[#ed145b]">
                            <strong>
                              complex financial services application
                            </strong>
                          </span>
                          . Throughout the project, they thoroughly understood
                          the requirements and delivered an exceptional product.
                          Their communication skills are great as they were
                          always available to answer questions and make
                          suggestions. Additionally, the team is able to work
                          without constant supervision. I continue to utilize
                          Enlab Software team for ongoing support and future
                          development.
                          <span className="text-[#ed145b]">
                            <strong>
                              <br />
                            </strong>
                          </span>
                        </p>
                      </div>
                      <div className="font-bold">
                        Scott Prince{" "}
                        <span className="text-[#818181]">
                          - CEO of Sedna Inc.
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="px-[48px] p-[5%] pt-[1%] sm:text-[3.2vw] lg:text-[1.2vw]">
                      <div className="mb-[24px]">
                        <p>
                          Enlab Software is incredible. Great work and
                          coordination with his team. Able to{" "}
                          <span className="text-[#faa61a]">
                            <strong>
                              think ahead and propose solutions without
                              step-by-step details
                            </strong>
                          </span>
                          . Great communication, excellent English. Really
                          looking forward to working with Vinh and his team
                          again.{" "}
                          <span className="text-[#ed145b]">
                            <strong>
                              complex financial services application
                            </strong>
                          </span>
                          . Throughout the project, they thoroughly understood
                          the requirements and delivered an exceptional product.
                          Their communication skills are great as they were
                          always available to answer questions and make
                          suggestions. Additionally, the team is able to work
                          without constant supervision. I continue to utilize
                          Enlab Software team for ongoing support and future
                          development.
                        </p>
                      </div>
                      <div className="font-bold">
                        Matt Klusas{" "}
                        <span className="text-[#818181]">
                          - CEO of Cryogenic Control
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="px-[48px] p-[5%] pt-[1%] sm:text-[3.2vw] lg:text-[1.2vw]">
                      <div className="mb-[24px]">
                        <p>
                          I’ve worked with Enlab on numerous projects, and each
                          time, he has{" "}
                          <span className="text-[#00aeef]">
                            <span className="text-black">
                              thoroughly understood my requirements and
                            </span>
                            <strong>
                              delivered on-time and superior products
                            </strong>
                          </span>
                          . The communication skills are great as the team was
                          always available to answer questions and make
                          suggestions. The team is able to work without constant
                          supervision and is able to{" "}
                          <span className="text-[#00aeef]">
                            <strong>
                              get the job done right the first time
                            </strong>
                          </span>
                          . I recommend Enlab as a reliable software vendor for
                          projects.
                        </p>
                      </div>
                      <div className="font-bold">
                        Scott Yewell{" "}
                        <span className="text-[#818181]">
                          - CEO of Purpose Built Software
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="overflow-x-hidden">
            <h2
              className="md:text-[64px] font-bold text-center mb-[0.5rem]
          leading-[1.2] sm:text-[7vw]"
            >
              What we do
            </h2>
            <p className="text-[18px] font-bold mb-[80px] text-center">
              Enterprise Application Solutions. Designed for Your Modern
              Business.
            </p>
            <div className="pb-[48px]">
              <div
                className="lg:px-[120px] sm:px-[24px] 
            md:px-[64px] mx-auto"
              >
                <div
                  className="flex flex-wrap justify-between 
              sm:max-w-[425px] sm:m-autoWWD md:max-w-none lg:m-0"
                >
                  <a
                    href=""
                    className="lg:flex-flexWWD sm:flex-WhySM relative z-10
                 text-[#0c152a] pb-[40px] max-w-full sm:mb-[64px]
                 lg:mb-0"
                  >
                    <div
                      className="relative h-0 block pb-[56%] bg-[#c4c4c4]
                  rounded-radiusWWD overflow-hidden mb-6"
                    >
                      <Image
                        src="/images/WWD/photo-1.jpg"
                        className="transition-all object-cover absolute h-full
                      w-full left-0 top-0 max-w-full align-middle"
                        alt="Service-Web-app-development"
                        width={616}
                        height={408}
                      />
                    </div>
                    <h3
                      className="text-[20px] font-bold mb-[18px] leading-[1.2]
                  break-words"
                    >
                      Web Application Development
                    </h3>
                    <div className="font-LightCus">
                      Refresh experiences on desktop/web applications that
                      operate seamlessly, securely, and scalable with .Net,
                      Python, Angular, ReactJS, Vue.js. On-premises or on cloud.
                    </div>
                    <div className="absolute bottom-0 left-0 text-[#00aeef]">
                      <span className="font-bold">Learn more</span>
                    </div>
                  </a>
                  <a
                    href=""
                    className="lg:flex-flexWWD sm:flex-WhySM relative z-10
                 text-[#0c152a] pb-[40px] max-w-full sm:mb-[64px]
                 lg:mb-0"
                  >
                    <div
                      className="relative h-0 block pb-[56%] bg-[#c4c4c4]
                  rounded-radiusWWD overflow-hidden mb-6"
                    >
                      <Image
                        src="/images/WWD/photo-2.png"
                        className="transition-all object-cover absolute h-full
                      w-full left-0 top-0 max-w-full align-middle"
                        alt="Service-Web-app-development"
                        width={616}
                        height={408}
                      />
                    </div>
                    <h3
                      className="text-[20px] font-bold mb-[18px] leading-[1.2]
                  break-words"
                    >
                      Flutter App Development
                    </h3>
                    <div className="font-LightCus">
                      Designed for your “everywhere” brand presence. Intuitive,
                      functional, delightful experience, and cross-platform
                      apps.
                    </div>
                    <div className="absolute bottom-0 left-0 text-[#00aeef]">
                      <span className="font-bold">Learn more</span>
                    </div>
                  </a>
                  <a
                    href=""
                    className="lg:flex-flexWWD sm:flex-WhySM relative z-10
                 text-[#0c152a] pb-[40px] max-w-full sm:mb-[64px]
                 lg:mb-0"
                  >
                    <div
                      className="relative h-0 block pb-[56%] bg-[#c4c4c4]
                  rounded-radiusWWD overflow-hidden mb-6"
                    >
                      <Image
                        src="/images/WWD/photo-3.jpg"
                        className="transition-all object-cover absolute h-full
                      w-full left-0 top-0 max-w-full align-middle"
                        alt="Service-Web-app-development"
                        width={616}
                        height={408}
                      />
                    </div>
                    <h3
                      className="text-[20px] font-bold mb-[18px] leading-[1.2]
                  break-words"
                    >
                      Software Customization & Enhancement
                    </h3>
                    <div className="font-LightCus">
                      Superior software development tailored to your business
                      and processes. Accelerate your time to market, improve
                      operational efficiency, facilitate data-driven decisions.
                    </div>
                    <div className="absolute bottom-0 left-0 text-[#00aeef]">
                      <span className="font-bold">Learn more</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="py-[48px]">
              <div
                className="lg:px-[120px] sm:px-[24px] md:px-[64px]
            max-w-maxWWD mx-auto"
              >
                <h2
                  className="break-words leading-[1.2] text-[#818181]
            text-[20px] font-bold m-0"
                >
                  Tech we love
                </h2>
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={50}
                  slidesPerView={8}
                  autoplay={{ delay: 1000 }}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                    1024: {
                      slidesPerView: 8,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {[...Array(TechWeLikeCount)].map((_, index) => (
                    <SwiperSlide key={index}>
                      <span
                        className="max-w-[200px] 
                flex-wrap flex h-[100px]] justify-center items-center"
                      >
                        <Image
                          src={`/images/logo/tech-${index + 1}.svg`}
                          className="block opacity-100 max-w-[70px]
                    align-middle w-[100px] h-[100px]"
                          alt="Vantage-point15year-blackWhite"
                          width={200}
                          height={100}
                        />
                        <span
                          className="w-full text-[16px] font-bold h-auto
                  flex justify-center items-center"
                        >
                          Material
                        </span>
                      </span>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div
                  className="text-[0] p-[18px 0] whitespace-nowrap relative
              z-10 before:left-0 before:right-auto before:bg-TechWeLove
              before:w-[50px] before:h-full before:absolute before:top-0 
              before:z-20 before:pointer-events-none"
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-gradient-to-b
         from-sky-400 to-sky-500 bg-sky-500 
         text-white md:py-[80px] sm:py-[48px]  overflow-hidden
      overflow-x-hidden block"
        >
          <div
            className="xl:px-[120px] sm:px-[24px] lg:px-[64px] 
        mx-auto max-w-maxWWD"
          >
            <div className="flex flex-wrap">
              <div
                className="lg:flex-flexOTWorks lg:max-w-[33.3%] pr-[24px]
              sm:max-w-full sm:flex-WhySM sm:mb-[48px] lg:mb-0
              aos-init aos-animate"
                data-aos="fade-right"
              >
                <div
                  className="lg:max-w-[344px] lg:mr-[80px]
              sm:m-0 sm:max-w-full sm:w-full"
                >
                  <h2
                    className="md:text-[55px] font-bold mb-5 
                  leading-[1.2] mt-0
                break-words
                sm:text-[14vw]"
                  >
                    Our Typical Works
                  </h2>
                  <div
                    className="lg:text-[18px] mb-[48px] font-ThinCus
                text-white leading-[1.8] sm:text-[3vw]"
                  >
                    Let’s discover how we make customers happy in detail!
                  </div>
                  <a
                    href=""
                    className="text-white decoration-0 
                leading-0 sm:text-[3vw] lg:text-[18px]"
                  >
                    View all works →
                  </a>
                </div>
              </div>
              <div
                className="lg:basis-[0%] lg:grow-[1] max-w-[100%] 
              sm:flex-WhySM lg:flex-none
            "
                data-aos="fade-left"
              >
                <div className="block">
                  <a
                    href=""
                    className="md:h-0 md:pb-[76%] float-left relative 
                z-10 block text-white 
         lg:max-w-maxOTWorks lg:w-full
         sm:mb-[42px] sm:w-full sm:h-auto 
         sm:max-w-full sm:pb-[inherit]
         md:mb-0 md:max-w-maxOTWorksPicsPRS"
                  >
                    <div
                      className="w-full h-heightOTWorks 
                rounded-radiusOTWorks overflow-hidden top-0 
                transition-all
                md:absolute lg:pb-0 lg:mb-0
                sm:relative sm:pb-[70%] sm:mb-[12px]
                "
                    >
                      <Image
                        src="/images/OTW/photo-1.webp"
                        className="transition-all object-cover absolute h-full
                      w-full left-0 top-0 max-w-full align-middle"
                        alt="Service-Web-app-development"
                        width={400}
                        height={260}
                      />
                    </div>
                    <div
                      className="md:absolute md:text-[3vw] w-full 
                  top-topOTWorks lg:text-[24px]
                leading-[1.3] font-bold
                sm:relative sm:text-[5vw]
                "
                    >
                      Marketing Automation Platform
                    </div>
                  </a>
                  <a
                    href=""
                    className="lg:h-0 lg:pb-pbImgLittleOTWorkMD 
                md:pb-pbImgLittleOTWork md:mb-[24px]
                md:max-w-maxOTWorksPicsPRS
                float-right relative 
                z-10 block text-white 
         lg:max-w-maxOTWorks lg:w-full
         sm:mb-[42px] sm:w-full sm:h-auto 
         sm:max-w-full sm:pb-[inherit]
         "
                  >
                    <div
                      className="w-full h-heightOTWorks 
                  rounded-radiusOTWorks overflow-hidden top-0 
                  transition-all
                  md:absolute md:pb-0 md:mb-0
                  sm:relative sm:pb-[70%] sm:mb-[12px]
                  "
                    >
                      <Image
                        src="/images/OTW/photo-2.webp"
                        className="transition-all object-cover absolute h-full
                      w-full left-0 top-0 max-w-full align-middle"
                        alt="Service-Web-app-development"
                        width={400}
                        height={250}
                      />
                    </div>
                    <div
                      className="md:absolute w-full 
                  top-topOTWorks lg:text-[24px]
                leading-[1.3] font-bold
                sm:relative sm:text-[5vw]
                md:text-[3vw]
                "
                    >
                      Beauty Marketplace
                    </div>
                  </a>
                  <a
                    href=""
                    className="lg:h-0 lg:pb-pbImgLittleOTWorkMD  
                md:pb-pbImgLittleOTWork md:mb-[24px]
                md:max-w-maxOTWorksPicsPRS
                float-right relative 
                z-10 block text-white 
         lg:max-w-maxOTWorks lg:w-full
         sm:mb-[42px] sm:w-full sm:h-auto 
         sm:max-w-full sm:pb-[inherit]
         "
                  >
                    <div
                      className="w-full h-heightOTWorks 
                  rounded-radiusOTWorks overflow-hidden top-0 
                  transition-all
                  md:absolute lg:pb-0 lg:mb-0
                  sm:relative sm:pb-[70%] sm:mb-[12px]
                  "
                    >
                      <Image
                        src="/images/OTW/photo-3.webp"
                        className="transition-all object-cover absolute h-full
                      w-full left-0 top-0 max-w-full align-middle"
                        alt="Service-Web-app-development"
                        width={400}
                        height={250}
                      />
                    </div>
                    <div
                      className="md:absolute w-full 
                  top-topOTWorks lg:text-[24px]
                leading-[1.3] font-bold
                sm:relative sm:text-[5vw]
                md:text-[3vw]
                "
                    >
                      Property Management System
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="block">
          <div className="py-[120px] block">
            <div
              className="xl:px-[120px] sm:px-[24px] lg:px-[64px] 
          mx-auto max-w-maxWWD block"
            >
              <div className="flex flex-wrap box-border">
                <div
                  className="md:top-topWhyEnd
              lg:flex-flexOTWorks max-w-[33.3%]
              sm:max-w-full sm:flex-WhySM sm:mb-[48px] lg:mb-0"
                >
                  <h2
                    className="font-bold md:text-[64px] mb-[32px] 
                leading-[1.2] sm:text-[7vw]"
                  >
                    Why Enlab?
                  </h2>
                  <div className="block">
                    <div className="mb-[44px]">
                      <span
                        className="lg:text-[40px] sm:text-[6.3vw] font-bold 
                    block text-[#ed145b]"
                      >
                        +9 Years
                      </span>
                      <span
                        className="lg:text-[20px] sm:text-[4vw]
                       text-[#818181]
                     font-ThinCus"
                      >
                        industry experience
                      </span>
                    </div>
                    <div className="mb-[44px]">
                      <span
                        className="lg:text-[40px] sm:text-[6.3vw] font-bold 
                    block text-[#00aeef]"
                      >
                        +25 Clients
                      </span>
                      <span
                        className="lg:text-[20px] sm:text-[4vw]
                       text-[#818181]
                     font-ThinCus"
                      >
                        ready to recommend us
                      </span>
                    </div>
                    <div className="mb-[44px]">
                      <span
                        className="lg:text-[40px] sm:text-[6.3vw] font-bold 
                    block text-[#faa61a]"
                      >
                        +50 Projects
                      </span>
                      <span
                        className="lg:text-[20px] sm:text-[4vw]
                       text-[#818181]
                     font-ThinCus"
                      >
                        dependably delivered
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="basis-[0%] grow-[1] 
              max-w-full block"
                >
                  <div>
                    <div
                      ref={ThinkBRef}
                      className={`transition-all pl-[120px] 
                  pt-[24px] pb-[96px]
                relative z-10 after:last:border-animation 
                after:w-[4px] after:bg-[#dedede]
                after:block
                after:absolute after:z-[-10] after:top-[89px] 
                after:left-[43px] after:transition-all
                after:h-hWhyEnd duration-[0.5s] ease-in-out
                overflow-hidden ${
                  visibleThinkB ? "opacity-100 line-animation" : "opacity-0"
                }`}
                    >
                      <div className="mb-[32px] absolute top-0 left-0">
                        <svg
                          className="border-0 overflow-hidden align-middle w-[70%] h-[70%]"
                          width="128"
                          height="128"
                          viewBox="0 0 128 128"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="64"
                            cy="64"
                            r="62"
                            stroke="#DEDEDE"
                            stroke-width="4"
                            stroke-miterlimit="1.55572"
                          />
                          <ellipse
                            cx="29.6634"
                            cy="89.8371"
                            rx="5.48571"
                            ry="5.45185"
                            fill="#00AEEF"
                          />
                          <ellipse
                            cx="46.1207"
                            cy="77.5704"
                            rx="16.4571"
                            ry="16.3556"
                            fill="#FAA61A"
                          />
                          <ellipse
                            cx="73.5489"
                            cy="57.126"
                            rx="27.4286"
                            ry="27.2593"
                            fill="#ED145B"
                          />
                        </svg>
                      </div>
                      <div
                        className="lg:text-[32px] font-bold mb-[16px]
                  sm:text-[6vw]"
                      >
                        Think big, Start small
                      </div>
                      <div className="text-[16px] leading-[1.8] font-LightCus">
                        <p>
                          Going beyond ordinary offshore software development
                          that plays the role of cost reduction, we have a dream
                          of building the lab for smart software that empowers
                          businesses to thrive digitally. That’s why we named us
                          Enlab, which is an abbreviation of Enterprise Lab.
                          We’ve started small, but we do little things with
                          great love. How does great love transform into a
                          customer’s credit?
                        </p>
                      </div>
                    </div>
                    <div
                      ref={LearnRef}
                      className={`transition-all pl-[120px] pt-[24px] pb-[96px]
                relative z-10 
                after:h-hWhyEnd after:w-[4px] after:bg-[#dedede]
                after:block
                after:absolute after:z-[-10] after:top-[89px] 
                after:left-[43px] after:transition-all
                overflow-hidden ${
                  visibleLearn ? "opacity-100 line-animation" : "opacity-0"
                }`}
                    >
                      <div className="mb-[32px] absolute top-0 left-0">
                        <svg
                          className="overflow-hidden align-middle w-[70%] h-[70%]"
                          width="128"
                          height="128"
                          viewBox="0 0 128 128"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="64"
                            cy="64"
                            r="62"
                            stroke="#DEDEDE"
                            stroke-width="4"
                          />
                          <path
                            d="M22.2041 41.7784C22.2041 38.7825 24.5432 36.3538 27.4286 36.3538H64C66.8854 36.3538 69.2245 38.7825 69.2245 41.7784V76.4656C69.2245 81.9068 66.6055 86.9879 62.2451 90.0062L48.6123 99.4428C46.8574 100.658 44.5712 100.658 42.8163 99.4428L29.1835 90.0062C24.8232 86.9879 22.2041 81.9068 22.2041 76.4656V41.7784Z"
                            fill="#FAA61A"
                          />
                          <path
                            d="M57.4695 41.7784C57.4695 38.7825 59.8086 36.3538 62.694 36.3538H99.2654C102.151 36.3538 104.49 38.7825 104.49 41.7784V76.4656C104.49 81.9068 101.871 86.9879 97.5105 90.0062L83.8777 99.4428C82.1228 100.658 79.8366 100.658 78.0817 99.4428L64.4489 90.0062C60.0885 86.9879 57.4695 81.9068 57.4695 76.4656V41.7784Z"
                            fill="#ED145B"
                          />
                          <path
                            d="M39.1295 34.8299C39.1295 32.6187 40.8378 30.966 42.7757 30.966H83.9186C85.8566 30.966 87.5649 32.6187 87.5649 34.8299V73.8056C87.5649 79.2089 84.9602 84.2226 80.6754 87.1849L65.3386 97.7881C64.1279 98.6252 62.5665 98.6252 61.3558 97.7881L46.0189 87.1849C41.7341 84.2226 39.1295 79.2089 39.1295 73.8056V34.8299Z"
                            fill="#00AEEF"
                            stroke="white"
                            stroke-width="4.46258"
                          />
                          <path
                            d="M77.2995 48.5442C80.2083 48.6758 82.2318 52.7568 80.0818 55.2581L79.9553 55.3897L62.7555 73.2935C62.2496 73.8201 61.9967 73.9517 61.6173 74.0833C60.3526 74.7415 58.7085 74.4783 57.5703 73.5567C57.4438 73.4251 57.4438 73.4251 57.3173 73.2935L48.2116 63.815C46.441 61.972 47.0734 58.4176 49.2233 57.3644C50.6145 56.7062 52.5115 56.9695 53.6497 58.1543L59.9732 64.7365L74.3907 49.729C74.3907 49.729 76.0348 48.5442 77.2995 48.5442Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div
                        className="lg:text-[32px] font-bold mb-[16px]
                  sm:text-[6vw]"
                      >
                        Lean and reliable
                      </div>
                      <div className="text-[16px] leading-[1.8] font-LightCus">
                        <p className="mb-[10px]">
                          We are a lean and agile development team focused on
                          delivering high-quality software. Over the years of
                          working in the offshore software development industry,
                          we truly understand its pros and cons. Instead of
                          acquiring as many clients as possible and letting them
                          go with frustration and poor deliveries, we try our
                          best to establish a long-term relationship based on a
                          strong commitment to transparency and integrity:
                        </p>
                        <ul
                          className="mt-[24px] list-none pl-0 mb-[1rem]
                    break-words block"
                        >
                          <li
                            className="mb-[12px] pl-[30px]
                       bg-[url(/images/icons/list-icon.svg)] bg-no-repeat
                       bg-listIcon"
                          >
                            Open and honest communication
                          </li>
                          <li
                            className="mb-[12px] pl-[30px]
                       bg-[url(/images/icons/list-icon.svg)] bg-no-repeat
                       bg-listIcon"
                          >
                            Reasonable promises
                          </li>
                          <li
                            className="mb-[12px] pl-[30px]
                       bg-[url(/images/icons/list-icon.svg)] bg-no-repeat
                       bg-listIcon"
                          >
                            Do not use shareable resources or replacements
                            without your permission
                          </li>
                          <li
                            className="mb-[12px] pl-[30px]
                       bg-[url(/images/icons/list-icon.svg)] bg-no-repeat
                       bg-listIcon"
                          >
                            Engage customers throughout the process of delivery
                          </li>
                          <li
                            className="mb-[12px] pl-[30px]
                       bg-[url(/images/icons/list-icon.svg)] bg-no-repeat
                       bg-listIcon"
                          >
                            Secure NDA and SLA around data risk and security
                            protocols
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      ref={HappyCusRef}
                      className={`transition-all
                   pl-[120px] pt-[24px] pb-[96px]
                relative z-10 
                 after:w-[4px] after:bg-[#dedede]
                after:block
                after:absolute after:z-[-10] after:top-[89px] 
                after:left-[43px] after:transition-all
                overflow-hidden ${
                  visibleHappyCus
                    ? "opacity-100 line-animation sm:after:w-0 sm:after:h-0"
                    : "opacity-0"
                }`}
                    >
                      <div className="mb-[32px] absolute top-0 left-0">
                        <svg
                          width="128"
                          height="128"
                          viewBox="0 0 128 128"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="overflow-hidden align-middle w-[70%] h-[70%]"
                        >
                          <circle
                            cx="64"
                            cy="64"
                            r="62"
                            stroke="#DEDEDE"
                            stroke-width="4"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M79.3451 41.7772C77.2915 42.4882 75.1106 42.7521 72.9476 42.5513C71.3329 42.3967 69.7478 42.0152 68.2389 41.4179C68.807 37.184 70.8853 33.3006 74.0884 30.488C77.2915 27.6753 81.4019 26.1242 85.6574 26.1223C89.9129 26.1204 94.0247 27.6679 97.2303 30.4778C100.436 33.2876 102.518 37.1692 103.089 41.4026C101.375 42.0933 99.5604 42.4989 97.7163 42.6032C95.6576 42.7124 93.5983 42.3984 91.6647 41.6804C89.7311 40.9624 87.9639 39.8555 86.4716 38.4275C86.2536 38.2204 85.9648 38.1049 85.6647 38.1049C85.3645 38.1049 85.0758 38.2204 84.8578 38.4275C83.2779 39.9243 81.3987 41.0661 79.3451 41.7772ZM75.985 61.2866C78.5962 62.7538 81.5045 63.6082 84.4917 63.7857V83.2654H66.4444C65.9423 83.262 65.4467 83.1515 64.9905 82.9412C64.5342 82.7309 64.1277 82.4255 63.798 82.0455C63.4682 81.6654 63.2227 81.2193 63.0778 80.7367C62.9329 80.2541 62.8919 79.7461 62.9575 79.2464C63.4371 75.3905 64.8839 71.72 67.1625 68.5787C69.4411 65.4375 72.4767 62.9284 75.985 61.2866ZM97.8289 44.9512C93.4032 45.1849 89.0546 43.7208 85.664 40.8557C83.88 42.3502 81.8198 43.4767 79.6014 44.1706C77.383 44.8645 75.0501 45.1121 72.7362 44.8994C71.1426 44.7486 69.5734 44.402 68.0639 43.8673C68.1561 48.4924 70.051 52.8969 73.3418 56.1352C76.6327 59.3735 81.0571 61.1873 85.6652 61.1873C90.2733 61.1873 94.6977 59.3735 97.9885 56.1352C101.279 52.8969 103.174 48.4924 103.266 43.8673C101.516 44.4904 99.6841 44.8555 97.8289 44.9512ZM92.6296 51.7485C90.7083 53.4558 88.2311 54.3983 85.6652 54.3983C83.0993 54.3983 80.6221 53.4558 78.7007 51.7485C78.5788 51.6481 78.4784 51.5242 78.4052 51.384C78.3321 51.2439 78.2878 51.0904 78.2751 50.9327C78.2624 50.775 78.2814 50.6163 78.331 50.4662C78.3807 50.316 78.46 50.1774 78.5641 50.0587C78.6683 49.9399 78.7952 49.8435 78.9373 49.775C79.0794 49.7066 79.2338 49.6676 79.3912 49.6604C79.5487 49.6531 79.7059 49.6778 79.8537 49.7329C80.0014 49.788 80.1366 49.8724 80.2511 49.9811C81.7438 51.3102 83.6699 52.0442 85.6652 52.0442C87.6604 52.0442 89.5865 51.3102 91.0792 49.9811C91.1938 49.8724 91.3289 49.788 91.4767 49.7329C91.6244 49.6778 91.7817 49.6531 91.9391 49.6604C92.0966 49.6676 92.2509 49.7066 92.3931 49.775C92.5352 49.8435 92.6621 49.9399 92.7662 50.0587C92.8704 50.1774 92.9497 50.316 92.9993 50.4662C93.049 50.6163 93.068 50.775 93.0553 50.9327C93.0425 51.0904 92.9983 51.2439 92.9251 51.384C92.852 51.5242 92.7515 51.6481 92.6296 51.7485ZM104.173 68.5787C106.451 71.72 107.898 75.3905 108.378 79.2464C108.443 79.7466 108.402 80.2551 108.257 80.7381C108.112 81.2211 107.866 81.6675 107.535 82.0477C107.205 82.4278 106.798 82.733 106.341 82.943C105.884 83.1529 105.388 83.2628 104.885 83.2654H86.8436V63.7857C89.8309 63.6088 92.7393 62.7543 95.3503 61.2866C98.8586 62.9284 101.894 65.4375 104.173 68.5787ZM89.7078 78.0593C89.9009 78.1888 90.1278 78.2579 90.3599 78.2579C90.6712 78.2579 90.9697 78.1337 91.1898 77.9128C91.4099 77.6918 91.5336 77.3921 91.5336 77.0796C91.5336 76.8466 91.4647 76.6188 91.3358 76.4251C91.2068 76.2313 91.0235 76.0803 90.809 75.9911C90.5946 75.9019 90.3586 75.8786 90.1309 75.9241C89.9033 75.9695 89.6941 76.0817 89.53 76.2465C89.3659 76.4113 89.2541 76.6212 89.2088 76.8498C89.1635 77.0783 89.1867 77.3152 89.2756 77.5305C89.3644 77.7458 89.5148 77.9298 89.7078 78.0593ZM89.7078 73.3464C89.9009 73.4759 90.1278 73.545 90.3599 73.545C90.6712 73.545 90.9697 73.4208 91.1898 73.1999C91.4099 72.9789 91.5336 72.6792 91.5336 72.3667C91.5336 72.1337 91.4647 71.9059 91.3358 71.7121C91.2068 71.5184 91.0235 71.3674 90.809 71.2782C90.5946 71.189 90.3586 71.1657 90.1309 71.2111C89.9033 71.2566 89.6941 71.3688 89.53 71.5336C89.3659 71.6984 89.2541 71.9083 89.2088 72.1369C89.1635 72.3654 89.1867 72.6023 89.2756 72.8176C89.3644 73.0329 89.5148 73.2169 89.7078 73.3464Z"
                            fill="#00AEEF"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4606 57.8762C46.3391 57.883 50.0712 56.3818 52.8828 53.6839C53.0993 53.4769 53.3863 53.3615 53.6845 53.3615C53.9828 53.3615 54.2697 53.4769 54.4862 53.6839C57.0012 56.072 60.2417 57.5315 63.6816 57.8255C63.3855 53.3559 61.4167 49.1673 58.1746 46.1095C54.9325 43.0518 50.66 41.3539 46.2237 41.3604C41.7874 41.3668 37.5197 43.0771 34.2864 46.1442C31.053 49.2114 29.0961 53.4056 28.8128 57.8762H42.4606ZM52.5912 77.9944C53.712 77.61 54.7963 77.1245 55.8309 76.5436C59.7559 78.3835 63.0794 81.3164 65.4107 84.9978C67.7419 88.6792 68.9841 92.9561 68.9912 97.3258C68.9912 97.6381 68.8683 97.9376 68.6496 98.1585C68.4309 98.3793 68.1343 98.5034 67.825 98.5034H24.6763C24.3671 98.5034 24.0704 98.3793 23.8517 98.1585C23.633 97.9376 23.5102 97.6381 23.5102 97.3258C23.5174 92.9554 24.76 88.6779 27.0919 84.996C29.4238 81.3142 32.7481 78.381 36.674 76.5413C37.7069 77.1221 38.7897 77.6077 39.909 77.9921L45.186 89.8987C45.2778 90.1063 45.4272 90.2826 45.6162 90.4063C45.8051 90.5301 46.0255 90.5959 46.2507 90.5959C46.4759 90.5959 46.6962 90.5301 46.8852 90.4063C47.0741 90.2826 47.2235 90.1063 47.3154 89.8987L52.5912 77.9944ZM32.6985 90.5959H39.6956C40.0049 90.5959 40.3015 90.4718 40.5202 90.2509C40.7389 90.0301 40.8618 89.7306 40.8618 89.4183C40.8618 89.1059 40.7389 88.8064 40.5202 88.5856C40.3015 88.3647 40.0049 88.2407 39.6956 88.2407H32.6985C32.3892 88.2407 32.0926 88.3647 31.8739 88.5856C31.6552 88.8064 31.5323 89.1059 31.5323 89.4183C31.5323 89.7306 31.6552 90.0301 31.8739 90.2509C32.0926 90.4718 32.3892 90.5959 32.6985 90.5959ZM46.2506 86.5342L42.8022 78.7527C45.0817 79.1798 47.4195 79.1798 49.699 78.7527L46.2506 86.5342ZM42.4606 60.2317C46.5651 60.2392 50.5402 58.7819 53.6839 56.1172C56.497 58.5261 60.0042 59.9549 63.6851 60.1917C63.4047 64.6652 61.4485 68.8633 58.2137 71.933C54.979 75.0027 50.7083 76.714 46.2693 76.7191C41.8302 76.7242 37.5557 75.0228 34.3141 71.9604C31.0724 68.8981 29.1067 64.7046 28.8163 60.2317H42.4606ZM46.2507 69.6523C48.8008 69.6523 51.2627 68.7099 53.172 67.0029C53.2868 66.9006 53.3806 66.7764 53.448 66.6375C53.5153 66.4986 53.5549 66.3477 53.5645 66.1934C53.5741 66.039 53.5534 65.8843 53.5038 65.738C53.4542 65.5917 53.3765 65.4567 53.2752 65.3407C53.1739 65.2247 53.0509 65.13 52.9134 65.062C52.7758 64.994 52.6264 64.954 52.4735 64.9443C52.3207 64.9347 52.1674 64.9555 52.0225 65.0056C51.8777 65.0557 51.744 65.1342 51.6291 65.2365C50.146 66.5642 48.2327 67.2974 46.2507 67.2974C44.2687 67.2974 42.3553 66.5642 40.8723 65.2365C40.7574 65.1342 40.6237 65.0557 40.4788 65.0056C40.3339 64.9555 40.1807 64.9347 40.0279 64.9443C39.875 64.954 39.7255 64.994 39.588 65.062C39.4504 65.13 39.3275 65.2247 39.2262 65.3407C39.1249 65.4567 39.0472 65.5917 38.9976 65.738C38.9479 65.8843 38.9273 66.039 38.9369 66.1934C38.9465 66.3477 38.9861 66.4986 39.0534 66.6375C39.1208 66.7764 39.2145 66.9006 39.3294 67.0029C41.2387 68.7099 43.7006 69.6523 46.2507 69.6523Z"
                            fill="#ED145B"
                          />
                        </svg>
                      </div>
                      <div
                        className="lg:text-[32px] font-bold mb-[16px]
                  sm:text-[6vw]"
                      >
                        Happy customers, happy developers
                      </div>
                      <div className="text-[16px] leading-[1.8] font-LightCus">
                        <p>
                          Through every project, we strive to deliver
                          diligently, on time to the specs, and with excellent
                          quality. We hope to be a reliable tech partner,
                          contributing to your success on the road to digital
                          transformation. In this challenging journey, together,
                          we grow and are happy is the solid foundation for a
                          long-lasting relationship.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="text-center bg-[#fafafa] py-[80px]
      overflow-hidden"
        >
          <div
            className="mx-auto xl:px-[120px] sm:px-[24px] 
        lg:px-[64px] max-w-maxContainer box-border"
          >
            <div
              className="font-bold mb-[80px] text-[32px] 
          leading-[1.2]
          "
            >
              <p>
                Don’t just take our word for it.
                <br />
                Hear what our clients say.
              </p>
            </div>
            <div
              className="flex justify-center flex-nowrap 
            items-center
          m-autoWWD text-center"
            >
              <div
                className="max-w-[284px] m-0 border-0
            block pt-[1.5rem]"
              >
                <iframe
                  id="iframe-0.08710385408125387"
                  width="100%"
                  src="https://widget.clutch.co/widgets/get/3?ref_domain=enlabsoftware.com&amp;uid=1469288&amp;ref_path=/"
                  height="380px"
                  title="bcEmpty3"
                ></iframe>
              </div>
              <div className="max-w-[320px] ">
                <iframe
                  id="iframe-0.8927804928938616"
                  width="100%"
                  height="380px"
                  scrolling="no"
                  src="https://widget.goodfirms.co?cid=55629&amp;wt=goodfirms-widget-t7&amp;wp=carousel-basic"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-[80px] overflow-x-hidden">
          <div
            className="mx-auto xl:px-[120px] sm:px-[24px] 
        lg:px-[64px] max-w-maxContainer box-border"
          >
            <div className="flex flex-wrap">
              <div
                className="lg:flex-flexOTWorks lg:max-w-[33.3%]
                lg:pr-pThinkWithE
                sm:text-center sm:flex-WhySM sm:max-w-full
                sm:mb-[80px] sm:pr-0
                lb:mb-0 lg:text-left"
              >
                <h2
                  className="lg:text-[48px]
              sm:text-[8vw]
              font-bold"
                >
                  Think with Enlab
                </h2>
                <p
                  className="font-LightCus mb-[10px]
              lg:text-[1rem]
              sm:text-[6vw]"
                >
                  Diving deep into the ocean of technology!
                </p>
                <a
                  href=""
                  className="font-bold text-[#00aeef]
              lg:text-[1rem]
              sm:text-[4vw]"
                >
                  View all blog posts →
                </a>
              </div>
              <div className="basis-[0%] grow-[1] max-w-full">
                <div
                  className="flex flex-wrap justify-between
                sm:max-w-full sm:m-autoWWD
                lg:max-w-none lg:m-0"
                >
                  <div
                    className="lg:flex-flexThinkWE relative z-10
                  md:flex-flexThinkWEMD
                pb-pThinkWithEPic text-[#0c152a] max-w-full
                sm:mb-[48px] sm:max-w-full sm:flex-WhySM"
                  >
                    <a
                      href=""
                      className="relative h-0 block pb-[56%]
bg-[#c4c4c4] rounded-ThinkWithERa overflow-hidden mb-[24px]"
                    >
                      <Image
                        src="/images/layout/think-1.jpeg"
                        className="transition-all object-cover absolute
                      h-full w-full top-0 left-0 max-w-full align-middle"
                        alt="Enlab - How to manage a dedicated team 
                      effectively with our best practices"
                        width={800}
                        height={60}
                      />
                    </a>
                    <div
                      className="text-[14px] mb-[10px] font-LightCus
                  lg:text-[1rem]
                  sm:text-[2vw]"
                    >
                      March 07,2023 by
                      <a href="" className="text-[#00aeef]">
                        {" "}
                        Hien Dang
                      </a>
                    </div>
                    <h3
                      className="lg:text-[18px] font-bold mb-[18px]
                  sm:text-[4vw] md:text-[2vw]
                  "
                    >
                      <a href="">
                        How to manage a dedicated team effectively with our
                        practical strategies
                      </a>
                    </h3>
                    <div className="font-LightCus">
                      Project management is similar to a circus balancing act.
                      However, achieving balance does not require magic, just
                      focus, ...
                    </div>
                    <div
                      className="absolute bottom-0 left-0
                  text-[#00aeef] font-bold"
                    >
                      <a href="" className="font-bold text-[#00aeef]">
                        Read more →
                      </a>
                    </div>
                  </div>
                  <div
                    className="lg:flex-flexThinkWE relative z-10
                  md:flex-flexThinkWEMD
                pb-pThinkWithEPic text-[#0c152a] max-w-full
                sm:mb-[48px] sm:max-w-full sm:flex-WhySM"
                  >
                    <a
                      href=""
                      className="relative h-0 block pb-[56%]
bg-[#c4c4c4] rounded-ThinkWithERa overflow-hidden mb-[24px]"
                    >
                      <Image
                        src="/images/layout/think-2.jpg"
                        className="transition-all object-cover absolute
                      h-full w-full top-0 left-0 max-w-full align-middle"
                        alt="Enlab - How to manage a dedicated team 
                      effectively with our best practices"
                        width={800}
                        height={60}
                      />
                    </a>
                    <div
                      className="text-[14px] mb-[10px] font-LightCus
                  lg:text-[1rem]
                  sm:text-[2vw]"
                    >
                      January 17,2023 by
                      <a href="" className="text-[#00aeef]">
                        {" "}
                        Hien Dang
                      </a>
                    </div>
                    <h3
                      className="lg:text-[18px] font-bold mb-[18px]
                  sm:text-[4vw] md:text-[2vw]
                  "
                    >
                      <a href="">
                        Enlab Software recognized by GoodFirms as the Best
                        Company to Work With
                      </a>
                    </h3>
                    <div className="font-LightCus">
                      Leveraging the latest technologies, trending programming
                      languages, and advanced development frameworks help build
                      innovative software solutions. This enables businesses ...
                    </div>
                    <div
                      className="absolute bottom-0 left-0
                  text-[#00aeef] font-bold"
                    >
                      <a href="" className="font-bold text-[#00aeef]">
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
