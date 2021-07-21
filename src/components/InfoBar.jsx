import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTimes } from "@fortawesome/free-solid-svg-icons";

export function InfoBar() {
  return (
    <div className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="relative">
          <p className="ml-3 text-white truncate">
            <span className="md:inline">
              🚀 Stora nyheter, vi publicerade precis <strong>27</strong> nya
              jobb!
            </span>
          </p>

          <div className="absolute right-0 top-0">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <FontAwesomeIcon className="text-white" icon={faTimes} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
