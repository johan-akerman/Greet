import { FAQ } from "../components/FAQ";
import { Banner } from "../components/Banner";
import { useEffect } from "react";
import hot from "../images/hot.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faBullhorn,
  faCopy,
  faFolderOpen,
  faEnvelopeOpenText,
  faIdCard,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

function ForCompanies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-white md:pt-32 pt-16">
        <h1 className="max-w-2xl mx-auto text-center md:text-6xl text-4xl font-bold text-gray-900">
          Greet for Companies
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-14 md:py-40 md:pb-12 py-12   md:text-left text-center md:w-10/12 w-11/12  mx-auto ">
          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6  text-green-500"
              icon={faCopy}
            />

            <h2 className="text-gray-900 tracking-wide pb-2 uppercase font-semibold">
              Step 1:
            </h2>
            <h1 className="text-3xl text-gray-900 pb-3 font-semibold">
              Create a company profile
            </h1>
            <p className="text-xl font-light">
              Promote your company to our community of tech people.
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6 text-indigo-500 "
              icon={faIdCard}
            />

            <h2 className="text-gray-900 tracking-wide pb-2 uppercase font-semibold">
              Step 2:
            </h2>
            <h1 className="text-3xl text-gray-900 pb-3  font-semibold">
              Post a job
            </h1>
            <p className="text-xl font-light">
              Write a job description, set a hiring bonus and interview bonus.
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6  text-primary"
              icon={faEnvelopeOpenText}
            />
            <h2 className="text-gray-900 tracking-wide pb-2 uppercase font-semibold">
              Step 3:
            </h2>
            <h1 className="text-3xl  text-gray-900 pb-3 font-semibold">
              Greeters refer
            </h1>
            <p className="text-xl font-light">
              Our community of Greeters refer their talented friends.
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6  text-yellow-400"
              icon={faHandsHelping}
            />
            <h2 className="text-gray-900 tracking-wide pb-2 uppercase font-semibold">
              Step 4:
            </h2>
            <h1 className="text-3xl  text-gray-900 pb-3 font-semibold">
              Interview and hire
            </h1>
            <p className="text-xl font-light">
              If you find an interesting candidate you can interview and hire
              them.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white pt-20 md:pb-20 lg:w-10/12 md:w-10/12 w-11/12 mx-auto">
        <h1 className="text-center md:text-6xl text-4xl font-bold text-gray-900">
          Pricing
        </h1>

        <div className="grid lg:grid-cols-3 md:gap-6 gap-10 grid-cols-1 mt-20 mx-auto">
          <div className="w-full bg-gray-200 text-black rounded-2xl p-6 text-left relative">
            <h1 className=" md:text-2xl text-xl font-bold">Greet Basic</h1>
            <span className="flex items-baseline mt-5 mb-2">
              <h1 className=" md:text-5xl text-2xl font-bold mr-3">0 SEK</h1>
              <p className="font-semibold tracking-wide align-baseline text-2xl">
                / month
              </p>
            </span>

            <ul className="list-disc ml-5 mb-6 text-xl">
              <li>1 job post simultaneously. </li>
              <li>Personalised company page. </li>
              <li>Pay per interview and hiring.</li>
            </ul>

            <Link
              to="/post-job"
              className="md:absolute md:bottom-6 transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg md:mx-0  w-48 text-white shadow font-semibold rounded-xl flex items-center justify-center px-8 py-3 border border-transparent text-base  bg-primary  md:py-4 md:text-lg md:px-10"
            >
              Get started
            </Link>
          </div>
          <div className="w-full bg-gray-200 text-black rounded-2xl p-6 text-left relative">
            <img src={hot} className="absolute right-4 -top-6 w-12" alt="hot" />
            <h1 className=" md:text-2xl text-xl font-bold">Greet Pro</h1>
            <span className="flex items-baseline mt-5 mb-2">
              <h1 className=" md:text-5xl text-2xl font-bold mr-3">250 SEK</h1>
              <p className="font-semibold tracking-wide align-baseline text-2xl">
                / month
              </p>
            </span>

            <ul className="list-disc ml-5 mb-6 text-xl">
              <li>Everything you get in Greet Basic.</li>
              <li>3 job posts simultaneously. </li>
              <li>Screening of candidates.</li>
            </ul>

            <Link
              to="/post-job"
              className="transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg md:mx-0 w-48 text-white shadow font-semibold rounded-xl flex items-center justify-center px-8 py-3 border border-transparent text-base  bg-primary  md:py-4 md:text-lg md:px-10"
            >
              Get started
            </Link>
          </div>

          <div className="w-full bg-gray-200 text-black rounded-2xl p-6 text-left relative">
            <h1 className=" md:text-2xl text-xl font-bold">Greet Plus</h1>
            <span className="flex items-baseline mt-5 mb-2">
              <h1 className=" md:text-5xl text-2xl font-bold mr-3">500 SEK</h1>
              <p className="font-semibold tracking-wide align-baseline text-2xl">
                / month
              </p>
            </span>

            <ul className="list-disc ml-5 mb-6 text-xl">
              <li>Everything you get in Greet Pro. </li>
              <li>Unlimited job posts simultaneously.</li>
            </ul>

            <Link
              to="/post-job"
              className="md:absolute md:bottom-6 transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg  w-48 text-white shadow font-semibold rounded-xl flex items-center justify-center px-8 py-3 border border-transparent text-base  bg-primary  md:py-4 md:text-lg md:px-10"
            >
              Get started
            </Link>
          </div>
        </div>
        <p className="mt-8 text-center text-xl text-gray-400">
          You can switch and cancel plan at any time.
        </p>
      </div>
      <div className="bg-white md:pt-0 pt-12 mb-20 px-3">
        <h1 className="max-w-2xl mx-auto text-center md:text-6xl text-4xl font-bold text-gray-900">
          Pricing example
        </h1>

        <p className="text-xl mx-auto max-w-2xl text-center pt-4">
          You post a job with a hiring bonus of 10 000 SEK and an interview
          bonus of 1000 SEK. You get 17 referrals. After interviewing 3
          candidates you decide to hire one of them. You would now owe 15 000
          SEK in total. 10 000 for the hiring bonus, 3 x 1000 for the interviews
          and 2000 for the Greet Fee (20% of the hiring bonus).
          <br />
          <br />
          Out of these 15 000 SEK. 10 000 will be given to the one who referred
          the candidate you hired. 1000 SEK will be given to each Greeter who
          referred someone who got an interview. 2000 will be given to Greet.
        </p>
      </div>

      <FAQ
        questionOne="What is the Hiring Bonus, Interview Bonus and Greet Fee?"
        answerOne="The hiring bonus is what the Greeters will see on the job board and get paid if their referral results in a hiring. The Interview bonus is what is paid if a referral ends up with an interview. You decide what the hiring- and interview bonus should be. The Greet Fee is equal to 20% of your hiring bonus."
        questionTwo="When and how much do I pay if I am on the Greet Basic plan?"
        answerTwo="You pay when you interview and/ or hire someone. You decide how much you will pay by deciding your own Hiring Bonus and Interview Bonus. Take a look at the example above for more information."
        questionThree="What does the screening include?"
        answerThree="In the  Greet Pro and Greet Plus plan a screening is included. This means that we take a close look at all the candidates and make a list of the ones that are the best fit. 
        "
      />
      <Banner
        title="Ready to hire your next star?"
        button="Post a job"
        link="/post-job"
      />
    </>
  );
}

export default ForCompanies;
