import {
  faAward,
  faCrown,
  faMedal,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LeaderboardCard({ greeters }) {
  function generateIcon(index) {
    if (index === 1) {
      return (
        <FontAwesomeIcon icon={faTrophy} className="text-primary text-4xl" />
      );
    } else if (index === 2) {
      return (
        <FontAwesomeIcon icon={faMedal} className="text-gray-400 text-4xl" />
      );
    } else if (index === 3) {
      return (
        <FontAwesomeIcon icon={faAward} className="text-yellow-600 text-4xl" />
      );
    } else return <h1>{index}.</h1>;
  }

  return (
    <div>
      <h2 className="text-4xl font-semibold text-gray-900 leading-none text-center mt-10">
        Leaderboard
      </h2>
      <p className="text-md text-gray-600 pb-8 text-center pt-2 px-4">
        Helping your friends land their dream job is not a competition. But it
        deserves recognition 🎉
      </p>

      {greeters.map((greeter, id) => (
        <div
          key={id}
          className="px-3 py-5 relative border-b border-gray items-center text-left "
        >
          <div className="flex items-center text-left">
            <h1 className="text-4xl font-bold mt-2">{generateIcon(id + 1)}</h1>
            <div className="ml-5">
              <div class="text-lg font-medium text-gray-900">
                {greeter?.name}
              </div>

              <div class="text-sm text-gray-500">
                {greeter?.referrals?.length} referrals
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
