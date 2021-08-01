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
          <div className="flex justify-between h-24 py-6 w-10/12 mx-auto">
            <div className="flex">
              <Link className="flex pt-1" to="/">
                <img className="h-10 " src={logo} />
                <h1 className="pl-4 text-3xl text-white font-medium">Greet</h1>
              </Link>
              <div className="flex pl-5 pt-1">
                <HowIt />
                <Link
                  className="lg:block hidden text-white font-medium pl-3 pr-6 py-2 hover:text-gray-200"
                  to="/job-board"
                >
                  Job board
                </Link>
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="absolute right-0">
                <Link
                  className="w-44 flex justify-center px-8 py-3 bg-secondary rounded"
                  to="/post-job"
                >
                  Post a job!
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
