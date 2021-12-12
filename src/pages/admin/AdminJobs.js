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
      <div className="bg-white pb-3 ">
        <div className="md:w-11/12 w-11/12 mx-auto mt-32 mb-56">
          <h3 className="text-4xl mt-8" to="/admin">
            Jobs
          </h3>

          <JobTable jobs={jobs} />
        </div>
      </div>
    </>
  );
}
