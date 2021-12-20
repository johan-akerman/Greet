import ReferralStatus from "src/components/statuses/ReferralStatus";
import { useHistory } from "react-router-dom";
import db, { useAuthState } from "src/firebase";
import { useState, useEffect } from "react";
import NoReferralYet from "../emptyStates/NoReferralYet";
import { doc, getDoc } from "@firebase/firestore";

const th = [
  "Candidate",
  "Job",
  "Hiring reward",
  "Interview reward",
  "Added",
  "Status",
];

export default function ReferralsTable() {
  const history = useHistory();
  let currentDate = new Date();
  const { user } = useAuthState();
  let [referrals, setReferrals] = useState([]);

  useEffect(() => {
    var tmp = [];
    getDoc(doc(db, "greeters", user.uid)).then((greeter) => {
      greeter.data().referrals.forEach((referral) => {
        const referralRef = doc(db, "referrals", referral);
        getDoc(referralRef).then((referral) => {
          const jobRef = doc(db, "jobs", referral.data().job);
          getDoc(jobRef).then((job) => {
            tmp.unshift({
              referral: referral,
              job: job,
            });
          });
        });
      });
    });

    setReferrals(tmp);
  }, []);

  function calculateDays(date) {
    let daysAgo = Math.floor((currentDate - date) / (1000 * 3600 * 24));

    if (daysAgo < 1) {
      return "Today";
    } else if (daysAgo < 2) return daysAgo + " day ago";
    else return daysAgo + " days ago";
  }

  if (Object.keys(referrals).length === 0) {
    return <NoReferralYet />;
  }

  return (
    <>
      <div className="mt-12 overflow-x-auto bg-white rounded-xl">
        <div className="py-2 align-middle inline-block min-w-full">
          <table className="min-w-full divide-y divide-gray-500 z-0">
            <thead>
              <tr>
                {th.map((t) => (
                  <th className="px-6 py-3 text-left text-xs text-gray-900 uppercase tracking-wider leading-tight font-semibold">
                    {t}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 divide-dashed">
              {referrals?.map((r, id) => (
                <tr
                  key={id}
                  className="hover:bg-light"
                  onClick={() => history.push(`/greeter/${r.referral.id}`)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">
                    {r.referral.data().candidate.name}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">
                    {r.job.data().title} @ {r.job.data().company}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">
                    {r.job.data().hiring} SEK
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">
                    {r.job.data().interview} SEK
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">
                    {calculateDays(r.referral.data().time.toDate())}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">
                    {" "}
                    <ReferralStatus status={r.referral.data().general.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
