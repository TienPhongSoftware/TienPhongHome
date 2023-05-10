import React from "react";

function WePut() {
  return (
    <section
      className="bg-[url(/images/layout/CustomEnterprise.jpg)] 
    py-[120px] z-10 relative bg-cover bg-fixed text-black
    after:absolute
    after:-z-10
    after:bg-WePut
    after:object-cover
    after:h-full
    after:w-full
    after:top-0
    after:left-0
    "
    >
      <div
        className=" sm:px-[24px]
      md:px-[64px]
      lg:px-[120px] 
      max-w-maxContainer 
      mx-auto 
      "
      >
        <div className="py-[48px] max-w-[700px]">
          <h3
            className="text-white font-bold 
            xl:text-[48px]
            lg:text-[4.1vw]
            md:text-[5.2vw]
            sm:text-[10.3vw]
            mb-[.5rem]
            "
          >
            We Put Quality First!
          </h3>
          <div
            className="
            text-white leading-[1.8]
          xl:text-[18px]
          lg:text-[1.5vw]
          md:text-[3vw]
          sm:text-[4vw]
          font-ThinCus
          "
          >
            You can’t buy confidence. But together, we could team up to build
            confidence through the quality of delivery.
          </div>
        </div>
      </div>
    </section>
  );
}

export default WePut;
