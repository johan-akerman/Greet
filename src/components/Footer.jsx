import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="bg-primary text-white text-left pb-16">
      <div className="w-10/12 mx-auto pt-20 pb-8 flex flex-col sm:flex-row space-y-2 justify-start">
        <div className="w-full sm:w-3/5 pr-6 flex flex-col space-y-2 pb-6">
          <Link to="/">
            <h1 className="text-4xl font-medium">Greet</h1>
          </Link>
          <p className="text-lg font-medium">
            Get rewarded to refer your friends to tech jobs.
          </p>

          <a
            className="w-44 text-lg font-medium border-b-2 border-white hover:opacity-60"
            href="mailto:johan@joingreet.com"
          >
            johan@joingreet.com
          </a>
        </div>
        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold">Product</h1>
          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/job-board"
          >
            Job board
          </Link>

          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/companies"
          >
            Companies
          </Link>
          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/post-job"
          >
            Post a job
          </Link>
          <Link
            className="w-32 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/for-companies"
          >
            For Companies
          </Link>
          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/for-greeters"
          >
            For Greeters
          </Link>

          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/about"
          >
            About us
          </Link>
        </div>
        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold">Follow us</h1>
          <a
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            href="https://www.instagram.com/joingreet/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            href="https://www.linkedin.com/company/joingreet/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
