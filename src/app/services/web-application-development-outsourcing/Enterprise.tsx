import React from "react";

function Enterprise() {
  return (
    <section className="text-center md:py-[120px] sm:py-[48px] bg-[#f8f9fb] text-black overflow-hidden">
      <div
        className="sm:max-w-maxPartnerSM sm:px-[24px]
      md:max-w-maxEnterprise md:px-[64px]
      lg:max-w-maxEnterpriseLG lg:px-[120px] 
      mx-auto 
      "
      >
        <h2
          className="font-bold mb-[48px]
          xl:text-[48px] 
          lg:text-[4.1vw]
          md:text-[5.2vw]
          sm:text-[10.3vw]
          "
          data-aos="fade-up"
          data-aos-offset="-300"
        >
          Enterprise applications tailored <br /> for your needs
        </h2>
        <div
          className="xl:text-[18px]
          font-ThinCus
          "
          data-aos="fade-up"
          data-aos-offset="-300"
          data-aos-delay="100"
        >
          As a reliable companion on your digital transformation journey, we put
          our efforts on building a comprehensive enterprise application that is
          professional inside out, empowering every part of your value chain.
          Whether it is a stunning e-commerce store or a cloud-based platform
          which helps to improve the efficiency of production, logistics,
          operation, marketing and sales, we have you covered.{" "}
        </div>
      </div>
    </section>
  );
}

export default Enterprise;
