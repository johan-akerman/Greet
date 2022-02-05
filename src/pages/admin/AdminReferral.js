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
  let job = url.split("/")[url.split("/").length - 2];
  let id = url.split("/")[url.split("/").length - 1];

  const ref = doc(db, "referrals", id);

  let currentDate = new Date();

  function getReferral() {
    getDoc(ref).then((doc) => setReferral(doc.data()));
  }

  function calculateDays(date) {
    let daysAgo = Math.floor((currentDate - date) / (1000 * 3600 * 24));

    if (daysAgo < 1) {
      return "Today";
    } else if (daysAgo < 2) return daysAgo + " day ago";
    else return daysAgo + " days ago";
  }

  useEffect(() => {
    getReferral();
  }, []);

  if (!referral) {
    return <Loader />;
  }

  return (
    <>
      <div className="lg:py-40 py-20 bg-light">
        <div className="w-10/12 mx-auto">
          <div className="flex justify-between">
            <Link
              to={
                url.split("/")[url.split("/").length - 2] == "talent-pool"
                  ? "/talent-pool"
                  : `/admin/${job}`
              }
              className="text-4xl text-center"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="mr-3 text-xl mb-1"
              />
              {referral?.candidate.name}
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-6 mt-16">
            <div class="md:col-span-6 col-span-12 bg-white overflow-hidden rounded-xl">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-xl leading-6 font-medium text-gray-900">
                  Candidate Information
                </h3>
              </div>
              <dl>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Name</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.candidate.name}
                  </dd>
                </div>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Title</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.candidate.title}
                  </dd>
                </div>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Email</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.candidate.email}
                  </dd>
                </div>
                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">LinkedIn</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.candidate.linkedin}
                  </dd>
                </div>

                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Openness to new job
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.general.open}
                  </dd>
                </div>

                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Motivation</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.referrer.motivation}
                  </dd>
                </div>
              </dl>
            </div>

            <div class="md:col-span-6 col-span-12 bg-white overflow-hidden rounded-xl">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-xl leading-6 font-medium text-gray-900">
                  Greeter Information
                </h3>
              </div>
              <dl>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Name</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.referrer.name}
                  </dd>
                </div>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Title</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.referrer.title}
                  </dd>
                </div>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Email</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.referrer.email}
                  </dd>
                </div>
                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">LinkedIn</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.referrer.linkedin}
                  </dd>
                </div>

                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Referred</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {calculateDays(referral?.time.toDate())}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(AdminReferral);
