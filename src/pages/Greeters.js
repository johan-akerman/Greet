import { HowItWorks } from "../components/HowItWorks";
import { FAQ } from "../components/FAQ";
import { useEffect } from "react";

function Greeters() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HowItWorks />
      <FAQ />
    </>
  );
}

export default Greeters;
