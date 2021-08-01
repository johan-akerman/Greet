import { JobBoard } from "../components/JobBoard";
import { Banner } from "../components/Banner";

function Jobs() {
  return (
    <div className="pt-32">
      <JobBoard title={false} />
      <Banner title="Want your job ad posted above?" />
    </div>
  );
}

export default Jobs;
