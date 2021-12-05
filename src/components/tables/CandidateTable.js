import CandidateStatus from "src/components/statuses/CandidateStatus";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Select from "src/components/Select";
import Search from "src/components/Search";
import NoReferral from "src/components/emptyStates/NoReferral";

const statuses = [
  "Show all statuses",
  "In progress",
  "Shortlisted",
  "Not a fit",
  "Hired",
];

const times = ["Newest first", "Oldest first"];
const th = ["Candidate", "Title", "Referred by", "Added", "Status"];

export default function CandidateTable({ referrals, id }) {
  let [displayedReferrals, setDisplayedReferrals] = useState(referrals);
  const [selectedStatus, setSelectedStatus] = useState(statuses[0]);
  const [selectedTime, setSelectedTime] = useState(times[0]);

  function changeStatus(data) {
    var tmp = [];
    referrals.forEach((referral) => {
      if (data === "Show all statuses") {
        tmp.push(referral);
      }

      if (referral.data().general.status === data) {
        tmp.push(referral);
      }
    });
    setSelectedStatus(data);
    setDisplayedReferrals(tmp);
  }

  const handleSearch = (data) => {
    setDisplayedReferrals(data);
  };

  const history = useHistory();
  let currentDate = new Date();

  function handleClick(job, id) {
    history.push(`/${job}/candidates/${id}`);
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

        <div className="w-72">
          <Select
            selected={selectedStatus}
            statuses={statuses}
            changeStatus={changeStatus}
          />
        </div>

        <div class="w-52">
          <Select
            selected={selectedTime}
            statuses={times}
            changeStatus={time}
          />
        </div>
      </div>

      <div className="mt-12 overflow-x-auto bg-white rounded-xl px-4">
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
                    onClick={() => handleClick(id, referral.id)}
                  >
                    {referral.data().candidate.name}
                  </td>

                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                    onClick={() => handleClick(id, referral.id)}
                  >
                    {referral.data().candidate.title}
                  </td>

                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                    onClick={() => handleClick(id, referral.id)}
                  >
                    {referral.data().referrer.name}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                    onClick={() => handleClick(id, referral.id)}
                  >
                    {calculateDays(referral.data().time.toDate())}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <CandidateStatus referral={referral} />
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
