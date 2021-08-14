import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPeace,
  faSearch,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

export function HowItWorks() {
  return (
    <div className="bg-white md:pt-32 pt-16">
      <h1 className="md:text-6xl text-4xl font-bold text-center text-gray-900 ">
        How it works
      </h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-14 md:py-32 py-12   md:text-left text-center md:w-10/12 w-11/12  mx-auto ">
        <div>
          <FontAwesomeIcon
            className="text-5xl mb-6 text-indigo-500"
            icon={faSearch}
          />

          <h1 className="text-3xl text-gray-900 pb-3 font-semibold">
            Take a look on the jobs
          </h1>
          <p className="text-xl font-light">
            On the job board you can find jobs at exciting tech companies. Take
            a look and see if you find something interesting.
          </p>
        </div>

        <div>
          <FontAwesomeIcon
            className="text-5xl mb-6 text-yellow-400"
            icon={faHandPeace}
          />

          <h1 className="text-3xl text-gray-900 pb-3  font-semibold">
            Refer a friend or yourself
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
            Get paid for your referral
          </h1>
          <p className="text-xl font-light">
            If it was a good fit and your referral results in an interview or an
            hiring, you will get rewarded.
          </p>
        </div>
      </div>
    </div>
  );
}
