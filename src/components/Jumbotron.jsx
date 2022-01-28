import { Link } from "react-router-dom";
import phones from "../images/phone.png";
import CountUp from "react-countup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Jumbotron() {
  return (
    <main className="bg-primary ">
      <div className="w-11/12 flex flex-wrap mx-auto">
        <div className="lg:text-left text-center lg:w-7/12 w-12/12 pt-24 lg:pb-40 pb-0 mx-auto">
          <h1 className="text-black lg:text-6xl text-4xl sm:mt-5 font-bold sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
            Earn up to{" "}
            <CountUp
              start={180.0}
              end={570.0}
              duration={1.85}
              separator=" "
              decimal=" "
              decimals={3}
            />{" "}
            SEK to refer your friends to tech jobs
          </h1>
          <p className="mt-3 text-xl text-black sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
            Greet let's you introduce your friend to their dream job in tech. As
            a reward, you get paid if they get interviewed or hired. Currently
            28 jobs and 570 000 SEK available.
          </p>
          <div className="mt-4 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <Link
              to="/jobs"
              className="transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg md:mx-0 mx-auto  text-primary shadow font-semibold rounded-xl flex items-center justify-center py-3 border border-transparent text-base  bg-black md:py-4 md:text-lg px-8"
            >
              Find jobs{" "}
              <FontAwesomeIcon
                className="ml-3 mb-0.5 text-sm"
                icon={faArrowRight}
              />
            </Link>
          </div>
        </div>

        <div className="md:w-5/12 w-12/12 md:pt-12 md:pl-10 pl-0 pt-0 pb-12 mx-auto">
          <img
            className="md:mt-28 mt-16 md:w-full w-3/4 lg:float-right float-none mx-auto"
            src={phones}
            alt="phones"
          />
        </div>
      </div>
    </main>
  );
}
