import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export function FAQCard() {
  return (
    <div className="w-full pt-4">
      <div className="w-full p-2 mx-auto bg-white rounded-2xl text-left">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 text-xl align-middle font-semibold  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span clasName="align-middle">What is your refund policy?</span>

                <FontAwesomeIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-primary`}
                  icon={faChevronUp}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-5 pb-3 text-lg text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
