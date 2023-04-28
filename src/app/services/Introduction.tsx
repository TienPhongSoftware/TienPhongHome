import React from "react";
import Image from "next/image";

function Introduction() {
  return (
    <section className="p-ServicesP1">
      <div
        className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
mx-auto max-w-maxContainer overflow-hidden"
      >
        <div
          className="mb-[25px] lg:p-[48px] bg-white rounded-[16px] text-white
        sm:p-0
        "
        >
          <div className="max-w-full flex justify-between flex-wrap">
            <div
              className="md:relative md:pl-ServicesP2 md:min-h-[350px]
              text-black
          p-ServicesP3 pb-[30px]"
              data-aos="fade-left"
            >
              <a
                href=""
                className="overflow-hidden block mb-4
            md:rounded-ServicesPhoto md:mx-0 sm:mx-[-16px] pb-[59%] h-0
            md:left-0 md:absolute md:w-ServicePhoto md:pb-0 md:h-full relative
            "
              >
                <Image
                  className="absolute object-cover w-full h-full transition-all
              duration-[0.7s] ease-out top-0 left-0 
              sm:rounded-ServicesPhotoSM
              lg:rounded-ServicesPhoto max-w-full"
                  src="/images/layout/services-1.jpg"
                  alt="Services Photo"
                  width={600}
                  height={400}
                />
              </a>
              <div
                className="md:mb-[24px] sm:mb-[16px] 
              hover:text-[#00aeef]"
              >
                <a
                  href=""
                  className="font-bold lg:text-[48px] leading-[1.3] text-black
                 sm:text-[5vw] 
                 md:text-[3vw]"
                >
                  Web Application Development
                </a>
              </div>
              <div className="font-LightCus md:mb-[24px]">
                We provide full-cycle custom web app development for
                enterprises, startups, and agencies with several tech stacks
                like .NET, Angular, Python, Vue.js, and cloud platforms. Based
                on Agile iterative development, we enable the highest
                collaboration with clients and offer high consistency and
                quality.
              </div>
              <div className="relative bottom-[-10]">
                <a
                  href=""
                  className="text-[#00aeef] leading-[24px] text-[16px] font-bold"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mb-[25px] lg:p-[48px] bg-white rounded-[16px] text-white
        sm:p-0
        "
        >
          <div className="max-w-full flex justify-between flex-wrap">
            <div
              className="md:relative md:pl-ServicesP2 md:min-h-[350px]
              text-black
          p-ServicesP3 pb-[30px]"
              data-aos="fade-left"
            >
              <a
                href=""
                className="overflow-hidden block mb-4
            md:rounded-ServicesPhoto md:mx-0 sm:mx-[-16px] pb-[59%] h-0
            md:left-0 md:absolute md:w-ServicePhoto md:pb-0 md:h-full relative
            "
              >
                <Image
                  className="absolute object-cover w-full h-full transition-all
              duration-[0.7s] ease-out top-0 left-0 
              sm:rounded-ServicesPhotoSM
              lg:rounded-ServicesPhoto max-w-full"
                  src="/images/layout/services-2.png"
                  alt="Services Photo"
                  width={600}
                  height={400}
                />
              </a>
              <div
                className="md:mb-[24px] sm:mb-[16px] 
              hover:text-[#00aeef]"
              >
                <a
                  href=""
                  className="font-bold lg:text-[48px] leading-[1.3] text-black
                 sm:text-[5vw] 
                 md:text-[3vw]"
                >
                  Flutter App Development
                </a>
              </div>
              <div className="font-LightCus md:mb-[24px]">
                We offer a holistic approach to designing and developing mobile
                applications based on cross-platform technologies like Flutter.
                It’s where you can produce high-performing applications in
                record time from one single codebase.
              </div>
              <div className="relative bottom-[-10]">
                <a
                  href=""
                  className="text-[#00aeef] leading-[24px] text-[16px] font-bold"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mb-[25px] lg:p-[48px] bg-white rounded-[16px] text-white
        sm:p-0
        "
        >
          <div className="max-w-full flex justify-between flex-wrap">
            <div
              className="md:relative md:pl-ServicesP2 md:min-h-[350px]
              text-black
          p-ServicesP3 pb-[30px]"
              data-aos="fade-left"
            >
              <a
                href=""
                className="overflow-hidden block mb-4
            md:rounded-ServicesPhoto md:mx-0 sm:mx-[-16px] pb-[59%] h-0
            md:left-0 md:absolute md:w-ServicePhoto md:pb-0 md:h-full relative
            "
              >
                <Image
                  className="absolute object-cover w-full h-full transition-all
              duration-[0.7s] ease-out top-0 left-0 
              sm:rounded-ServicesPhotoSM
              lg:rounded-ServicesPhoto max-w-full"
                  src="/images/layout/services-3.jpg"
                  alt="Services Photo"
                  width={600}
                  height={400}
                />
              </a>
              <div
                className="md:mb-[24px] sm:mb-[16px] 
              hover:text-[#00aeef]"
              >
                <a
                  href=""
                  className="font-bold lg:text-[48px] leading-[1.3] text-black
                 sm:text-[5vw] 
                 md:text-[3vw]"
                >
                  Software Customization & Enhancement
                </a>
              </div>
              <div className="font-LightCus md:mb-[24px]">
                We build custom technical solutions tailored to your specific
                business requirements. The services span customizing commercial
                off-the-shelf software to your unique operational needs,
                modernizing your legacy systems, optimizing your application
                performance, and rescuing poorly-delivered projects.
              </div>
              <div className="relative bottom-[-10]">
                <a
                  href=""
                  className="text-[#00aeef] leading-[24px] text-[16px] font-bold"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
