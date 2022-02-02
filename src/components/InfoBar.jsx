import { Link } from "react-router-dom";

export function InfoBar() {
  return (
    <div className=" bg-money text-center">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="relative">
          <p className="ml-3 text-black font-medium">
            <span className="mr-2">💸</span>
            <span>
              <strong> 28</strong> jobs and <strong>570 000</strong> SEK
              available.{" "}
              <Link to="/jobs" className="border-b-2 border-black ">
                Refer a friend
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
