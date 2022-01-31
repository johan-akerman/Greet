import {
  faAward,
  faCrown,
  faMedal,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LeaderboardTable({ greeters }) {
  if (!greeters) {
    return <h1>Loading...</h1>;
  }

  function generateIcon(index) {
    if (index === 1) {
      return (
        <FontAwesomeIcon icon={faTrophy} className="text-primary text-2xl" />
      );
    } else if (index === 2) {
      return (
        <FontAwesomeIcon icon={faMedal} className="text-gray-400 text-2xl" />
      );
    } else if (index === 3) {
      return (
        <FontAwesomeIcon icon={faAward} className="text-yellow-600 text-2xl" />
      );
    } else return index;
  }

  return (
    <div className="bg-white rounded-xl p-5 overflow-x-auto mx-auto mt-20 mb-32 md:w-5/12 w-11/12">
      <h2 className="text-4xl font-semibold text-gray-900 leading-none text-center mt-10">
        Leaderboard
      </h2>
      <p className="text-md text-gray-600 pb-8 text-center pt-2">
        Helping your friends land their dream job deserves recognition 🎉
      </p>
      <table className="w-full mt-12">
        <thead className="border-b border-gray-500">
          <tr>
            <th className="px-6 py-3 text-center text-xs text-gray-900 uppercase tracking-wider leading-tight font-semibold">
              Rank
            </th>
            <th className="px-6 py-3 text-left text-xs text-gray-900 uppercase tracking-wider leading-tight font-semibold">
              Greeter
            </th>
            <th className="px-6 py-3 text-left text-xs text-gray-900 uppercase tracking-wider leading-tight font-semibold">
              Referrals
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-300 divide-dashed">
          {greeters?.map((greeter, id) => {
            return (
              <tr key={id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                  {generateIcon(id + 1)}
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="">
                      <div class="text-sm font-medium text-gray-900">
                        {greeter.name}
                      </div>
                      <div class="text-sm text-gray-500">{greeter.title} </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {greeter?.referrals?.length}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
