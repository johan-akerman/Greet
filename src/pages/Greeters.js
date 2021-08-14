import { FAQ } from "../components/FAQ";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPeace,
  faSearch,
  faGlasses,
  faCoins,
  faMoneyBillWave,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function Greeters() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-white md:pt-32 pt-16">
        <h1 className="md:text-6xl text-4xl font-medium text-center text-gray-900 ">
          Greet for Greeters
        </h1>
        <p className="text-xl font-light text-center pt-4 max-w-lg mx-auto px-3">
          Greetings! Regardless if you are here to help your friend (or
          yourself) to get their dream job or just to earn some quick money. We
          are super excited to have you on board and help us help the tech
          companies in Sweden.
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-14 md:py-40 py-12   md:text-left text-center md:w-10/12 w-11/12  mx-auto ">
          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6 text-indigo-500"
              icon={faSearch}
            />

            <h1 className="text-3xl text-gray-900 pb-3 font-semibold">
              1. Take a look on the jobs
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

            <h1 className="text-3xl text-gray-900 pb-3  font-semibold">
              2. Refer someone
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

            <h1 className="text-3xl  text-gray-900 pb-3 font-semibold">
              3. Get paid for your referral
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
        answerThree="The first one that refers someone to a job is the one that will get all the rewards. We will let you know if your friend has already been refered to that specific job. But remember, there are more great jobs on the job board that you can refer your friend to. "
      />
    </>
  );
}

export default Greeters;
