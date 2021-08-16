import { CompanyBoard } from "../components/CompanyBoard";
import { Banner } from "../components/Banner";
import { useEffect } from "react";

function Jobs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-32">
      <CompanyBoard />
      <Banner
        title="Want your company featured above?"
        button="Contact us"
        link="/post-job"
      />
    </div>
  );
}

export default Jobs;
