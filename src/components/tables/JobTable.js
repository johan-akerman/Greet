import { useHistory } from "react-router-dom";
import JobStatus from "src/components/statuses/JobStatus";
import { useEffect, useState } from "react";
import Select from "src/components/Select";
import Loader from "../Loader";

const statuses = ["Show all statuses", "Open", "Hidden"];
const times = ["Newest first", "Oldest first"];
const th = ["Job", "Hiring reward", "Interview reward", "Posted", "Status"];

export default function JobTable({ jobs }) {
  let [displayedJobs, setDisplayedJobs] = useState([]);
  let [selectedStatus, setSelectedStatus] = useState(statuses[0]);
  let [selectedTime, setSelectedTime] = useState(times[0]);
  const history = useHistory();

  useEffect(() => {
    setDisplayedJobs(jobs);
  }, [jobs]);

  function changeStatus(data) {
    var tmp = [];
    jobs.forEach((job) => {
      if (data === "Show all statuses") {
        tmp.push(job);
      }

      if (job.data().status === data) {
        tmp.push(job);
      }
    });

    setSelectedStatus(data);
    setDisplayedJobs(tmp);
  }

  function handleClick(id) {
    history.push(`/admin/${id}`);
  }

  function calculateDays(date) {
    let daysAgo = Math.floor((new Date() - date) / (1000 * 3600 * 24));

    if (daysAgo < 1) {
      return "Today";
    } else if (daysAgo < 2) {
      return daysAgo + " day ago";
    } else return daysAgo + " days ago";
  }

  function search(input) {
    var tmp = [];
    const filter = input.toUpperCase();
    jobs.forEach((job) => {
      if (job.data().title.toUpperCase().indexOf(filter) > -1) tmp.push(job);
    });

    setDisplayedJobs(tmp);
  }

  function time(input) {
    setSelectedTime(input);

    if (input === "Oldest first")
      displayedJobs.sort(
        (a, b) => a.data().time.toMillis() - b.data().time.toMillis()
      );
    else
      displayedJobs.sort(
        (a, b) => b.data().time.toMillis() - a.data().time.toMillis()
      );
  }

  if (displayedJobs.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <div className="mt-14 flex gap-3">
        <input
          className="appearance-none h-12 text-lg block w-1/3 text-gray-700 border-2 border-black rounded-lg py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
          placeholder="Search job . . ."
          onChange={(e) => search(e.target.value)}
        />

        <Select
          className="w-72"
          selected={selectedStatus}
          statuses={statuses}
          changeStatus={changeStatus}
        />

        <Select
          className="w-52"
          selected={selectedTime}
          statuses={times}
          changeStatus={time}
        />
      </div>
      <div className="mt-12 overflow-x-auto bg-white">
        <table className="min-w-full divide-y divide-gray-500 z-0">
          <thead>
            <tr>
              {th.map((t) => (
                <th className="px-6 py-3 text-left text-xs text-gray-900 uppercase tracking-wider leading-tight font-semibold">
                  {t}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-300 divide-dashed">
            {displayedJobs.map((currentJob) => (
              <tr key={currentJob.id} className="hover:bg-light">
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                  onClick={() => handleClick(currentJob.id)}
                >
                  {currentJob.data().title}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                  onClick={() => handleClick(currentJob.id)}
                >
                  {currentJob.data().hiring}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                  onClick={() => handleClick(currentJob.id)}
                >
                  {currentJob.data().interview}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                  onClick={() => handleClick(currentJob.id)}
                >
                  {calculateDays(currentJob.data().time.toDate())}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <JobStatus id={currentJob.id} job={currentJob.data()} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
