import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NoCompany() {
  return (
    <div className="text-center w-5/12 mx-auto my-56">
      <FontAwesomeIcon icon={faBinoculars} className="text-6xl text-gray-300" />
      <h1 className="text-2xl mt-4">Oh, looks like there is no company here</h1>
      <p className="mb-8">Please check out all the companies below</p>
      <Link
        to="/companies"
        className="hover:opacity-80  w-44 cursor-pointer font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
      >
        View companies
      </Link>
    </div>
  );
}
