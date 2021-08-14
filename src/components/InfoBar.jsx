import { Link } from "react-router-dom";

export function InfoBar() {
  return (
    <div className="md:block hidden bg-indigo-600 text-center">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="relative">
          <p className="ml-3 text-white font-medium">
            <span>
              👋 Greetings! We just posted our first jobs!{" "}
              <Link to="/job-board" className="border-b-2 ">
                See open positions
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
