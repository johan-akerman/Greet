import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export function HowItWorks() {
  return (
    <div className="bg-white pt-32">
      <h1 className="text-4xl  text-gray-900 sm:text-5xl md:text-6xl">
        Så fungerar Greet
      </h1>

      <div className="grid grid-cols-3 gap-14 py-32 text-left w-10/12 mx-auto ">
        <div>
          <FontAwesomeIcon className="text-4xl mb-4" icon={faCoffee} />
          <h1 className="text-3xl text-gray-900 pb-3">Kolla in lediga jobb</h1>
          <p>
            Rows is the first true spreadsheet with built-in integrations and a
            slick sharing experience.{" "}
          </p>
        </div>

        <div>
          <FontAwesomeIcon className="text-4xl mb-4" icon={faCoffee} />
          <h1 className="text-3xl text-gray-900 pb-3">Referera dina vänner</h1>
          <p>
            Rows is the first true spreadsheet with built-in integrations and a
            slick sharing experience.{" "}
          </p>
        </div>

        <div>
          <FontAwesomeIcon className="text-4xl mb-4" icon={faCoffee} />
          <h1 className="text-3xl  text-gray-900 pb-3">
            Få betalt när det matchar{" "}
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
