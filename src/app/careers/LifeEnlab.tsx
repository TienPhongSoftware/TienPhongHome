import React from "react";
import SlideShow from "./SlideCareers";

function LifeEnlab() {
  return (
    <section className="lg:py-[128px] sm:py-[48px] md:py-[64px] block">
      <div
        className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
            max-w-maxContainer 
          mx-auto"
      >
        <h3
          className="mb-[24px] font-bold 
        lg:text-[48px] sm:text-[10.3vw] md:text-[5.2vw]
         leading-[1.2] break-words"
        >
          #Life@Enlab
        </h3>
      </div>
      <div className="mt-[48px]">
        <SlideShow />
      </div>
    </section>
  );
}

export default LifeEnlab;
