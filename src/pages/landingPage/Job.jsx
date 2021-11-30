import db from "src/firebase";

import {
  doc,
  getDoc,
  getDocs,
  query,
  where,
  collection,
} from "@firebase/firestore";
import { withRouter } from "react-router";
import jobs from "src/json/jobs.json";
import companies from "src/json/companies.json";
import { Banner } from "src/components/Banner";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import JobAd from "src/components/JobAd";
import NoJob from "src/components/emptyStates/NoJob";

function Job() {
  const [job, setJob] = useState();
  const url = window.location.href;
  const id = url.split("/")[url.split("/").length - 1];

  useEffect(() => {
    getDoc(doc(db, "jobs", id)).then((doc) => setJob(doc.data()));
  }, []);

  if (!job) {
    return <NoJob />;
  }

  return (
    <>
      <div className="lg:w-6/12 w-11/12 mx-auto md:mt-32 mt-20 pb-20">
        <JobAd job={job} description={job.description} />
        <div className="text-center mx-auto mt-20">
          <Link
            to={`${id}/refer`}
            className="px-8 py-3 border border-transparent font-medium rounded-md text-black bg-primary md:py-4 text-xl md:px-10 transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg"
          >
            Refer someone
          </Link>
        </div>
      </div>

      <Banner
        title="Looking for something else?"
        button="Explore the job board"
        link="/jobs"
      />
    </>
  );
}

export default withRouter(Job);
