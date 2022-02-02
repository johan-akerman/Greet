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

function GreeterReferral() {
  let [referral, setReferral] = useState();
  const role = useRole();
  let url = window.location.href;
  let id = url.split("/")[url.split("/").length - 1];
  let currentDate = new Date();

  function calculateDays(date) {
    let daysAgo = Math.floor((currentDate - date) / (1000 * 3600 * 24));

    if (daysAgo < 1) {
      return "Today";
    } else if (daysAgo < 2) return daysAgo + " day ago";
    else return daysAgo + " days ago";
  }

  function getReferral() {
    const referralRef = doc(db, "referrals", id);

    getDoc(referralRef)
      .then((referral) => {
        const jobRef = doc(db, "jobs", referral.data().job);
        getDoc(jobRef).then((job) => {
          setReferral({
            r: referral.data(),
            j: job.data(),
          });
        });
      })
      .then(() => {
        console.log("referral:");
        console.log(referral?.r);

        console.log("job:");
        console.log(referral?.j);
      });
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
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between">
            <Link to="/referrals" className="text-4xl text-center">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="mr-3 text-xl mb-1"
              />
              {referral?.r.candidate.name}
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-6 mt-16">
            <div class="md:col-span-8 col-span-12 bg-white overflow-hidden rounded-xl">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-xl leading-6 font-medium text-gray-900">
                  Candidate Information
                </h3>
              </div>
              <dl>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Name</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.r.candidate.name}
                  </dd>
                </div>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Title</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.r.candidate.title}
                  </dd>
                </div>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Email</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.r.candidate.email}
                  </dd>
                </div>
                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">LinkedIn</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.r.candidate.linkedin}
                  </dd>
                </div>

                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Openness to new job
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.r.general.open}
                  </dd>
                </div>

                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Motivation</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.r.referrer.motivation}
                  </dd>
                </div>
              </dl>
            </div>

            <div class="md:col-span-4 col-span-12 bg-white overflow-hidden rounded-xl">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-xl leading-6 font-medium text-gray-900">
                  Job Information
                </h3>
              </div>
              <dl>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Position</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.j.title}
                  </dd>
                </div>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Company</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.j.company}
                  </dd>
                </div>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Interview reward
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.j.interview}
                  </dd>
                </div>
                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Hiring reward
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.j.hiring}
                  </dd>
                </div>

                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Referred</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {calculateDays(referral?.r.time.toDate())}
                  </dd>
                </div>

                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Share bonus</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {referral?.r.general.share}
                  </dd>
                </div>

                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 md:mb-0 mb-4">
                    Status
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ReferralStatus status={referral?.r.general.status} />
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

export default withRouter(GreeterReferral);
