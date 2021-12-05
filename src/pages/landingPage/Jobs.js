import { JobBoard } from "src/components/JobBoard";
import { Banner } from "src/components/Banner";
import { useEffect } from "react";

function Jobs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-32 bg-light">
      <JobBoard title={false} />
      <Banner
        title="Want to post your own jobs?"
        button="Post a job"
        link="/sign-up"
      />
    </div>
  );
}

export default Jobs;
