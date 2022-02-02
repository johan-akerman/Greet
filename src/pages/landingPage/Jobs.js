import { JobBoard } from "src/components/JobBoard";
import { Banner } from "src/components/Banner";
import { useEffect } from "react";

function Jobs() {
  return (
    <div className="pt-32">
      <JobBoard title={false} />
      <Banner
        title="Want to post your own jobs?"
        button="Post a job"
        link="/sign-up/new-company"
      />
    </div>
  );
}

export default Jobs;
