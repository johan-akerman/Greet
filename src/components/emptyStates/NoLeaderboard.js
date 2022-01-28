import { faAward, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NoLeaderboard() {
  return (
    <div className="text-center md:w-5/12 w-11/12 mx-auto md:my-56 my-32 ">
      <FontAwesomeIcon icon={faTrophy} className="text-6xl text-gray-300" />
      <h1 className="text-2xl mt-4">Join the leaderboard!</h1>
      <p className="mb-8">
        The leaderboard is not available when you are signed out. Become a
        Greeter to unlock the leaderboard and much (much) more.
      </p>
      <div className="pt-3">
        <Link
          to="/sign-in"
          className="hover:opacity-80 cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
        >
          Sign in
        </Link>

        <Link
          to="/sign-up"
          className="ml-2 font-semibold mr-2 cursor-pointer border-b-2 border-black  hover:bg-light px-3 py-3 rounded-xl border-none"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}