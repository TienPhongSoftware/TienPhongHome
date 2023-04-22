"use client ";
import React from "react";
import dynamic from "next/dynamic";
import PageWrapper from "../components/PageWrapper";
import BannerTech from "./bannerTech";
import OneStop from "./OneStop";
import TechWeUse from "./TechWeUse";
import Quote from "./Quote";
import DomainWeExperience from "./DomainWeExperience";
import WhyChoose from "./WhyChoose";

function Technologies() {
  return (
    <div>
      <PageWrapper headerType="pages" footerType="footerBig">
        <BannerTech />
        <div className="min-h-[80vh] bg-white">
          <OneStop />
          <TechWeUse />
          <Quote />
          <DomainWeExperience />
          <WhyChoose />
        </div>
      </PageWrapper>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Technologies), {
  ssr: false,
});
