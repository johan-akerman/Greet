import { withRouter } from "react-router";
import { useEffect, useState } from "react";
import db from "src/firebase";
import { doc, getDoc } from "@firebase/firestore";
import Loader from "src/components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDocs, collection, query, where } from "@firebase/firestore";

import {
  faCoins,
  faMoneyBillWave,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Company() {
  const [company, setCompany] = useState();
  const [jobs, setJobs] = useState([]);
  const url = window.location.href;
  const id = url.split("/")[url.split("/").length - 1];
  useEffect(() => {
    getDoc(doc(db, "companies", id)).then((doc) => {
      setCompany(doc);
      const items = [];

      const q = query(
        collection(db, "jobs"),
        where("company", "==", doc.data().company)
      );

      getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          items.push(doc);
        });

        setJobs(items);
      });
    });
  }, []);

  if (!company) {
    return <Loader />;
  }

  return (
    <>
      <div className="md:pt-32 pt-12 pb-20">
        <div className="lg:w-9/12 w-11/12 mx-auto rounded-xl">
          <div className="flex">
            <img
              alt="company logo"
              className="md:h-24 md:w-24 w-16 h-16 md:mr-6 mr-4 rounded-md"
              src={company?.data().logo}
            />

            <div>
              <h1 className="font-semibold lg:text-4xl text-2xl md:pt-6 pt-3">
                {company?.data().company}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-3 lg:gap-14 gap-3">
            <div className="lg:col-span-2 col-span-3">
              <h1 className="text-3xl font-medium md:mt-12 mt-6 mb-3">
                About {company?.data().company}
              </h1>
              <p className="md:text-xl text-md">{company?.data().about}</p>
            </div>
            <div className="lg:col-span-1 col-span-3">
              <h1 className="text-3xl font-medium md:mt-12 mt-4 mb-3">
                Company facts
              </h1>
              <table class="table-auto w-full md:text-xl text-md lg:mb-0 mb-6">
                <tbody>
                  <tr>
                    <td className="text-bold">Website</td>
                    <td className="text-right">{company?.data().website}</td>
                  </tr>
                  <tr class="bg-emerald-200">
                    <td className="text-bold">Founded</td>
                    <td className="text-right">{company?.data().founded}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Employees</td>
                    <td className="text-right">{company?.data().employees}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-span-3">
              <img src={company?.data().banner} alt="company" />
              <p className="pt-2 text-gray-500">{company?.data().caption}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light">
        <div className="md:w-10/12 w-11/12 mx-auto h-full md:pb-28 pb-12 pt-20 ">
          <div className="block pt-4">
            <h1 className="md:text-6xl text-4xl font-bold text-gray-900 text-center md:pb-16 pb-12">
              Jobs at {company?.data().company}
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 grid-cols-1 mx-2 ">
            {jobs.map((job, id) => (
              <div
                key={id}
                className="transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg w-full bg-white rounded-2xl p-6 text-left"
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
        </div>
      </div>
    </>
  );
}

export default withRouter(Company);
