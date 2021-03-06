import { CompanyBoard } from "src/components/CompanyBoard";
import { Banner } from "src/components/Banner";

function Jobs() {
  return (
    <div className="pt-32 bg-light">
      <CompanyBoard />
      <Banner
        title="Want to post your own jobs?"
        button="Post a job"
        link="/sign-up/new-company"
      />
    </div>
  );
}

export default Jobs;
