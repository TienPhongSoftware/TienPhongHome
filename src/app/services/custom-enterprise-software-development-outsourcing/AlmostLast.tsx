import React from "react";
import Image from "next/image";

function AlmostLast() {
  return (
    <section>
      <div
        className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
  max-w-maxContainer 
mx-auto"
      >
        <div className="flex flex-wrap justify-between">
          <div
            className="
            mb-[96px]
            lg:max-w-AlmostLast
            lg:flex-AlmostLast
            md:max-w-AlmostLastMD
            md:flex-AlmostLastMD
            sm:max-w-full
            sm:flex-WhySM
            "
          >
            <span className="block mb-[16px]">
              <Image
                width={96}
                height={96}
                alt="Agile"
                src="/images/icons/Enterprise-1.svg"
              />
            </span>
            <h3
              className="font-bold 
            xl:text-[24px]
            lg:text-[2.1vw]
            md:text-[2.7vw]
            sm:text-[5.2vw]
            mb-[16px]
            leading-[1.2]
            "
            >
              Access to Agile Management’s benefits
            </h3>
            <div
              className="
              text-black
              leading-[1.8]
            font-ThinCus
            xl:text-[15px]
            lg:text-[1.4vw]
            md:text-[1.8vw]
            sm:text-[4vw]
            "
            >
              We put Agile at the heart of our management to give our clients’
              participation a high priority from the very beginning of the
              development cycle. The open involvement allows us to catch defects
              and make changes throughout the process quickly. In the end, we
              end up with goal-based products that clients are happy, which
              saves them time, money, and even worries.
            </div>
          </div>

          <div
            className="
            mb-[96px]
            lg:max-w-AlmostLast
            lg:flex-AlmostLast
            md:max-w-AlmostLastMD
            md:flex-AlmostLastMD
            sm:max-w-full
            sm:flex-WhySM
            "
          >
            <span className="block mb-[16px]">
              <Image
                width={96}
                height={96}
                alt="Agile"
                src="/images/icons/Enterprise-2.svg"
              />
            </span>
            <h3
              className="font-bold 
            xl:text-[24px]
            lg:text-[2.1vw]
            md:text-[2.7vw]
            sm:text-[5.2vw]
            mb-[16px]
            leading-[1.2]
            "
            >
              Clean and maintainable code base
            </h3>
            <div
              className="
              text-black
              leading-[1.8]
            font-ThinCus
            xl:text-[15px]
            lg:text-[1.4vw]
            md:text-[1.8vw]
            sm:text-[4vw]
            "
            >
              Even bad code can function. But poorly written code could destroy
              countless hours and resources in our development efforts and bring
              a great deal of potential hidden damages to customer’s business.
              Every day, we strive to raise our professional values via our
              software craftsman. {"It's"} a win-win situation where we could
              build trust with customers, and in the meantime, we also become
              better programmers.
            </div>
          </div>

          <div
            className="
            mb-[96px]
            lg:max-w-AlmostLast
            lg:flex-AlmostLast
            md:max-w-AlmostLastMD
            md:flex-AlmostLastMD
            sm:max-w-full
            sm:flex-WhySM
            "
          >
            <span className="block mb-[16px]">
              <Image
                width={96}
                height={96}
                alt="Agile"
                src="/images/icons/Enterprise-3.svg"
              />
            </span>
            <h3
              className="font-bold 
            xl:text-[24px]
            lg:text-[2.1vw]
            md:text-[2.7vw]
            sm:text-[5.2vw]
            mb-[16px]
            leading-[1.2]
            "
            >
              Test more and worry less
            </h3>
            <div
              className="
              text-black
              leading-[1.8]
            font-ThinCus
            xl:text-[15px]
            lg:text-[1.4vw]
            md:text-[1.8vw]
            sm:text-[4vw]
            "
            >
              Testing is critical to the quality of delivery. Based on the
              essence of each project, we could provide manual testing,
              automation testing, and performance testing to flexibly fit your
              projects’ requirements as well as your budgets.
            </div>
          </div>

          <div
            className="
            mb-[96px]
            lg:max-w-AlmostLast
            lg:flex-AlmostLast
            md:max-w-AlmostLastMD
            md:flex-AlmostLastMD
            sm:max-w-full
            sm:flex-WhySM
            "
          >
            <span className="block mb-[16px]">
              <Image
                width={96}
                height={96}
                alt="Agile"
                src="/images/icons/Enterprise-4.svg"
              />
            </span>
            <h3
              className="font-bold 
            xl:text-[24px]
            lg:text-[2.1vw]
            md:text-[2.7vw]
            sm:text-[5.2vw]
            mb-[16px]
            leading-[1.2]
            "
            >
              Ongoing maintenance and support
            </h3>
            <div
              className="
              text-black
              leading-[1.8]
            font-ThinCus
            xl:text-[15px]
            lg:text-[1.4vw]
            md:text-[1.8vw]
            sm:text-[4vw]
            "
            >
              We treasure long-lasting relationships, so our partnership doesn’t
              end after delivery. We are willing to support you with minor
              issues. To mitigate the significant risks, we offer tailored
              maintenance and support packages via SLAs. Our efforts will focus
              on keeping your product stable and secure with comprehensive plans
              for backup and data recovery.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlmostLast;
