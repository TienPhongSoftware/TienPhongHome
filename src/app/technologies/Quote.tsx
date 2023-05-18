import React from "react";

function Quote() {
  return (
    <section className="block">
      <div className="bg-QuoteTech md:pb-[58px] md:mb-[-59px] p-QuoteTech z-20 relative">
        <div
          className="md:p-QuoteTechIn md:text-[24px] bg-[#00aeef] shadow-md rounded-IntroMem text-white max-w-[984px] w-full m-autoWWD
          sm:p-16px24px sm:text-[16px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-center font-ThinCus">
            {" "}
            <em>
              You can reach out and tell us about your development plan. We will
              consult the options most suited to your business needs, helping
              you address your business challenges and accelerate time to
              market.
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Quote;
