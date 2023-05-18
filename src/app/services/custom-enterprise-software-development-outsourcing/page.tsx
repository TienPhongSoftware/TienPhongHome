"use client";
import React from "react";
import dynamic from "next/dynamic";
import PageWrapper from "../../components/PageWrapper";
import Banner from "./Banner";
import Customization from "./Customization";
import OurServices from "./OurServices";
import WePut from "./WePut";
import Cutting from "./Cutting";
import AlmostLast from "./AlmostLast";
import Last from "./Last";

function Home() {
  return (
    <PageWrapper headerType="pages" footerType="footerBig">
      <Banner />
      <main className="bg-white min-h-[80vh] text-black">
        <Customization />
        <OurServices />
        <WePut />
        <Cutting />
        <AlmostLast />
        <Last />
      </main>
    </PageWrapper>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
