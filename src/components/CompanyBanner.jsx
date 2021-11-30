import { Link } from "react-router-dom";
import company from "../images/company.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export function CompanyBanner() {
  return (
    <div className="md:w-10/12 w-11/12 flex flex-wrap mx-auto">
      <div className="text-left lg:w-6/12 w-12/12 lg:pt-24 pt-12 pb-20 mx-auto">
        <h2 className="text-gray-900 tracking-wide pb-2 uppercase font-semibold">
          Greet for companies
        </h2>
        <h1 className="text-black lg:text-6xl text-4xl font-bold  sm:mx-auto lg:mx-0 mb-4">
          Generate high quality leads with referrals
        </h1>

        <p className="mt-3 text-xl text-left text-black sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
          <FontAwesomeIcon icon={faCheck} className="mr-3  opacity-70" />
          Get high quality candidates referred by industry professionals.
        </p>

        <p className="mt-3 text-xl text-black sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
          <FontAwesomeIcon icon={faCheck} className="mr-3  opacity-70" />
          Free job posting, promotion and screening.
        </p>

        <p className="mt-3 text-xl text-black sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
          <FontAwesomeIcon icon={faCheck} className="mr-3 opacity-70" />
          Only pay when you interview or hire someone.
        </p>

        <div className="flex items-center pt-10">
          <Link
            to="/sign-up"
            className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
          >
            Request a demo
          </Link>

          <Link
            to="/for-companies"
            className="ml-4 font-semibold mr-2 cursor-pointer border-b-2 border-black  hover:bg-gray-300 px-3 py-3 rounded-xl border-none"
          >
            Read more
          </Link>
        </div>
      </div>

      <div className="md:w-6/12 w-12/12 md:block hidden md:pt-20 pb-20 md:pl-10 pl-0 mx-auto">
        <img
          className=" mt-0 w-full lg:float-right float-none mx-auto"
          src={company}
          alt="company"
        />
      </div>
    </div>
  );
}
