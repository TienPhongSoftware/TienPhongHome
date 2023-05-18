import React from "react";
import PageWrapper from "../components/PageWrapper";
import ContactForm from "./ContactForm";
import MapComponent from "./Map";

function contactUs() {
  return (
    <div>
      <PageWrapper headerType="contact" footerType="contact">
        <main className="min-h-[80vh] bg-white">
          <ContactForm />
          <MapComponent />
        </main>
      </PageWrapper>
    </div>
  );
}

export default contactUs;
