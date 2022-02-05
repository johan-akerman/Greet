import { faUsersSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NoReferral() {
  return (
    <div className="text-center w-5/12 mx-auto my-32">
      <FontAwesomeIcon icon={faUsersSlash} className="text-6xl text-gray-300" />
      <h1 className="text-2xl mt-4">No referrals yet</h1>
      <p className="mb-8">
        In the meantime, you can find more candidates in the{" "}
        <Link to="/talent-pool" className="text-money">
          talent pool
        </Link>
        .
      </p>
    </div>
  );
}
