import { withRouter } from "react-router";
import { useEffect, useState } from "react";
import db from "src/firebase";
import { doc, getDoc } from "@firebase/firestore";
import Loader from "src/components/Loader";

function Company() {
  const [company, setCompany] = useState();
  const url = window.location.href;
  const id = url.split("/")[url.split("/").length - 1];
  console.log(id);
  useEffect(() => {
    getDoc(doc(db, "companies", id)).then((doc) => setCompany(doc));
  }, []);

  console.log(company?.data());

  if (!company) {
    return <Loader />;
  }

  return (
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
  );
}

export default withRouter(Company);
