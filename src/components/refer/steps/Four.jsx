import { Link } from "react-router-dom";

export default function Four() {
  return (
    <>
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
          className="z-30 cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
        >
          Back to the job board
        </Link>
      </div>
    </>
  );
}
