import { Listbox } from "@headlessui/react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";

export default function Select({
  selected,
  statuses,
  changeStatus,
  className,
}) {
  const [local, setLocal] = useState(statuses[0]);

  useEffect(() => {
    changeStatus(local);
  }, [local]);

  return (
    <div className={className}>
      <Listbox value={local} onChange={setLocal}>
        <div className="relative">
          <Listbox.Button className="w-full py-2.5 px-4 pr-8 border-2 leading-tight border-black rounded-lg focus:outline-none cursor-pointer text-left sm:text-sm text-black">
            <span className="block truncate leading-tight text-lg">
              {selected}
            </span>
            <span className="absolute inset-y-0 right-1.5 flex items-center pr-2 pointer-events-none">
              <FontAwesomeIcon
                icon={faChevronDown}
                className="w-5 h-5"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute -ml-0 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {statuses.map((status, id) => (
                <Listbox.Option
                  key={id}
                  className={({ active }) =>
                    `${active ? "text-amber-900 bg-amber-100" : "text-gray-900"}
                    cursor-pointer select-none relative py-2 pl-10 pr-4`
                  }
                  value={status}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {status}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-amber-600" : "text-amber-600"
                          }
                          absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="w-5 h-5 "
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
