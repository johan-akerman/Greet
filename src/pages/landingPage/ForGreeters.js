import { FAQ } from "src/components/FAQ";
import { useEffect } from "react";
import { Banner } from "src/components/Banner";
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
        <div
          className="grid lg:grid-cols-3 grid-cols-1 gap-14 md:py-32 py-12
        md:text-left text-center md:w-10/12 w-11/12 mx-auto "
        >
          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6 text-indigo-500"
              icon={faSearch}
            />

            <h2 className="text-gray-900 tracking-wide pb-2 uppercase font-semibold">
              Step 1:
            </h2>
            <h1 className="text-3xl text-gray-900 pb-3 font-semibold">
              Find a job
            </h1>
            <p className="text-xl font-light">
              Head over to the job board to find exciting tech jobs in Sweden.
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
              Refer a friend that fits the job description and who is looking
              for new challenges.
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
              Get paid
            </h1>
            <p className="text-xl font-light">
              Get paid if the friend you referred gets interviewed or hired.
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
      <Banner
        title="Ready to refer someone?"
        button="See available jobs"
        link="/job-board"
      />
    </>
  );
}

export default ForGreeters;
