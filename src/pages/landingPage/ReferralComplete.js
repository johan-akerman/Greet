import ConfettiGenerator from "confetti-js";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ReferralComplete() {
  useEffect(() => {
    const confettiSettings = {
      target: "my-canvas",
      props: ["circle", "square"],
      start_from_edge: true,
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <div className="bg-primary ">
      <canvas id="my-canvas" className="absolute z-0"></canvas>
      <div className="md:py-24 py-12 md:w-6/12 w-11/12 mx-auto">
        <h1 className="font-semibold md:text-5xl text-4xl text-center mb-6 mt-32">
          Congratulations 🎉
        </h1>
        <p className="text-center text-xl">
          Thanks for your referral! We will be in touch with you if the company
          wants to proceed with your candidate.
        </p>
        <div className="flex justify-center w-auto mt-8 mb-60">
          <Link
            to="/jobs"
            className="z-30 cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-black rounded-xl text-white"
          >
            Back to the job board
          </Link>
        </div>
      </div>
    </div>
  );
}
