"use client";
import React from "react";
import dynamic from "next/dynamic";
import PageWrapper from "../../components/PageWrapper";
import Banner from "./banner";
import Enterprise from "./Enterprise";
import Middle from "./Middle";
import Projects from "./Projects";

function Home() {
  return (
    <PageWrapper headerType="pages" footerType="footerBig">
      <Banner />
      <main className="bg-white min-h-[80vh] text-black">
        <Enterprise />
        <Middle />
        <Projects />
      </main>
    </PageWrapper>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
