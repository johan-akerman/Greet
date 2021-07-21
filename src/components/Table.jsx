import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Modal } from "./Modal";

const jobAds = [
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQFo65CzbG9jhQ/company-logo_200_200/0/1597158989808?e=1634774400&v=beta&t=nnnDMsM1zrAZnnKZv8BgB0DNd3C51sDrOxKyogbrwbc",
    company: "Voi",
    position: "Frontend developer",
    location: "Stockholm, Sweden",
    prize: "10.000 SEK",
  },
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQFw44quZMineg/company-logo_200_200/0/1562677189546?e=1634774400&v=beta&t=TGNEgHFF03bEzD8eraOT2Q607woNrSHUVMUm8o63DRg",
    company: "Volta Greentech",
    position: "Business developer",
    location: "Stockholm, Sweden",
    prize: "15.000 SEK",
  },
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQHjlxsPphRpqw/company-logo_200_200/0/1619786501790?e=1634774400&v=beta&t=rhv88S6S27PtHrtYUfV_J16Y2aIJsBB1wS0XUEU53rg",
    company: "Curb",
    position: "Frontend developer",
    location: "Stockholm, Sweden",
    prize: "7.500 SEK",
  },
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQFo65CzbG9jhQ/company-logo_200_200/0/1597158989808?e=1634774400&v=beta&t=nnnDMsM1zrAZnnKZv8BgB0DNd3C51sDrOxKyogbrwbc",
    company: "Voi",
    position: "Frontend developer",
    location: "Stockholm, Sweden",
    prize: "10.000 SEK",
  },
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQFw44quZMineg/company-logo_200_200/0/1562677189546?e=1634774400&v=beta&t=TGNEgHFF03bEzD8eraOT2Q607woNrSHUVMUm8o63DRg",
    company: "Volta Greentech",
    position: "Business developer",
    location: "Stockholm, Sweden",
    prize: "15.000 SEK",
  },
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQHjlxsPphRpqw/company-logo_200_200/0/1619786501790?e=1634774400&v=beta&t=rhv88S6S27PtHrtYUfV_J16Y2aIJsBB1wS0XUEU53rg",
    company: "Curb",
    position: "Frontend developer",
    location: "Stockholm, Sweden",
    prize: "7.500 SEK",
  },
];

export function Table() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="bg-white pt-22 pb-8">
        <div className="flex flex-col text-left mx-auto w-10/12 pb-16">
          <h1 className="text-4xl pb-16 text-gray-900 sm:text-5xl md:text-6xl">
            Lediga jobb
          </h1>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className=" overflow-hidden">
                <table className="min-w-full divide-y-2 divide-gray-500">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Company
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Position
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Prize money
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Refer</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobAds.map((job, id) => (
                      <tr
                        className="border-gray-200 border-dashed border-b-2"
                        key={id}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={job.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {job.company}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {job.position}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {job.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {job.prize}
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium cursor-pointer"
                          onClick={openModal}
                        >
                          Refer
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-8/12 p-12 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Modal />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
