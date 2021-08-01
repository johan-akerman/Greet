import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import phones from "../images/phones.png";

export function Jumbotron() {
  return (
    <main className="bg-primary ">
      <div className="w-10/12 flex mx-auto">
        <div className="text-left w-8/12 mx-auto pt-32 pb-40">
          <h1 className="text-white lg:text-6xl text-4xl sm:mt-5 font-bold sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
            Get paid to refer your friends to exciting startups
            <br />
          </h1>
          <p className="mt-3 text-xl text-gray-50 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
            Greet let's you introduce your friend to their dream startup job. As
            a reward, you get paid if they get an interview or get hired.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                to="/job-board"
                className="w-full font-semibold rounded-xl flex items-center justify-center px-8 py-3 border border-transparent text-base text-pink-500 bg-white hover:bg-secondary md:py-4 md:text-lg md:px-10"
              >
                See available jobs
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <img className="pt-12 w-10/12 float-right" src={phones} />
        </div>
      </div>
    </main>
  );
}
