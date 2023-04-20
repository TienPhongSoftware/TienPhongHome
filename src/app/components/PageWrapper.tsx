"use client";
import React from "react";
import dynamic from "next/dynamic";
import Header from "./Header";
import Footer from "./Footer";
import HeaderPages from "./HeaderPages";
import FooterBig from "./FooterBig";
import AOS from "./aos";

const DynamicAOS = dynamic(() => Promise.resolve(AOS), {
  ssr: false,
});

type HeaderType = "default" | "pages";
type FooterType = "default" | "footerBig";

interface PageWrapperProps {
  headerType?: HeaderType;
  footerType?: FooterType;
  children: React.ReactNode;
}

function PageWrapper({
  headerType = "default",
  footerType = "default",
  children,
}: PageWrapperProps) {
  const HeaderComponent =
    headerType === "pages"
      ? HeaderPages
      : headerType === "default"
      ? Header
      : null;

  const FooterComponent =
    footerType === "footerBig"
      ? FooterBig
      : footerType === "default"
      ? Footer
      : null;

  return (
    <>
      <DynamicAOS />
      {HeaderComponent && <HeaderComponent />}
      {children}
      {FooterComponent && <FooterComponent />}
    </>
  );
}

export default PageWrapper;
