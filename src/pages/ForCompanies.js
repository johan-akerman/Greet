import { FAQ } from "../components/FAQ";
import { Banner } from "../components/Banner";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faBullhorn,
  faCopy,
  faFolderOpen,
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

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-14 md:py-40 md:pb-12 py-12   md:text-left text-center md:w-10/12 w-11/12  mx-auto ">
          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6  text-green-500"
              icon={faCopy}
            />

            <h2 className="text-gray-900 tracking-wide pb-2 uppercase font-semibold">
              Step 1:
            </h2>
            <h1 className="text-3xl text-gray-900 pb-3 font-semibold">
              You post a job
            </h1>
            <p className="text-xl font-light">
              We post your jobs and promote them to our community of Greeters.
              You set an interview and hiring bonus that the Greeter will get if
              you decide to interview or hire their referral.
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
              Referrals and screening
            </h1>
            <p className="text-xl font-light">
              Our community of Greeters refer their talented friends. We screen
              the candidates and give you a list of the best matches for your
              position.
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6  text-yellow-400"
              icon={faHandsHelping}
            />
            <h2 className="text-gray-900 tracking-wide pb-2 uppercase font-semibold">
              Step 3:
            </h2>
            <h1 className="text-3xl  text-gray-900 pb-3 font-semibold">
              Interview and hire
            </h1>
            <p className="text-xl font-light">
              When you find a great fit you move on to interview and hire them.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white pt-20 md:pb-20">
        <h1 className="max-w-2xl mx-auto text-center md:text-6xl text-4xl font-bold text-gray-900">
          Pricing
        </h1>

        <p className="text-xl mx-auto max-w-2xl text-center pt-4">
          The cost of Greet can be divided into four segments: Job post, Hiring
          Bonus, Interview Bonus and Greet Fee.{" "}
        </p>

        <div className="grid lg:grid-cols-4 grid-cols-1 gap-14 md:py-24 md:pb-12 py-12   md:text-left text-center md:w-10/12 w-11/12  mx-auto ">
          <div>
            <h1 className="text-3xl text-gray-900 pb-3 font-semibold">
              Job post
            </h1>
            <p className="text-xl font-light">
              Free. Yes, you post your job and get promotion of your company for
              free.
            </p>
          </div>

          <div>
            <h1 className="text-3xl text-gray-900 pb-3  font-semibold">
              Hiring Bonus
            </h1>
            <p className="text-xl font-light">
              You decide the hiring bonus that the Greeter who referred your
              candidate will get.
            </p>
          </div>

          <div>
            <h1 className="text-3xl  text-gray-900 pb-3 font-semibold">
              Interview Bonus
            </h1>
            <p className="text-xl font-light">
              You can make the ad more attractive by adding an interview bonus
              that the Greeter will get if their referral results in an
              interview. You only pay for the first interview with each
              candidate.
            </p>
          </div>

          <div>
            <h1 className="text-3xl  text-gray-900 pb-3 font-semibold">
              Greet Fee
            </h1>
            <p className="text-xl font-light">
              Greet takes a fee equal to 20% of the hiring bonus. The Greeter
              will still get 100% of the hiring bonus. So you pay at minimum
              120% of the hiring bonus.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 px-3">
        <h1 className="max-w-2xl mx-auto text-center md:text-6xl text-4xl font-bold text-gray-900">
          Pricing example
        </h1>

        <p className="text-xl mx-auto max-w-2xl text-center pt-4">
          You post a job with an hiring bonus of 10 000 SEK and an interview
          bonus of 1000 SEK. You decide to interview 3 candidates before you
          decide to hire one of them. You only pay for the first interview with
          each candidate. In total you will be charged for the hiring bonus (10
          000 SEK), 3 interviews (3000 SEK) and the Greet Fee (20 % of the
          hiring bonus = 2000 SEK). 10 000 + 3000 + 2000 = 15 000 SEK in total.{" "}
          <br /> <br /> Out of these 15 000 SEK. 10 000 will be given to the one
          who referred the candidate you hired. 1000 SEK will be given to each
          Greeter who referred someone who got an interview. 2000 will be given
          to Greet.
        </p>
      </div>

      <div className="bg-white pt-20 md:pb-20">
        <h1 className="max-w-2xl mx-auto text-center md:text-6xl text-4xl font-bold text-gray-900">
          Extra things you get
        </h1>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-14 md:py-40 md:pb-12 py-12   md:text-left text-center md:w-10/12 w-11/12  mx-auto ">
          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6 text-indigo-500"
              icon={faFolderOpen}
            />

            <h1 className="text-3xl text-gray-900 pb-3 font-semibold">
              Free job posts
            </h1>
            <p className="text-xl font-light">
              Post your job for free on our site. You only pay if you decide to
              interview or hire a candidate that someone referred.
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6 text-primary"
              icon={faBullhorn}
            />

            <h1 className="text-3xl text-gray-900 pb-3  font-semibold">
              Free advertisement
            </h1>
            <p className="text-xl font-light">
              Get free promotion of your jobs and your company. You are not
              obligated to interview or hire someone only because you posted a
              job.
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6 text-green-500"
              icon={faTasks}
            />

            <h1 className="text-3xl  text-gray-900 pb-3 font-semibold">
              Free screening
            </h1>
            <p className="text-xl font-light">
              We take a close look on all the candidates and make a list of the
              ones that is the best fit for your jobs.
            </p>
          </div>
        </div>
      </div>

      <FAQ
        questionOne="What does it cost to post a job?"
        answerOne="Nothing, you pay when you decide to interview or hire a candidate that someone referred."
        questionTwo="How much do we pay?"
        answerTwo="You pay for each interview you have with a candidate, this is called the interview bonus. If you post a job with a hiring bonus of 10.000 SEK. You will
        in total be charged 12.000 SEK. 10.000 will get paid to the referrer
        and 2.000 will get paid to Greet. Greet does not take a fee of the
        interview bonus."
        questionThree="How do I post my jobs on Greet?"
        answerThree="We just launched Greet and currently looking for the most exciting tech companies in Sweden to post their jobs on the site. Feel free to reach out to us at join.greet@gmail.com"
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
