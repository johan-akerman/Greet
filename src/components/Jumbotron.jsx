import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import phones from "../images/phones.png";

export function Jumbotron() {
  return (
    <main className="bg-primary ">
      <div className="w-10/12 flex mx-auto">
        <div className="text-left w-8/12 mx-auto lg:py-36 py-32">
          <h1 className="text-white lg:text-6xl text-4xl sm:mt-5 font-bold sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
            Get paid to refer your friends to exciting startups
            <br />
          </h1>
          <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Greet let's you help your friend get their dream startup job. As a
            reward, you get paid if they get an interview or get hired.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-500 bg-secondary hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                See available jobs{" "}
                <FontAwesomeIcon className="ml-3" icon={faLongArrowAltRight} />
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <img className="pt-20 w-9/12 float-right" src={phones} />
        </div>
      </div>
    </main>
  );
}
