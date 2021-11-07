import { Link } from "react-router-dom";
import phones from "../images/phone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Jumbotron() {
  return (
    <main className="bg-primary ">
      <div className="w-11/12 flex flex-wrap mx-auto">
        <div className="lg:text-left text-center lg:w-7/12 w-12/12 lg:pt-24 pt-12 lg:pb-40 pb-16 mx-auto">
          <h1 className="text-black lg:text-6xl text-4xl sm:mt-5 font-bold sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
            Get rewarded to refer your friends to tech jobs in Sweden
            <br />
          </h1>
          <p className="mt-3 text-xl text-black sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
            Greet let's you introduce your friend to their dream job in tech. As
            a reward, you get paid if they get interviewed or hired.
          </p>
          <div className="mt-4 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <Link
              to="/job-board"
              className="transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg md:mx-0 mx-auto  text-primary shadow font-semibold rounded-xl flex items-center justify-center py-3 border border-transparent text-base  bg-black md:py-4 md:text-lg px-8"
            >
              Explore the job board{" "}
              <FontAwesomeIcon
                className="ml-3 mb-0.5 text-sm"
                icon={faArrowRight}
              />
            </Link>
          </div>
        </div>

        <div className="md:w-5/12 w-12/12 md:pt-12 md:pl-10 pl-0 pt-0 md:pb-12 pb-20 mx-auto">
          <img
            className="md:mt-28 mt-0 w-full lg:float-right float-none mx-auto"
            src={phones}
            alt="phones"
          />
        </div>
      </div>
    </main>
  );
}
