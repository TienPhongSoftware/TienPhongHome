"use client ";
import React from "react";
import PageWrapper from "../components/PageWrapper";
import BannerWorks from "./bannerWorks";
import TabsWorks from "./tabsWorks";

function works() {
  return (
    <div>
      <PageWrapper headerType="pages" footerType="footerBig">
        <BannerWorks />
        <div className="min-h-[80vh] bg-white">
          <TabsWorks />
        </div>
      </PageWrapper>
    </div>
  );
}

export default works;
