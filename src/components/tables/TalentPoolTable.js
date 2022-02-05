import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Select from "src/components/Select";
import Search from "src/components/Search";
import NoReferral from "src/components/emptyStates/NoReferral";

const times = ["Newest first", "Oldest first"];
const th = ["Candidate", "Title", "Referred by", "Added"];

export default function TalentPoolTable({ referrals, id }) {
  const history = useHistory();
  let currentDate = new Date();
  const [selectedTime, setSelectedTime] = useState(times[0]);
  let [displayedReferrals, setDisplayedReferrals] = useState([]);

  useEffect(() => {
    setDisplayedReferrals(referrals);
  }, []);
  console.log(displayedReferrals);

  const handleSearch = (data) => {
    setDisplayedReferrals(data);
  };

  function handleClick(id) {
    history.push(`/talent-pool/${id}`);
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
                    {referral.data().candidate.name}
                  </td>

                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                    onClick={() => handleClick(referral.id)}
                  >
                    {referral.data().candidate.title}
                  </td>

                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                    onClick={() => handleClick(referral.id)}
                  >
                    {referral.data().referrer.name}
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
