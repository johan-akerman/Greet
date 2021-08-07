import { JobBoard } from "../components/JobBoard";
import { Banner } from "../components/Banner";
import { useEffect } from "react";

function Jobs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-32">
      <JobBoard title={false} />
      <Banner
        title="Want your job ad posted above?"
        button="Post a job"
        link="/post-job"
      />
    </div>
  );
}

export default Jobs;
