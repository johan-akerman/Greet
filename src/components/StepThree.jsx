import { Link } from "react-router-dom";

import { useEffect } from "react";

export function StepThree() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="text-5xl text-center mb-2">Congratulations 🎉</h1>
      <h2 className="text-3xl text-center mb-6">Your referral is complete.</h2>
      <p className="text-center text-lg text-gray-500 w-96 mx-auto">
        We will be in touch with you if the company wants to proceed with your
        candidate.
      </p>
      <div className="flex mx-auto w-48 mt-8">
        <Link
          to="/job-board"
          className="z-30 cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-white"
        >
          To the job board
        </Link>
      </div>
    </>
  );
}
