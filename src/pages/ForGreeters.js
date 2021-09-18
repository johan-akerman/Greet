import { FAQ } from "../components/FAQ";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPeace,
  faSearch,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

function ForGreeters() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-white md:pt-32 pt-16">
        <h1 className="max-w-2xl mx-auto text-center md:text-6xl text-4xl font-bold text-gray-900">
          Greet for Greeters
        </h1>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-14 md:py-40 py-12   md:text-left text-center md:w-10/12 w-11/12  mx-auto ">
          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6 text-indigo-500"
              icon={faSearch}
            />
            <h2 className="text-gray-900 tracking-wide pb-2 uppercase font-semibold">
              Step 1:
            </h2>
            <h1 className="text-3xl text-gray-900 pb-3 font-semibold">
              Take a look on the jobs
            </h1>
            <p className="text-xl font-light">
              On the job board you can find jobs at exciting tech companies.
              Take a look and see if you find something interesting.
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6 text-yellow-400"
              icon={faHandPeace}
            />
            <h2 className="text-gray-900 tracking-wide pb-2 uppercase font-semibold">
              Step 2:
            </h2>
            <h1 className="text-3xl text-gray-900 pb-3  font-semibold">
              Refer someone
            </h1>
            <p className="text-xl font-light">
              Found a job that would be a perfect fit for your friend (or
              youself)? Don't be shy, refer them!
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6 text-green-500"
              icon={faMoneyBillWave}
            />
            <h2 className="text-gray-900 tracking-wide pb-2 uppercase font-semibold">
              Step 3:
            </h2>
            <h1 className="text-3xl  text-gray-900 pb-3 font-semibold">
              Get paid for your referral
            </h1>
            <p className="text-xl font-light">
              If it was a good fit and your referral results in an interview or
              an hiring, you will get rewarded.
            </p>
          </div>
        </div>
      </div>
      <FAQ
        questionOne="How many can I refer?"
        answerOne="You can refer how many friends you want. What are you waiting for?"
        questionTwo="When and how much do I get paid?"
        answerTwo="It varies. On each job ad you can find the specified hiring bonus and the interview bonus. You get paid when your candidate get an interview or get hired."
        questionThree="What happens if someone already referred my friend?"
        answerThree="The first one that refers someone to a job is the one that will get all the rewards. We will let you know if your friend has already been referred to that specific job. But remember, there are more great jobs on the job board that you can refer your friend to. "
      />
    </>
  );
}

export default ForGreeters;
