import React from "react";
import Image from "next/image";

function OurApproach() {
  return (
    <section className="py-[96px]">
      <div
        className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
mx-auto lg:max-w-maxPartner sm:max-w-maxPartnerSM"
      >
        <h2
          className="mb-[56px] font-bold
        lg:text-[3vw] sm:text-[9vw] md:text-[6vw]"
        >
          Our Approach
        </h2>
        <div className="flex justify-between flex-wrap">
          <div
            className="w-AboutUsRowWidth lg:flex-AboutUsRowFlex
            max-w-full sm:flex-WhySM
            "
          >
            <div className="mb-[48px] w-full">
              <h3
                className="font-bold 
                    lg:text-[1.5vw] sm:text-[4vw] 
                    md:text-[2.5vw] mb-[24px]"
              >
                Result-driven
              </h3>
              <p
                className="font-LightCus mb-[32px]
              lg:text-[1.1vw] sm:text-[4vw] 
              md:text-[2.5vw]"
              >
                We’re obsessed with driving business value for our clients. In
                the initial phases, we spend time to carefully clarify and break
                down your project requirements to gain a deep understanding of
                the problems you are facing. Combined with our industry
                knowledge, we strive for the optimal solutions that could create
                the highest impact on your business and your audience.
              </p>
            </div>
            <div className="mb-[48px] w-full">
              <h3
                className="font-bold 
                    lg:text-[1.5vw] sm:text-[4vw] 
                    md:text-[2.5vw] mb-[24px]"
              >
                Continuous delivery
              </h3>
              <p
                className="font-LightCus mb-[32px]
              lg:text-[1.1vw] sm:text-[4vw] 
              md:text-[2.5vw]"
              >
                Continuous delivery is enabled through our deployment pipeline
                to ensure visibility, instant feedback, and continuous
                deployment.
              </p>
              <Image
                src="/images/layout/about-us-1.svg"
                className="h-auto max-w-full m-auto"
                alt="Member"
                width={442}
                height={400}
              />
            </div>
            <div className="mb-[48px] w-full">
              <h3
                className="font-bold 
                    lg:text-[1.5vw] sm:text-[4vw] 
                    md:text-[2.5vw] mb-[24px]"
              >
                Strive to gain testing and customer feedback early
              </h3>
              <p
                className="font-LightCus mb-[32px]
              lg:text-[1.1vw] sm:text-[4vw] 
              md:text-[2.5vw]"
              >
                Customer feedback is a critical part of the delivery lifecycle,
                and we facilitate your continuous feedback from the early
                phases. It enables our teams to respond quickly to changes,
                mitigate risks early and adjust priorities as appropriate. Our
                team is friendly and professional. You could communicate
                directly to resolve any concerns instantly.
              </p>
            </div>
          </div>
          <div
            className="w-AboutUsRowWidth lg:flex-AboutUsRowFlex
            max-w-full sm:flex-WhySM
            "
          >
            <div className="mb-[48px] w-full">
              <h3
                className="font-bold 
                    lg:text-[1.5vw] sm:text-[4vw] 
                    md:text-[2.5vw] mb-[24px]"
              >
                Establish a collaborative environment
              </h3>
              <p
                className="font-LightCus mb-[32px]
              lg:text-[1.1vw] sm:text-[4vw] 
              md:text-[2.5vw]"
              >
                Poor communication can result in poor artifact handoffs,
                additional costs, and project delays. We organize the team for
                the best communication toward the shared goal of improved
                software delivery. We also develop our own management tools for
                team members to exchange ideas, plan, organize tasks, and track
                progress.
              </p>
            </div>
            <div className="mb-[48px] w-full">
              <h3
                className="font-bold 
                    lg:text-[1.5vw] sm:text-[4vw] 
                    md:text-[2.5vw] mb-[24px]"
              >
                Build trust through each iteration
              </h3>
              <p
                className="font-LightCus mb-[32px]
              lg:text-[1.1vw] sm:text-[4vw] 
              md:text-[2.5vw]"
              >
                We work at our best to deliver the excellent outcomes that meet
                your expectations. But also, we set the complete transparency
                between us and are open even when things aren’t going smoothly.
                And of course, we own the responsibility for everything we do.
              </p>
            </div>
            <div className="mb-[48px] w-full">
              <h3
                className="font-bold 
                    lg:text-[1.5vw] sm:text-[4vw] 
                    md:text-[2.5vw] mb-[24px]"
              >
                Improve the speed of application delivery
              </h3>
              <p
                className="font-LightCus mb-[32px]
              lg:text-[1.1vw] sm:text-[4vw] 
              md:text-[2.5vw]"
              >
                As agile development entered the mainstream and evolved, this
                led to the evolution of DevOps. To faster the speed of delivery
                and eliminate errors when deploying to multiple environments, we
                apply DevOps practices within our delivery management.
              </p>
              <Image
                src="/images/layout/about-us-2.svg"
                className="h-auto max-w-full m-auto"
                alt="Member"
                width={442}
                height={400}
              />
            </div>
            <div className="mb-[48px] w-full">
              <h3
                className="font-bold 
                    lg:text-[1.5vw] sm:text-[4vw] 
                    md:text-[2.5vw] mb-[24px]"
              >
                Keep improving
              </h3>
              <p
                className="font-LightCus mb-[32px]
              lg:text-[1.1vw] sm:text-[4vw] 
              md:text-[2.5vw]"
              >
                The world of technology is moving fast. The business expects us
                to act with speed and flexibility. As a result, we’re always
                learning and honing our skills to improve the overall
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurApproach;
