import certificate from "../images/certificate.png";

import { Link } from "react-router-dom";

const jobAds = [
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQFo65CzbG9jhQ/company-logo_200_200/0/1597158989808?e=1634774400&v=beta&t=nnnDMsM1zrAZnnKZv8BgB0DNd3C51sDrOxKyogbrwbc",
    company: "Voi Technology",
    certificate: true,
    position: "Frontend developer",
    location: "Stockholm, Sweden",
    prize: "10.000 SEK",
  },
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQFw44quZMineg/company-logo_200_200/0/1562677189546?e=1634774400&v=beta&t=TGNEgHFF03bEzD8eraOT2Q607woNrSHUVMUm8o63DRg",
    company: "Volta Greentech",
    certificate: true,
    position: "Business developer",
    location: "Stockholm, Sweden",
    prize: "15.000 SEK",
  },
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQHjlxsPphRpqw/company-logo_200_200/0/1619786501790?e=1634774400&v=beta&t=rhv88S6S27PtHrtYUfV_J16Y2aIJsBB1wS0XUEU53rg",
    company: "Curb Food",
    certificate: false,
    position: "Frontend developer",
    location: "Stockholm, Sweden",
    prize: "7.500 SEK",
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
              <div className="w-full bg-gray-100 rounded-2xl p-6 text-left relative">
                {job.certificate ? (
                  <img
                    src={certificate}
                    className="absolute right-4 -top-4 w-12"
                  />
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
                <p className="text-lg">💰 {job.prize}</p>
                <p className="text-lg">📌 {job.location}</p>

                <div className="flex items-center pt-6">
                  <Link
                    to="/refer"
                    className="flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-white"
                  >
                    Refer
                  </Link>

                  <Link
                    to="/volta-greentech"
                    className="ml-2 mr-2 cursor-pointer border-b-2 border-black hover:text-primary hover:bg-gray-300 px-3 py-3 rounded-xl border-none"
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
