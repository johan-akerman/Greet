import { Disclosure } from "@headlessui/react";
import logo from "../images/logo.png";
import HowIt from "./HowIt";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  return (
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <>
          <div className="flex justify-between h-24 py-6  w-11/12 mx-auto">
            <div className="flex">
              <Link className="flex pt-1" to="/">
                <img className="md:h-10 h-8" src={logo} />
                <h1 className="md:pl-4 pl-2 md:text-3xl text-2xl text-white font-medium">
                  Greet
                </h1>
              </Link>
              <div className="flex pl-5 pt-1 ">
                <HowIt />
                <Link
                  className="lg:block hidden text-white text-lg font-semibold pl-3 pr-6 py-2 hover:text-gray-200"
                  to="/job-board"
                >
                  Job board
                </Link>
              </div>
            </div>

            <div className="relative md:block hidden">
              <Link
                className="transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg w-44 flex justify-center px-8 py-3 bg-white text-pink-500 rounded-xl text-lg font-semibold absolute right-0"
                to="/post-job"
              >
                Post a job
              </Link>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
