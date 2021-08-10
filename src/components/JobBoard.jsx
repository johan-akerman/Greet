import certificate from "../images/certificate.png";
import hot from "../images/hot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faMoneyBillWave,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const jobAds = [
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQFw44quZMineg/company-logo_200_200/0/1562677189546?e=1634774400&v=beta&t=TGNEgHFF03bEzD8eraOT2Q607woNrSHUVMUm8o63DRg",
    company: "Volta Greentech",
    certificate: false,
    hot: true,
    position: "Business developer",
    jobLink: "business-developer",
    location: "Stockholm",
    hiringBonus: "12.500 SEK",
    interviewBonus: "250 SEK",
    link: "/volta-greentech/business-developer",
  },
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQFw44quZMineg/company-logo_200_200/0/1562677189546?e=1634774400&v=beta&t=TGNEgHFF03bEzD8eraOT2Q607woNrSHUVMUm8o63DRg",
    company: "Volta Greentech",
    certificate: true,
    hot: false,
    position: "Head of manufacturing",
    jobLink: "head-of-manufacturing",
    location: "Stockholm",
    hiringBonus: "15.000 SEK",
    interviewBonus: "300 SEK",
    link: "/volta-greentech/head-of-manufacturing",
  },
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQFw44quZMineg/company-logo_200_200/0/1562677189546?e=1634774400&v=beta&t=TGNEgHFF03bEzD8eraOT2Q607woNrSHUVMUm8o63DRg",
    company: "Volta Greentech",
    certificate: true,
    hot: false,
    position: "Production engineer",
    jobLink: "production-engineer",
    location: "Stockholm",
    hiringBonus: "10.000 SEK",
    interviewBonus: "200 SEK",
    link: "/volta-greentech/production-engineer",
  },
];

export function JobBoard({ title }) {
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
                  className="ml-2 cursor-pointer border-b-2 border-black hover:text-primary"
                >
                  Contact us
                </Link>
              </span>
            </div>
          ) : null}

          <div className="grid lg:grid-cols-3 md:gap-6 gap-10 grid-cols-1 ">
            {jobAds.map((job, id) => (
              <div className="transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg w-full bg-gray-100 rounded-2xl p-6 text-left relative">
                {job.certificate ? (
                  <img
                    src={certificate}
                    className="absolute right-4 -top-4 w-12"
                  />
                ) : null}

                {job.hot ? (
                  <img src={hot} className="absolute right-4 -top-6 w-12" />
                ) : null}

                <div class="flex items-center text-left pb-4">
                  <img
                    class="w-14 h-14 rounded-2xl mr-4"
                    src={job.image}
                    alt="Company logo"
                  />
                  <div>
                    <p class="text-xl font-semibold text-gray-900 leading-none">
                      {job.position}
                    </p>
                    <p class="text-md text-gray-600">{job.company}</p>
                  </div>
                </div>
                <p className="pl-1 pb-1">
                  <FontAwesomeIcon
                    icon={faMoneyBillWave}
                    className="text-xl text-green-500 mr-2"
                  />
                  <span className="text-xl font-medium">
                    {job.hiringBonus}{" "}
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {" "}
                    / Hiring
                  </span>
                </p>
                <p className="pl-1 pb-1">
                  <FontAwesomeIcon
                    icon={faCoins}
                    className="text-xl ml-0.5 text-yellow-400 mr-1.5"
                  />{" "}
                  <span className="text-xl font-medium">
                    {job.interviewBonus}{" "}
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {" "}
                    / Interview
                  </span>
                </p>
                <p className="pl-1">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-xl text-red-500 mr-3.5 ml-1"
                  />
                  <span className="font-medium text-xl">{job.location}</span>
                </p>

                <div className="flex items-center pt-6">
                  <Link
                    to={`/refer/${job.jobLink}`}
                    className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-white"
                  >
                    Refer
                  </Link>

                  <Link
                    to={job.link}
                    className="ml-2 font-semibold mr-2 cursor-pointer border-b-2 border-black  hover:bg-gray-300 px-3 py-3 rounded-xl border-none"
                  >
                    About the job
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
