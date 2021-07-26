/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import HowIt from "./HowIt";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  return (
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <>
          <div className="grid grid-cols-3 gap-4 justify-between h-16 py-6 w-10/12 mx-auto">
            <div className="flex">
              <img className="h-10" src={logo} />
              <h1 className="pl-4 text-2xl text-white">Greet</h1>
            </div>
            <div className="block">
              <div className="flex">
                <HowIt />
                <a
                  href=""
                  className="text-white font-medium pl-3 pr-6 py-2 hover:text-gray-200"
                >
                  Job board
                </a>

                <a
                  href=""
                  className="text-white font-medium px-3 py-2 hover:text-gray-200"
                >
                  About
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute right-0">
                <a className="w-44 flex justify-center px-8 py-3 bg-secondary rounded">
                  Post a job!
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
