import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import db from "src/firebase";
import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "@firebase/firestore";

import {
  faCoins,
  faArrowRight,
  faMoneyBillWave,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Loader from "./Loader";

export function JobBoard({ title }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const items = [];

    const q = query(collection(db, "jobs"), where("status", "==", "Open"));

    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push(doc);
      });
      if (title) {
        setJobs(items.slice(0, 6));
      } else {
        setJobs(items);
      }
    });
  }, []);

  if (jobs.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <div className="bg-light">
        <div className="md:w-10/12 w-11/12 mx-auto h-full md:pb-28 pb-12 ">
          {title ? (
            <div className="md:flex justify-between block pt-20">
              <h1 className="md:text-6xl text-4xl font-bold text-gray-900 md:text-left text-center md:pb-16 pb-12">
                Trending jobs
              </h1>
            </div>
          ) : null}

          <div className="grid lg:grid-cols-3 md:gap-6 gap-10 grid-cols-1 ">
            {jobs.map((job, id) => (
              <div
                key={id}
                className="transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg w-full bg-white rounded-2xl p-6 text-left relative"
              >
                <div className="flex items-center text-left pb-4">
                  <img
                    className="w-14 h-14 rounded-2xl mr-4"
                    src={job.data().logo}
                    alt="Company logo"
                  />
                  <div>
                    <p className="text-xl font-semibold text-gray-900 leading-none">
                      {job.data().title}
                    </p>
                    <p className="text-md text-gray-600">
                      {job.data().company}
                    </p>
                  </div>
                </div>
                <p className="pl-1 pb-1">
                  <FontAwesomeIcon
                    icon={faMoneyBillWave}
                    className="text-xl text-green-500 mr-2"
                  />
                  <span className="text-xl font-medium">
                    {job.data().hiring} SEK
                  </span>
                  <span className="text-sm font-semibold tracking-wide">
                    {" "}
                    / hiring reward
                  </span>
                </p>
                <p className="pl-1 pb-1">
                  <FontAwesomeIcon
                    icon={faCoins}
                    className="text-xl ml-0.5 text-yellow-400 mr-1.5"
                  />{" "}
                  <span className="text-xl font-medium">
                    {job.data().interview} SEK
                  </span>
                  <span className="text-sm font-semibold tracking-wide">
                    {" "}
                    / interview reward
                  </span>
                </p>
                <p className="pl-1">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-xl text-red-500 mr-3.5 ml-1"
                  />
                  <span className="font-medium text-xl">
                    {job.data().location}
                  </span>
                </p>

                <div className="flex items-center pt-6">
                  <Link
                    to={`/jobs/${job.id}/refer`}
                    className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
                  >
                    Refer
                  </Link>

                  <Link
                    to={`/jobs/${job.id}`}
                    className="ml-2 font-semibold mr-2 cursor-pointer border-b-2 border-black  hover:bg-light px-3 py-3 rounded-xl border-none"
                  >
                    About the job
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {title ? (
            <div className="w-48 mt-20 mx-auto">
              <Link
                to="jobs"
                className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-black rounded-xl text-light"
              >
                View all jobs
                <FontAwesomeIcon
                  className="ml-3 mb-0.5 text-sm"
                  icon={faArrowRight}
                />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
