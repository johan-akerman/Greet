import {
  faArrowRight,
  faDesktop,
  faUsersSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NotMobileFriendlyYet() {
  return (
    <div className="text-center w-5/12 mx-auto my-32">
      <FontAwesomeIcon icon={faDesktop} className="text-6xl text-gray-300" />
      <h1 className="text-2xl mt-4">Not mobile friendly yet!</h1>
      <p className="mb-8">
        This part of Greet is not mobile friendly yet. Please use a desktop in
        the meantime.
      </p>
    </div>
  );
}
