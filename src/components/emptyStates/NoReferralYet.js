import { faArrowRight, faUsersSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NoReferralYet() {
  return (
    <div className="text-center w-5/12 mx-auto my-32">
      <FontAwesomeIcon icon={faUsersSlash} className="text-6xl text-gray-300" />
      <h1 className="text-2xl mt-4">You have not referred anyone yet!</h1>
      <p className="mb-8">Get started by referring a friend to a job.</p>
      <Link
        to="/jobs"
        className="hover:opacity-80  w-44 cursor-pointer font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
      >
        Explore the job board
        <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
      </Link>
    </div>
  );
}
