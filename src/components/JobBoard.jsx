import certificate from "../images/certificate.png";
import hot from "../images/hot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import companies from "../json/companies.json";

import {
  faCoins,
  faMoneyBillWave,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function JobBoard({ jobAds, title }) {
  return (
    <>
      <div className="bg-white">
        <div className="md:w-10/12 w-11/12 mx-auto h-full pt-8 md:pb-28 pb-12 ">
          {title ? (
            <div className="md:flex justify-between block">
              <h1 className="md:text-6xl text-4xl font-bold text-gray-900 md:text-left text-center md:pb-16 pb-12">
                Trending jobs
              </h1>
              <span className="text-lg text-black pt-4 lg:flex h-12 hidden font-semibold">
                <h2>Want to post a job? </h2>
                <Link
                  to="/post-job"
                  className="ml-2 cursor-pointer border-b-2 border-primary hover:text-primary hover:border-white"
                >
                  Contact us
                </Link>
              </span>
            </div>
          ) : null}

          <div className="grid lg:grid-cols-3 md:gap-6 gap-10 grid-cols-1 ">
            {jobAds.map((job, id) => (
              <div
                key={id}
                className="transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg w-full bg-gray-100 rounded-2xl p-6 text-left relative"
              >
                {job.new ? (
                  <img
                    src={certificate}
                    className="absolute right-4 -top-4 w-12"
                    alt="certificate"
                  />
                ) : null}

                {job.hot ? (
                  <img
                    alt="hot"
                    src={hot}
                    className="absolute right-4 -top-6 w-12"
                  />
                ) : null}

                <div className="flex items-center text-left pb-4">
                  <img
                    className="w-14 h-14 rounded-2xl mr-4"
                    src={companies.find((c) => c.name === job.company).logo}
                    alt="Company logo"
                  />
                  <div>
                    <p className="text-xl font-semibold text-gray-900 leading-none">
                      {job.title}
                    </p>
                    <p className="text-md text-gray-600">{job.company}</p>
                  </div>
                </div>
                <p className="pl-1 pb-1">
                  <FontAwesomeIcon
                    icon={faMoneyBillWave}
                    className="text-xl text-green-500 mr-2"
                  />
                  <span className="text-xl font-medium">
                    {job.summary.hiringBonus}{" "}
                  </span>
                  <span className="text-sm font-semibold tracking-wide">
                    {" "}
                    / hiring bonus
                  </span>
                </p>
                <p className="pl-1 pb-1">
                  <FontAwesomeIcon
                    icon={faCoins}
                    className="text-xl ml-0.5 text-yellow-400 mr-1.5"
                  />{" "}
                  <span className="text-xl font-medium">
                    {job.summary.interviewBonus}{" "}
                  </span>
                  <span className="text-sm font-semibold tracking-wide">
                    {" "}
                    / interview bonus
                  </span>
                </p>
                <p className="pl-1">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-xl text-red-500 mr-3.5 ml-1"
                  />
                  <span className="font-medium text-xl">
                    {job.summary.location}
                  </span>
                </p>

                <div className="flex items-center pt-6">
                  <Link
                    to={`/refer/${
                      companies.find((c) => c.name === job.company).url
                    }/${job.url}`}
                    className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-white"
                  >
                    Refer
                  </Link>

                  <Link
                    to={`/companies/${
                      companies.find((c) => c.name === job.company).url
                    }/${job.url}`}
                    className="ml-2 font-semibold mr-2 cursor-pointer border-b-2 border-black  hover:bg-gray-300 px-3 py-3 rounded-xl border-none"
                  >
                    About the job
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {title ? (
            <div className="w-40 mt-20 mx-auto">
              <Link
                to="job-board"
                className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-white"
              >
                View all jobs
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
