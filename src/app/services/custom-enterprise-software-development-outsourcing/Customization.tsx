import React from "react";

function Customization() {
  return (
    <section className="text-center md:py-[120px] sm:py-[48px] bg-[#f8f9fb] text-black overflow-hidden">
      <div
        className="
        sm:px-[24px]
      md:px-[64px]
      lg:px-[120px] 
      max-w-maxContainer 
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
          Customization and enhancement <br /> on demand
        </h2>
        <div
          className="
          xl:text-[18px]
          lg:text-[1.7vw]
          md:text-[2.8vw]
          sm:text-[3.1vw]
          font-ThinCus
          "
          data-aos="fade-up"
          data-aos-offset="-300"
          data-aos-delay="100"
        >
          Digital transformation is a fundamental business strategy that helps
          your company not only survive but also thrive. During this journey,
          you might likely need tailor-made software that fits your exact
          business specifications or reengineering of your existing software
          projects. Whatever it is, we have you covered.{" "}
        </div>
      </div>
    </section>
  );
}

export default Customization;
