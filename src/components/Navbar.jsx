import { Disclosure } from "@headlessui/react";
import logo from "../images/logo.png";
import HowIt from "./HowIt";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useAuthState } from "src/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ProfileMenu from "./ProfileMenu";
import { useRole } from "src/hooks/useRole";

export function Navbar() {
  const { user } = useAuthState();
  const role = useRole();
  return (
    <Disclosure as="nav" className="bg-primary  w-full">
      {({ open }) => (
        <>
          <div className="flex justify-between h-24 py-6 w-11/12 mx-auto ">
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
                  to="/jobs"
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

            <div className="flex">
              <MobileMenu />
              {user ? (
                <>
                  {role === "company" ? (
                    <Link
                      to="/create-new-job"
                      className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-sm justify-center px-6 bg-black rounded-lg mr-8 text-white"
                    >
                      <FontAwesomeIcon icon={faPlus} className="mr-3" />
                      Create new job
                    </Link>
                  ) : (
                    ""
                  )}

                  <ProfileMenu role={role} />
                </>
              ) : (
                <>
                  <Link
                    className="lg:block hidden text-black text-lg font-semibold pl-3 pr-6 py-2 hover:opacity-60"
                    to="/sign-in"
                  >
                    Sign in
                  </Link>
                  <Link
                    className="lg:block hidden text-center transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg w-32 justify-center px-8 py-2 mb-1 bg-black text-primary rounded-xl text-lg font-semibold"
                    to="/sign-up"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
