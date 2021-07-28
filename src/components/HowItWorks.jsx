import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faHandshake,
  faGlasses,
} from "@fortawesome/free-solid-svg-icons";

export function HowItWorks() {
  return (
    <div className="bg-white pt-32">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
        How Greet works
      </h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-14 py-32 text-left w-10/12 mx-auto ">
        <div>
          <FontAwesomeIcon
            className="text-5xl mb-6 text-pink-300"
            icon={faGlasses}
          />
          <h1 className="text-3xl text-gray-900 pb-3 font-semibold">
            All eyes on the job board
          </h1>
          <p className="text-xl font-light">
            Rows is the first true spreadsheet with built-in integrations and a
            slick sharing experience.{" "}
          </p>
        </div>

        <div>
          <FontAwesomeIcon
            className="text-5xl mb-6 text-pink-300"
            icon={faHandshake}
          />
          <h1 className="text-3xl text-gray-900 pb-3  font-semibold">
            Refer a friend or yourself
          </h1>
          <p className="text-xl font-light">
            Rows is the first true spreadsheet with built-in integrations and a
            slick sharing experience.{" "}
          </p>
        </div>

        <div>
          <FontAwesomeIcon
            className="text-5xl mb-6 text-pink-300"
            icon={faWallet}
          />
          <h1 className="text-3xl  text-gray-900 pb-3 font-semibold">
            Get paid for your referral
          </h1>
          <p className="text-xl font-light">
            Rows is the first true spreadsheet with built-in integrations and a
            slick sharing experience.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
