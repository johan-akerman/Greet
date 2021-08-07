import { Jumbotron } from "../components/Jumbotron";
import { HowItWorks } from "../components/HowItWorks";
import { FAQ } from "../components/FAQ";
import { Banner } from "../components/Banner";
import { useEffect } from "react";

import { JobBoard } from "../components/JobBoard";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Jumbotron />
      <HowItWorks />
      <JobBoard title={true} />
      <FAQ />
      {/* <Banner
        title="Hire your next superstar!"
        button="Post a job"
        link="/post-job"
      /> */}
    </div>
  );
}

export default Home;
