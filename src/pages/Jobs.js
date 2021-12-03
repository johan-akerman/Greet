import { JobBoard } from "../components/JobBoard";
import { Banner } from "../components/Banner";
import { useEffect } from "react";
import jobs from "../json/jobs.json";

function Jobs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-32 bg-light">
      <JobBoard title={false} jobAds={jobs} />
      <Banner
        title="Want to post your own jobs?"
        button="Post a job"
        link="/post-job"
      />
    </div>
  );
}

export default Jobs;