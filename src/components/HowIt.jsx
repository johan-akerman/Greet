import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faHandSparkles,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef } from "react";

const solutions = [
  {
    name: "For Greeters",
    description: "Measure actions your users take",
    href: "/greeters",
    icon: "faChevronDown",
  },
  {
    name: "For Companies",
    description: "Create your own targeted content",
    href: "/companies",
    icon: "faChevronDown",
  },
];

export default function HowIt() {
  const buttonRef = useRef();

  return (
    <div className="px-4">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              ref={buttonRef}
              className="
                
              text-white group md:py-2 py-1 rounded-md inline-flex items-center  text-lg font-semibold hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <span>How it works</span>
              <FontAwesomeIcon
                className={`${open ? "transform rotate-180" : ""} ml-2`}
                icon={faChevronDown}
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-60  max-w-sm mt-2 transform -translate-x-1/2 md:left-1/2 left-0 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div className="relative bg-white p-3">
                    <Link
                      onClick={() => buttonRef.current?.click()}
                      to="/greeters"
                      className="flex items-center text-left p-2 mx-1 my-2 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center text-2xl justify-center flex-shrink-0 w-10 h-10 text-pink-500 bg-secondary rounded-lg sm:h-12 sm:w-12">
                        <FontAwesomeIcon icon={faHandSparkles} />
                      </div>
                      <div className="ml-4">
                        <p className="text-md font-semibold text-gray-900">
                          For Greeters
                        </p>
                      </div>
                    </Link>
                    <Link
                      onClick={() => buttonRef.current?.click()}
                      to="/companies"
                      className="flex items-center text-left p-2 mx-1 my-2 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center text-2xl justify-center flex-shrink-0 w-10 h-10 text-pink-500 bg-secondary rounded-lg sm:h-12 sm:w-12">
                        <FontAwesomeIcon icon={faRocket} />
                      </div>
                      <div className="ml-4">
                        <p className="text-md font-semibold text-gray-900">
                          For Companies
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FEE2EB" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FF3C78"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FF3C78"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FEE2EB" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FF3C78"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FEE2EB" />
      <rect x="13" y="32" width="2" height="4" fill="#FF3C78" />
      <rect x="17" y="28" width="2" height="8" fill="#FF3C78" />
      <rect x="21" y="24" width="2" height="12" fill="#FF3C78" />
      <rect x="25" y="20" width="2" height="16" fill="#FF3C78" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
