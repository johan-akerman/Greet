import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="bg-primary text-white text-left pb-16">
      <div className="w-10/12 mx-auto pt-20 pb-8 flex flex-col sm:flex-row space-y-2 justify-start">
        <div className="w-full sm:w-3/5 pr-6 flex flex-col space-y-2 pb-6">
          <Link to="/">
            <h1 className="text-4xl">Greet</h1>
          </Link>
          <p>Currently available in Sweden 🇸🇪</p>
        </div>
        <div className="w-full sm:w-1/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-xl">Product</h1>
          <Link className="w-24 opacity-60 hover:opacity-100" to="/job-board">
            Job board
          </Link>
          <Link className="w-24 opacity-60 hover:opacity-100" to="/startups">
            For Startups
          </Link>
          <Link className="w-24 opacity-60 hover:opacity-100" to="/greeters">
            For Greeters
          </Link>
          <Link className="w-24 opacity-60 hover:opacity-100" to="/FAQ">
            FAQ
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
