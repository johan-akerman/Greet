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
            Currently available in Sweden 🇸🇪
          </p>
          <a className="w-32 text-lg font-medium border-b-2 border-white hover:text-primary">
            info@greet.com
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
            to="/post-job"
          >
            Post a job
          </Link>
          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/startups"
          >
            For Startups
          </Link>
          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/greeters"
          >
            For Greeters
          </Link>
        </div>
      </div>
    </div>
  );
}
