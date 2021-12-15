import { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { doc, getDoc } from "@firebase/firestore";
import { Link } from "react-router-dom";
import db from "src/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Loader from "src/components/Loader";

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
    return <Loader />;
  }

  return (
    <>
      <div className="py-32 min-h-screen">
        <div className="w-11/12 mx-auto">
          <Link to={`/admin/${job}`} className="text-4xl">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="mr-3 text-xl mb-1"
            />
            {referral.candidate.name}
          </Link>

          <div className="grid grid-cols-12 gap-12 mt-12">
            <div className="lg:col-span-6 col-span-12 bg-white rounded-xl">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Candidate
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Information about the candidate
                </p>
              </div>
              <div class="border-t border-gray-200">
                <dl>
                  <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Name</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {referral.candidate.name}
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      Previous / current title
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {referral.candidate.title}
                    </dd>
                  </div>
                  <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {referral.candidate.email}
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      LinkedIn profile
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {referral.candidate.linkedin}
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      Openness to a new job
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {referral.general.open}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="lg:col-span-6 col-span-12 bg-white rounded-xl">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Greeter
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Information about the referrer.
                </p>
              </div>
              <div class="border-t border-gray-200">
                <dl>
                  <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Name</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {referral.referrer.name}
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      Previous / current title
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {referral.referrer.title}
                    </dd>
                  </div>
                  <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {referral.referrer.email}
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      LinkedIn profile
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {referral.referrer.linkedin}
                    </dd>
                  </div>
                  <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      Motivation
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {referral.referrer.motivation}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(AdminReferral);
