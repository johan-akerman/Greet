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
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="pt-8 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-1 flex items-center">
                  <img className="h-10" src={logo} />
                  <h1 className="pl-4 text-2xl text-white">Greet</h1>
                </div>
                <div className="block sm:ml-6">
                  <div className="flex justify-start">
                    <HowIt />
                    <a
                      href=""
                      className="text-white font-medium px-3 py-2 hover:text-gray-200"
                    >
                      Job board
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
