import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Select from "src/components/Select";
import Search from "src/components/Search";
import NoReferral from "src/components/emptyStates/NoReferral";

const times = ["Newest first", "Oldest first"];
const th = ["Candidate", "Referred by", "Added"];

export default function CandidateTable({ referrals }) {
  const history = useHistory();
  let currentDate = new Date();
  const [selectedTime, setSelectedTime] = useState(times[0]);
  let [displayedReferrals, setDisplayedReferrals] = useState([]);
  let url = window.location.href;
  let job = url.split("/")[url.split("/").length - 1];

  useEffect(() => {
    setDisplayedReferrals(referrals);
  }, []);

  useEffect(() => {
    setDisplayedReferrals(referrals);
  }, [referrals]);

  const handleSearch = (data) => {
    setDisplayedReferrals(data);
  };

  function handleClick(id) {
    if (job === "talent-pool") {
      history.push(`/talent-pool/${id}`);
    } else {
      history.push(`/admin/${url.split("/")[url.split("/").length - 1]}/${id}`);
    }
  }

  function calculateDays(date) {
    let daysAgo = Math.floor((currentDate - date) / (1000 * 3600 * 24));

    if (daysAgo < 1) {
      return "Today";
    } else if (daysAgo < 2) return daysAgo + " day ago";
    else return daysAgo + " days ago";
  }

  function time(input) {
    setSelectedTime(input);

    if (input === "Oldest first") {
      displayedReferrals.sort(
        (a, b) => a.data().time.toMillis() - b.data().time.toMillis()
      );
    } else {
      displayedReferrals.sort(
        (a, b) => b.data().time.toMillis() - a.data().time.toMillis()
      );
    }
  }

  if (referrals.length === 0) {
    return <NoReferral />;
  }

  return (
    <>
      <div className="mt-14 flex gap-3">
        <Search list={referrals} handleSearch={handleSearch} />

        <div class="w-52">
          <Select
            selected={selectedTime}
            statuses={times}
            changeStatus={time}
          />
        </div>
      </div>

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
              {displayedReferrals.map((referral) => (
                <tr key={referral.id} className="hover:bg-light">
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                    onClick={() => handleClick(referral.id)}
                  >
                    <div className="h-10 w-10 border border-gray-500 rounded-full mr-3 text-center pt-1 text-lg capitalize float-left ">
                      {referral.data().candidate.name[0]}
                    </div>

                    <div className="float-left">
                      <div class="text-sm font-medium text-gray-900">
                        {referral.data().candidate.name}
                      </div>
                      <div class="text-sm text-gray-500">
                        {referral.data().candidate.title}{" "}
                      </div>
                    </div>
                  </td>

                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                    onClick={() => handleClick(referral.id)}
                  >
                    <div className="h-10 w-10 border border-gray-500 rounded-full mr-3 text-center pt-1 text-lg capitalize float-left ">
                      {referral.data().referrer.name[0]}
                    </div>

                    <div className="float-left">
                      <div class="text-sm font-medium text-gray-900">
                        {referral.data().referrer.name}
                      </div>
                      <div class="text-sm text-gray-500">
                        {referral.data().referrer.title}{" "}
                      </div>
                    </div>
                  </td>

                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                    onClick={() => handleClick(referral.id)}
                  >
                    {calculateDays(referral.data().time.toDate())}
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
