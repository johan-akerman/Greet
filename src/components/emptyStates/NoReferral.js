import { faUsersSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NoReferral() {
  return (
    <div className="text-center w-5/12 mx-auto my-32">
      <FontAwesomeIcon icon={faUsersSlash} className="text-6xl text-gray-300" />
      <h1 className="text-2xl mt-4">No referrals</h1>
      <p className="mb-8">This job has no candidates yet. Come back later!</p>
    </div>
  );
}
