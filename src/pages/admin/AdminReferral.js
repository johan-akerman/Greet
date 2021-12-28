import { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { doc, getDoc } from "@firebase/firestore";
import { Link } from "react-router-dom";
import db from "src/firebase";
import ReferralStatus from "src/components/statuses/ReferralStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Loader from "src/components/Loader";
import { useRole } from "src/hooks/useRole";

function AdminReferral() {
  let [referral, setReferral] = useState();
  let url = window.location.href;
  const role = useRole();
  let job = url.split("/")[url.split("/").length - 3];
  let id = url.split("/")[url.split("/").length - 1];

  const ref = doc(db, "referrals", id);

  function getReferral() {
    getDoc(ref).then((doc) => setReferral(doc.data()));
  }

  useEffect(() => {
    getReferral();
  }, []);

  if (!referral) {
    return <Loader />;
  }

  return (
    <>
      <div className="lg:py-36 py-20 md:bg-white bg-light">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between">
            <Link
              to={role === "greeter" ? "/referrals" : `/admin/${job}`}
              className="text-4xl text-center -mt-4"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="mr-3 text-xl mb-1"
              />
              {referral?.candidate.name}
            </Link>

            <ReferralStatus status={referral.general.status} />
          </div>
          <div className="md:grid md:grid-cols-12 gap-12 mt-12">
            <div className="lg:col-span-6 col-span-12 bg-white rounded-xl">
              <div class="px-4 py-5">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Candidate
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Information about the candidate
                </p>
              </div>
              <div>
                <dl>
                  <div class="px-4 py-5 grid-cols-3">
                    <dt class="text-sm font-medium text-gray-500">Name</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {referral?.candidate.name}
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5">
                    <dt class="text-sm font-medium text-gray-500">
                      Previous / current title
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {referral?.candidate.title}
                    </dd>
                  </div>
                  <div class="px-4 py-5 ">
                    <dt class="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {referral?.candidate.email}
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5">
                    <dt class="text-sm font-medium text-gray-500">
                      LinkedIn profile
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {referral?.candidate.linkedin}
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 ">
                    <dt class="text-sm font-medium text-gray-500">
                      Openness to a new job
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {referral?.general.open}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="lg:col-span-6 col-span-12 md:mt-0 mt-8 w-full bg-white rounded-xl">
              <div class="px-4 py-5">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Greeter
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Information about the referrer.
                </p>
              </div>
              <div>
                <dl>
                  <div class="px-4 py-5 ">
                    <dt class="text-sm font-medium text-gray-500">Name</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {referral.referrer.name}
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 ">
                    <dt class="text-sm font-medium text-gray-500">
                      Previous / current title
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 ">
                      {referral.referrer.title}
                    </dd>
                  </div>
                  <div class="px-4 py-5">
                    <dt class="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {referral.referrer.email}
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 ">
                    <dt class="text-sm font-medium text-gray-500">
                      LinkedIn profile
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 ">
                      {referral.referrer.linkedin}
                    </dd>
                  </div>
                  <div class=" px-4 py-5">
                    <dt class="text-sm font-medium text-gray-500">
                      Motivation
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 ">
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
