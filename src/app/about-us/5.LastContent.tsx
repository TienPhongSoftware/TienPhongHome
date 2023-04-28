import React from "react";
import Image from "next/image";

function LastContent() {
  return (
    <section>
      <div
        className="relative z-10
      after:bg-[#f8f9fb] after:h-[50%] after:w-full after:bottom-0 
      after:absolute after:-z-10
      "
      >
        <div
          className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
mx-auto lg:max-w-maxPartner sm:max-w-maxPartnerSM
"
        >
          <div
            className="bg-white shadow-lg rounded-IntroMem
            lg:p-AboutUsQuote sm:p-AboutUsQuoteSM text-center
            mx-auto"
          >
            <p
              className="font-ThinCus italic
                sm:text-[5.5vw] md:text-[2.5vw]
                lg:text-[2vw] xl:text-[1.5vw]"
            >
              “All in all, we put our mind, our heart, our instinct, and our
              philosophy to bring you the highest-quality software with the most
              rapid delivery and the affordable cost.”
            </p>
          </div>
        </div>
      </div>
      <section className="py-[96px] text-center bg-[#f8f9fb]">
        <div
          className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
mx-auto lg:max-w-maxPartner sm:max-w-maxPartnerSM
"
        >
          <h3
            className="font-bold mb-[40px] text-[32px]
            "
          >
            Great partners who trust us
          </h3>
          <div
            className="flex justify-between items-center
          flex-wrap"
          >
            <div
              className="lg:flex-flexABUsPartners sm:flex-WhySM
            lg:max-w-maxAboutUsPartners sm:max-w-full lg:mb-[24px] sm:mb-[48px] text-center
            "
            >
              <a href="">
                <Image
                  src="/images/logo/about-us-partner-1.jpg"
                  className="object-contain transition-all
                duration-300 ease-out max-w-full align-middle
                filter grayscale max-h-[100px] hover:grayscale-0
                "
                  alt="Member"
                  width={442}
                  height={400}
                />
              </a>
            </div>
            <div
              className="lg:flex-flexABUsPartners sm:flex-WhySM
            lg:max-w-maxAboutUsPartners sm:max-w-full lg:mb-[24px] sm:mb-[48px] text-center
            "
            >
              <a href="">
                <Image
                  src="/images/logo/about-us-partner-2.jpg"
                  className="object-contain transition-all
                duration-300 ease-out max-w-full align-middle
                filter grayscale max-h-[100px] hover:grayscale-0
                "
                  alt="Member"
                  width={442}
                  height={400}
                />
              </a>
            </div>
            <div
              className="lg:flex-flexABUsPartners sm:flex-WhySM
            lg:max-w-maxAboutUsPartners sm:max-w-full lg:mb-[24px] sm:mb-[48px] text-center
            "
            >
              <a href="">
                <Image
                  src="/images/logo/about-us-partner-3.jpg"
                  className="object-contain transition-all
                duration-300 ease-out max-w-full align-middle
                filter grayscale max-h-[100px] hover:grayscale-0 
                "
                  alt="Member"
                  width={442}
                  height={400}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default LastContent;
