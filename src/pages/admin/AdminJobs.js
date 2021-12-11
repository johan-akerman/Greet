import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import JobTable from "src/components/tables/JobTable";
import NoJobs from "src/components/emptyStates/NoJobs";
import { useJobs } from "src/hooks/useJobs";

export default function AdminJobs() {
  const jobs = useJobs();

  if (!jobs) {
    return <NoJobs />;
  }

  return (
    <>
      
      <div className="bg-white py-32">
        <div className="md:w-11/12 w-11/12 mx-auto h-full md:pb-28 pb-12 ">
          <div className="flex justify-between">
            <Link className="text-4xl" to="/admin">
              All open positions
            </Link>

            <Link
              to="/admin/create-new-job"
              className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-3" />
              Create new job
            </Link>
          </div>

          <JobTable jobs={jobs} />
        </div>
      </div>
    </>
  );
}
