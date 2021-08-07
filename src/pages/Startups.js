import { HowItWorks } from "../components/HowItWorks";
import { FAQ } from "../components/FAQ";
import { Banner } from "../components/Banner";
import { useEffect } from "react";

function Startups() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HowItWorks />
      <FAQ />
      <Banner
        title="Ready to hire your next star?"
        button="Post a job"
        link="/post-job"
      />
    </>
  );
}

export default Startups;
