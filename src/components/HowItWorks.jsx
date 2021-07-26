import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faHandshake,
  faGlasses,
} from "@fortawesome/free-solid-svg-icons";

export function HowItWorks() {
  return (
    <div className="bg-white pt-32">
      <h1 className="text-4xl  text-gray-900 sm:text-5xl md:text-6xl">
        How Greet works
      </h1>

      <div className="grid grid-cols-3 gap-14 py-32 text-left w-10/12 mx-auto ">
        <div>
          <FontAwesomeIcon className="text-5xl mb-4" icon={faGlasses} />
          <h1 className="text-3xl text-gray-900 pb-3">
            All eyes on the job board
          </h1>
          <p>
            Rows is the first true spreadsheet with built-in integrations and a
            slick sharing experience.{" "}
          </p>
        </div>

        <div>
          <FontAwesomeIcon className="text-5xl mb-4" icon={faHandshake} />
          <h1 className="text-3xl text-gray-900 pb-3">
            Refer a friend or yourself
          </h1>
          <p>
            Rows is the first true spreadsheet with built-in integrations and a
            slick sharing experience.{" "}
          </p>
        </div>

        <div>
          <FontAwesomeIcon className="text-5xl mb-4" icon={faWallet} />
          <h1 className="text-3xl  text-gray-900 pb-3">
            Get payed for your referral
          </h1>
          <p>
            Rows is the first true spreadsheet with built-in integrations and a
            slick sharing experience.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
