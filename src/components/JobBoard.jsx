import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ReferModal } from "./ReferModal";
import { AboutModal } from "./AboutModal";

const jobAds = [
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQFo65CzbG9jhQ/company-logo_200_200/0/1597158989808?e=1634774400&v=beta&t=nnnDMsM1zrAZnnKZv8BgB0DNd3C51sDrOxKyogbrwbc",
    company: "Voi Technology",
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
    company: "Curb Food",
    position: "Frontend developer",
    location: "Stockholm, Sweden",
    prize: "7.500 SEK",
  },
];

export function JobBoard() {
  let [referIsOpen, setReferIsOpen] = useState(false);
  let [aboutIsOpen, setAboutIsOpen] = useState(false);

  function closeAboutModal() {
    setAboutIsOpen(false);
  }

  function openAboutModal() {
    setAboutIsOpen(true);
  }
  function closeReferModal() {
    setReferIsOpen(false);
  }

  function openReferModal() {
    setReferIsOpen(true);
  }
  return (
    <>
      <div className="bg-white">
        <div className="w-10/12 mx-auto h-full pt-8 pb-28 ">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl text-left pb-16">
              Trending jobs
            </h1>
            <p className="text-lg text-black pt-4 lg:block hidden font-bold">
              🤫 Pssst, more jobs coming soon!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 grid-cols-1 ">
            {jobAds.map((job, id) => (
              <div className="w-full bg-gray-100 rounded-2xl p-6 text-left">
                <div class="flex items-center text-left pb-4">
                  <img
                    class="w-14 h-14 rounded-2xl mr-4"
                    src={job.image}
                    alt="Company logo"
                  />
                  <div>
                    <p class="text-xl font-semibold text-gray-900 leading-none">
                      {job.position}
                    </p>
                    <p class="text-md text-gray-600">{job.company}</p>
                  </div>
                </div>
                <p className="text-lg">💰 {job.prize}</p>
                <p className="text-lg">📌 {job.location}</p>

                <div className="flex items-center pt-6">
                  <a
                    onClick={() => openReferModal()}
                    className="flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-white"
                  >
                    Refer
                  </a>

                  <a
                    onClick={() => openAboutModal()}
                    className="ml-2 mr-2 cursor-pointer border-b-2 border-black hover:text-primary hover:bg-gray-300 px-3 py-3 rounded-xl border-none"
                  >
                    About the job
                  </a>
                </div>
              </div>
            ))}
          </div>

          <span className="flex mx-auto w-full pt-12 justify-center text-lg">
            <h2>Want to post a job? </h2>
            <a className="ml-2 cursor-pointer border-b-2 border-black hover:text-primary">
              Contact us
            </a>
          </span>
        </div>
      </div>

      <Transition show={aboutIsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeAboutModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

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
              <div className="inline-block w-9/12 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <AboutModal />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition show={referIsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="min-h-11/12 fixed inset-0 z-10 overflow-y-auto"
          onClose={closeReferModal}
        >
          <div className="px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

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
              <div className="inline-block pt-5 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <ReferModal />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
