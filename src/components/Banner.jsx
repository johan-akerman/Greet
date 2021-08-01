import { Link } from "react-router-dom";

export function Banner({ title }) {
  return (
    <div className="bg-light py-32">
      <div className="w-10/12 mx-auto text-center ">
        <h1 className="pb-12 text-black sm:text-5xl md:text-5xl font-bold">
          {title}
        </h1>

        <Link
          to="/post-job"
          className="w-60  px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:opacity-80 md:py-4 md:text-lg md:px-10"
        >
          Post a job
        </Link>
      </div>
    </div>
  );
}
