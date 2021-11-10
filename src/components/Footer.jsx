import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <div className="bg-primary text-whblackite text-left">
      <div className="w-11/12 mx-auto pt-20 pb-8 flex flex-col sm:flex-row space-y-2 justify-start">
        <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-2 pb-6">
          <Link className="flex pt-1" to="/">
            <img className="h-12 pb-2 " src={logo} alt="logo" />
            <h1 className="md:pl-2 pl-2 text-4xl text-black font-medium hover:opacity-60">
              Greet
            </h1>
          </Link>
          <p className="md:w-80 w-full text-lg font-medium -mt-2 ">
            Get rewarded to refer your friends to tech jobs in Sweden.
          </p>

          <a
            className="w-44 text-lg font-medium border-b-2 border-black hover:opacity-60"
            href="mailto:johan@joingreet.com"
          >
            johan@joingreet.com
          </a>
        </div>
        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold">Greet</h1>

          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/about"
          >
            About us
          </Link>

          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/job-board"
          >
            Job board
          </Link>

          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/companies"
          >
            Companies
          </Link>

          <Link
            className="w-32 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/for-companies"
          >
            For Companies
          </Link>
          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/for-greeters"
          >
            For Greeters
          </Link>
        </div>

        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold">Legal</h1>

          <Link
            className="opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/privacy-policy"
          >
            Privacy policy
          </Link>

          <Link
            className="opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/cookie-policy"
          >
            Cookie policy
          </Link>
        </div>

        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold">Social</h1>
          <a
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            href="https://www.instagram.com/joingreet/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            href="https://www.linkedin.com/company/joingreet/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        {/* 
        <div className="w-full sm:w-2/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold">Newsletter</h1>
          <p>Latest news and job posts straight to your inbox.</p>
          <form action="#" class="mt-2 w-full">
            <div class="flex items-center">
              <input
                type="email"
                placeholder="Email"
                class="appearance-none h-10 text-md block bg-white  border-black text-gray-700 border-2 rounded py-3 px-4  leading-tight focus:outline-none  focus:border-black focus:border-4 mr-3"
                required
              />
              <button className="bg-black text-primary font-semibold px-5 py-2 rounded ">
                Subscribe
                <FontAwesomeIcon
                  className="ml-3 mb-0.5 text-sm"
                  icon={faPaperPlane}
                />
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
}
