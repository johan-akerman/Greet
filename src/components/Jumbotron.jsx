import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import phones from "../images/phones.png";

export function Jumbotron() {
  return (
    <main className="bg-primary ">
      <div className="md:w-10/12 w-11/12 flex flex-wrap mx-auto">
        <div className="lg:order-1 order-2 lg:text-left text-center lg:w-8/12 w-12/12 lg:pt-32 pt-12 lg:pb-40 pb-16 mx-auto">
          <h1 className="text-white lg:text-6xl text-4xl sm:mt-5 font-bold sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
            Get paid to refer your friends to exciting startups
            <br />
          </h1>
          <p className="mt-3 text-xl text-gray-50 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
            Greet let's you introduce your friend to their dream startup job. As
            a reward, you get paid if they get an interview or get hired.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <Link
              to="/job-board"
              className="md:mx-0 mx-auto w-60 text-pink-500 shadow font-semibold rounded-xl flex items-center justify-center px-8 py-3 border border-transparent text-base text-primary bg-white hover:bg-secondary md:py-4 md:text-lg md:px-10"
            >
              See available jobs
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 md:w-4/12 w-12/12 pb-0 mx-auto">
          <img
            className="pt-12 md:w-full w-3/5 lg:float-right float-none mx-auto"
            src={phones}
          />
        </div>
      </div>
    </main>
  );
}
