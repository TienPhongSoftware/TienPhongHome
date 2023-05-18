"use client ";
import React from "react";
import dynamic from "next/dynamic";
import PageWrapper from "../components/PageWrapper";
import BannerCareers from "./bannerCareers";
import TheDefinition from "./TheDefinition";
import TheWhy from "./theWhy";
import Besides from "./Besides";
import OurCore from "./OurCore";
import LifeEnlab from "./LifeEnlab";
import Start from "./Start";

function Technologies() {
  return (
    <div>
      <PageWrapper headerType="pages">
        <BannerCareers />
        <div className="min-h-[80vh] bg-white overflow-hidden">
          <TheDefinition />
          <TheWhy />
          <Besides />
          <OurCore />
          <LifeEnlab />
          <Start />
        </div>
      </PageWrapper>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Technologies), {
  ssr: false,
});
