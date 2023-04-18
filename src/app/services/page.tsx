"use client";
import React from "react";
import dynamic from "next/dynamic";
import RootLayout from "../layout";
import PageWrapper from "../components/PageWrapper";
import Banner from "./banner";
import Introduction from "./Introduction";

function Home() {
  return (
    <PageWrapper headerType="pages" footerType="footerBig">
      <Banner />
      <main className="bg-white">
        <Introduction />
      </main>
    </PageWrapper>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
