import ReferralStatus from "src/components/statuses/ReferralStatus";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "src/components/Select";
import Search from "src/components/Search";
import NoReferral from "src/components/emptyStates/NoReferral";

const th = [
  "Candidate",
  "Job",
  "Hiring bonus",
  "Interview bonus",
  "Added",
  "Status",
];

export default function ReferralsTable({ referrals }) {
  const history = useHistory();
  let currentDate = new Date();
  let [displayedReferrals, setDisplayedReferrals] = useState(referrals);

  useEffect(() => {
    setDisplayedReferrals(referrals);
  }, [referrals]);

  function calculateDays(date) {
    let daysAgo = Math.floor((currentDate - date) / (1000 * 3600 * 24));

    if (daysAgo < 1) {
      return "Today";
    } else if (daysAgo < 2) return daysAgo + " day ago";
    else return daysAgo + " days ago";
  }

  if (!referrals) {
    return <NoReferral />;
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
              {displayedReferrals?.map((referral) => (
                <tr
                  key={referral.id}
                  className="hover:bg-light"
                  onClick={() => history.push(`/greeter/${referral.id}`)}
                >
                  {console.log("referral: " + referral)}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">
                    {referral.data().candidate.name}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">
                    {referral.data().job}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">
                    -
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">
                    -
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">
                    {/* {new Date(referral.data().time.seconds * 1000).toString()} */}
                    {calculateDays(referral.data().time.toDate())}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <ReferralStatus status={referral.data().general.status} />
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
