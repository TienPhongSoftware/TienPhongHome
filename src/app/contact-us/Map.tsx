import React from "react";

function MapComponent() {
  return (
    <div className="flex flex-wrap">
      <div className="basis-0 grow max-w-full">
        <div
          className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
py-[120px]
    max-w-ContainerContact 
  mx-auto"
        >
          <h2
            className="font-bold text-center 
    lg:text-[32px] text-[#818181] 
    mb-[40px] sm:text-[7vw] md:text-[3vw] leading-[1.2] break-words"
          >
            A tech company. Based in the heart of Danang, Vietnam
          </h2>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9316774213175!2d108.20266127586218!3d16.069034839441738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142184c4d66e77b%3A0x63e8f54b493a559f!2zNDIzIEjhuqNpIFBow7JuZywgQ2jDrW5oIEdpw6FuLCBUaGFuaCBLaMOqLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683542336639!5m2!1svi!2s"
            width="100%"
            height="450"
            className="w-full block"
            allowFullScreen
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
