import { Disclosure } from "@headlessui/react";
import logo from "../images/logo.png";
import HowIt from "./HowIt";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <>
          <div className="flex justify-between h-24 py-6 w-11/12 mx-auto">
            <div className="flex">
              <Link className="flex pt-1" to="/">
                <img className="h-10 mb-1" src={logo} alt="logo" />
                <h1 className="md:pl-2 pl-2 text-3xl text-black font-medium hover:opacity-60">
                  Greet
                </h1>
              </Link>
              <div className="flex pl-5 pt-1 ">
                <HowIt />
                <Link
                  className="lg:block hidden text-black text-lg font-semibold pl-3 pr-6 py-2 hover:opacity-60"
                  to="/job-board"
                >
                  Job board
                </Link>

                <Link
                  className="lg:block hidden text-black text-lg font-semibold pl-3 pr-6 py-2 hover:opacity-60"
                  to="/companies"
                >
                  Companies
                </Link>
              </div>
            </div>

            <div className="relative">
              <Link
                className="lg:block hidden text-center transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg w-44  justify-center px-8 py-3 bg-black text-primary rounded-xl text-lg font-semibold absolute right-0"
                to="/post-job"
              >
                Post a job
                <FontAwesomeIcon
                  className="ml-3 mb-0.5 text-sm"
                  icon={faArrowRight}
                />
              </Link>

              <MobileMenu />
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
