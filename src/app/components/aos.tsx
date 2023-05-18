import Aos from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos";
import dynamic from "next/dynamic";
import { useEffect } from "react";

function AOS() {
  useEffect(() => {
    Aos.init();
  }, []);
  return null;
}

export default dynamic(() => Promise.resolve(AOS), {
  ssr: false,
});
