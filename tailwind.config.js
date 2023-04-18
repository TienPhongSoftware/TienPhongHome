/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "0px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Gilroy", "Helvetica", "sans-serif"],
      ThinCus: ["Gilroy-Thin", "Helvetica-Thin", "sans-serif"],
      LightCus: ["Gilroy-Light", "Helvetica-Light", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-blue":
          "linear-gradient(180deg, #00aeef 0, #0094de 100%), #f8f9fb;",
        FooterBigTop:
          "linear-gradient(143.38deg,#00aeef 0,#005195 100%),linear-gradient(323.42deg,#130086 0,#96013c 101.12%)",
        filterBannerPages:
          "linear-gradient(180deg,rgba(12,21,42,.7) 48.85%,rgba(12,21,42,.7) 100%)",
      },
      padding: {
        "16px24px": "16px 24px",
        "5rem1rem": "5rem 1rem",
        pbImgOTWork: "calc(76% / 2 - 24px)",
        pbImgLittleOTWork: "calc(76% / 2)",
        pbImgLittleOTWorkMD: "calc(76% / 2 - 24px)",
        pThinkWithE: "calc(74px / 2)",
        pThinkWithEPic: "calc(24px + 16px)",
        FooterBot: "calc(64px - 24px)",
        padNaxFoot: ".5rem 1rem",
        navDropdown: "0 45px",
        ServicesQuickPadding: "48px 100px 24px",
        ServicesQuick2Padding: "24px 100px 24px",
        AboutUsQuote: "40px 64px",
        AboutUsQuoteSM: "40px 24px",
        ServicesP1: "95px 0",
        ServicesP2: "calc(50% + 48px);",
        ServicesP3: "0 16px 16px",
        FooterBigRow: "0 16px 70px 16px",
        FooterBigRowMD: "0 32px 92px 32px",
        tabsWorks: "6px 12px",
        tabsWorksInside: "calc(72px - 12px)",
        tabsWorksInside2: "15px 0",
        worksAll: "calc(16px + 16px + 16px);",
      },
      transitionProperty: {
        bg: "background-color",
      },
      maxWidth: {
        maxContainer: "calc(1664px + 32px)",
        maxPartner: "calc(982px + 120px * 2)",
        maxPartnerSM: "calc(982px + 24px * 2)",
        IntroMem: "calc(982px + 120px * 2)",
        maxWWD: "calc(1664px + 32px)",
        maxOTWorks: "calc(50% - 24px)",
        maxOTWorksPicsPRS: "calc(50% - 12px)",
        maxFooterLGs: "calc(50% - 8px)",
        maxAboutUsPartners: "calc(33.3% - 50px)",
        worksAll: "calc(33.3% - 24px)",
      },
      colors: {
        zero: "0 0",
        HeaderScroll: "rgba(255,255,255,.8)",
        filterBanner:
          "linear-gradient(180deg,rgba(12,21,42,.5) 48.85%,rgba(12,21,42,.5) 100%)",
        TechWeLove: "linear-gradient(90deg,#fff 0,rgba(255,255,255,0) 100%)",
      },
      margin: {
        autoWWD: "0 auto",
        footerTop: "48px 92px",
        footerTopSM: "10vw 20vw",
        NavDropDown: ".125rem 0 0",
        amFull: "0 -100px",
        FooterBigRow: "40px 12px",
      },
      flex: {
        partner: "0 0 25%",
        partnerSM: "0 0 50%",
        WhySM: "0 0 100%",
        flexWWD: "0 0 calc(33.3% - 32px)",
        FooterBigRow: "0 0 calc(33.3% - 24px)",
        flexABUsPartners: "0 0 calc(33.3% - 50px)",
        flexOTWorks: "0 0 33.3%",
        flexThinkWE: "0 0 calc(50% - 24px)",
        flexThinkWEMD: "0 0 calc(50% - 12px)",
        flexFooter: "0 0 calc(50% - 8px)",
        noneAuto: "0 0 auto",
        AboutUsRowFlex: "0 0 calc(50% - 70px)",
      },
      height: {
        heightOTWorks: "calc(100% - 16px - 32px)",
        hWhyEnd: "calc(100% - 90px)",
      },
      inset: {
        topOTWorks: "calc(100% - 32px)",
        topWhyEnd: "calc(80px + 76px)",
      },
      borderRadius: {
        IntroMem: "32px 32px 32px 0",
        radiusWWD: "8px 8px 0 0",
        radiusOTWorks: "16px 16px 0 0",
        ThinkWithERa: "8px 8px 0 0",
        FooterBigRa: "48px 48px 48px 0",
        imageMemDR: "50% 50% 0 50%",
        imageMemTR: "50% 0 50% 50%",
        imageMemDL: "50% 50% 50% 0",
        imageMemTL: "0 50% 50% 50%",
        ServicesPhoto: "16px 0 0 16px",
        ServicesPhotoSM: "16px 16px 0 0;",
      },
      backgroundPosition: {
        listIcon: "left top 7px",
        listFooterBig: "left top 3px",
      },
      transformOrigin: {
        toggleNav: "50%",
      },
      backgroundSize: {
        sauMuoi: "60px",
      },
      width: {
        AboutUsRowWidth: "calc(50% - 70px)",
        ServicePhoto: "calc(50% - 48px)",
        FooterBigRow: "calc(60vw + 60vw + 60vw + 24px * 3)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".box-orient-vertical": {
            "-webkit-box-orient": "vertical",
            "-webkit-box-direction": "normal",
          },
          ".webkit-box-orient-horizontal": {
            "-webkit-box-orient": "horizontal",
            "-webkit-box-direction": "normal",
          },
        },
        ["responsive"]
      );
    },
  ],
};