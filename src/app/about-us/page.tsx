"use client";
import React from "react";
import dynamic from "next/dynamic";
import PageWrapper from "../components/PageWrapper";
import Banner from "./0.Banner";
import AgileOffshore from "./1.AgileOffshore";
import OneTeam from "./2.OneTeam";
import OurQuality from "./3.OurQuality";
import OurApproach from "./4.OurApproach";
import LastContent from "./5.LastContent";

function Home() {
  return (
    <PageWrapper headerType="pages">
      <Banner />
      <div className="min-h-[80vh] bg-white">
        <AgileOffshore />
        <OneTeam />
        <OurQuality />
        <OurApproach />
        <LastContent />
      </div>
    </PageWrapper>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
