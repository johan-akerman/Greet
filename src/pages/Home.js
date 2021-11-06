import { Jumbotron } from "../components/Jumbotron";
import { HowItWorks } from "../components/HowItWorks";
import { Banner } from "../components/Banner";
import { SocialMedia } from "../components/SocialMedia";
import { CompanyBanner } from "../components/CompanyBanner";
import { useEffect } from "react";

import { JobBoard } from "../components/JobBoard";
import { Trusted } from "../components/Trusted";
import jobs from "../json/jobs.json";

//let hotJobs = jobs.filter((j) => j.hot).slice(0, 9);
let hotJobs = jobs.slice(0, 9);

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Jumbotron />
      <Trusted />
      <HowItWorks />
      <JobBoard title={true} jobAds={hotJobs} />
      <CompanyBanner />
      <SocialMedia />
      <Banner
        title="Ready to refer someone?"
        button="Explore the job board"
        link="/job-board"
      />
    </div>
  );
}

export default Home;
