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
        <h1 className="md:text-6xl text-4xl font-medium text-center  text-gray-900 ">
          Greet for Companies
        </h1>
        <p className="text-xl font-light text-center pt-4 max-w-2xl mx-auto px-3">
          Finding the team to make your company successful is not easy and your
          project depends on it. But luckily for you, Greet is here to help you
          hire your next superstar.
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-14 md:py-40 md:pb-12 py-12   md:text-left text-center md:w-10/12 w-11/12  mx-auto ">
          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6  text-green-500"
              icon={faCopy}
            />

            <h1 className="text-3xl text-gray-900 pb-3 font-semibold">
              1. Post a job
            </h1>
            <p className="text-xl font-light">
              We post your jobs and promote them to our community. You set an
              interview and hiring bonus that the referrer will get if you
              decide to interview or hire their candidate.
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6 text-indigo-500 "
              icon={faIdCard}
            />

            <h1 className="text-3xl text-gray-900 pb-3  font-semibold">
              2. Referrals come in
            </h1>
            <p className="text-xl font-light">
              Our community of Greeters refer their talented friends who would
              be a great fit for your job. We screen the candidates and give you
              a list of the best matches.
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6  text-yellow-400"
              icon={faHandsHelping}
            />

            <h1 className="text-3xl  text-gray-900 pb-3 font-semibold">
              3. Interviews and hiring
            </h1>
            <p className="text-xl font-light">
              Like a candidate? Great. You have no obligation to interview or
              hire anyone and you only pay when you interview or hire someone.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white md:py-32 py-16">
        <h1 className="md:text-6xl text-4xl font-medium text-center  text-gray-900 ">
          How much does it cost?
        </h1>
        <p className="text-xl font-light text-center pt-4 max-w-2xl mx-auto px-3">
          Glad you asked. It's free to post a job. You only pay when and if you
          decide to interview or hire a candidate that someone referred.
          <br />
          <br />
        </p>

        <h2 className="text-2xl font-medium text-center pt-2 max-w-2xl mx-auto px-3">
          Interview bonus
        </h2>
        <p className="text-xl font-light text-center max-w-2xl mx-auto px-3">
          The "interview bonus" that you specify when posting your job is what
          the referrer will get if you decide to interview their candidate.
        </p>

        <h2 className="text-2xl font-medium text-center pt-6 max-w-2xl mx-auto px-3">
          Hiring bonus
        </h2>
        <p className="text-xl font-light text-center max-w-2xl mx-auto px-3">
          The "hiring bonus" that you specify when posting your job is what the
          referrer will get if you decide to hire their candidate.
        </p>

        <h2 className="text-2xl font-medium text-center pt-6 max-w-2xl mx-auto px-3">
          What does Greet take?
        </h2>
        <p className="text-xl font-light text-center  max-w-2xl mx-auto px-3">
          Greet takes a fee of <strong>20%</strong> of the "hiring bonus". For
          example, if you post a job with a hiring bonus of 10.000 SEK. You will
          in total be charged 12.000 SEK. 10.000 will get paid to the referrer
          and 2.000 will get paid to Greet. Greet does not take a fee of the
          interview bonus.
        </p>
      </div>

      <div className="bg-white md:pb-20">
        <h1 className="md:text-6xl text-4xl font-medium text-center text-gray-900 ">
          Extra things you get
        </h1>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-14 md:py-28 py-12   md:text-left text-center md:w-10/12 w-11/12  mx-auto ">
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
