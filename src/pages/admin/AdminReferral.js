import { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { doc, getDoc } from "@firebase/firestore";
import { Link } from "react-router-dom";
import db from "src/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import AdminNavbar from "src/components/AdminNavbar";

function AdminReferral() {
  let [referral, setReferral] = useState({});
  let url = window.location.href;
  let job = url.split("/")[url.split("/").length - 3];
  let id = url.split("/")[url.split("/").length - 1];

  console.log(job);

  const ref = doc(db, "referrals", id);

  function getReferral() {
    getDoc(ref).then((doc) => setReferral(doc.data()));
  }

  useEffect(() => {
    getReferral();
  }, []);

  if (Object.keys(referral).length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="bg-light py-32 min-h-screen">
        <div className="w-11/12 mx-auto">
          <Link to={`/admin/${job}`} className="text-4xl">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="mr-3 text-xl mb-1"
            />
            {referral.candidate.name}
          </Link>

          <div className="grid grid-cols-12 gap-4 mt-8">
            <div className="lg:col-span-6 col-span-12 bg-white rounded-xl p-4 mt-4">
              <h1 className="text-2xl font-medium pb-3">Candidate</h1>
              <table className="min-w-full divide-y divide-gray-500">
                <tbody className="divide-y divide-gray-300 divide-dashed">
                  <tr>
                    <td className="text-bold">Name</td>
                    <td className="text-right">{referral.candidate.name}</td>
                  </tr>
                  <tr class="bg-emerald-200">
                    <td className="text-bold">Title</td>
                    <td className="text-right">{referral.candidate.title}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Email</td>
                    <td className="text-right">{referral.candidate.email}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Linkedin</td>
                    <td className="text-right">
                      {referral.candidate.linkedin}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="lg:col-span-6 col-span-12 bg-white rounded-xl p-4 mt-4">
              <h1 className="text-2xl font-medium pb-3">Referrer</h1>
              <table className="min-w-full divide-y divide-gray-500">
                <tbody className="divide-y divide-gray-300 divide-dashed">
                  <tr>
                    <td className="text-bold">Name</td>
                    <td className="text-right">{referral.referrer.name}</td>
                  </tr>
                  <tr class="bg-emerald-200">
                    <td className="text-bold">Title</td>
                    <td className="text-right">{referral.referrer.title}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Email</td>
                    <td className="text-right">{referral.referrer.email}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Linkedin</td>
                    <td className="text-right">{referral.referrer.linkedin}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Openness to a new job</td>
                    <td className="text-right">{referral.general.open}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-xl p-3 col-span-12">
              <h1 className="text-2xl font-medium pb-2">Motivation</h1>
              <p>{referral.referrer.motivation}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(AdminReferral);
