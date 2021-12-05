import { Jumbotron } from "src/components/Jumbotron";
import { HowItWorks } from "src/components/HowItWorks";
import { Banner } from "src/components/Banner";
import { SocialMedia } from "src/components/SocialMedia";
import { CompanyBanner } from "src/components/CompanyBanner";
import { useEffect } from "react";

import { JobBoard } from "src/components/JobBoard";
import { Trusted } from "src/components/Trusted";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Jumbotron />
      <Trusted />
      <HowItWorks />
      <JobBoard title={true} />
      <CompanyBanner />
      <SocialMedia />
      <Banner
        title="Ready to refer someone?"
        button="Explore the job board"
        link="/jobs"
      />
    </div>
  );
}

export default Home;
