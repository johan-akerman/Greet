import curb from "../images/logos/curb.png";
import depict from "../images/logos/depict.png";
import volta from "../images/logos/volta.png";

export function Trusted() {
  return (
    <div className="grid grid-cols-12 w-11/12 mx-auto mt-12 gap-4 md:text-left text-center ">
      <div className="md:col-span-5 col-span-12">
        <h1 className="text-3xl text-gray-900 pb-3 font-semibold lg:w-96 w-auto">
          Trusted by some of Sweden's hottest startups
        </h1>
      </div>

      <div className=" md:col-span-2 col-span-6 h-20">
        <img src={curb} className="h-full w-auto mx-auto " />
      </div>

      <div className=" md:col-span-2 col-span-6 h-20">
        <img src={depict} className="h-full w-auto  mx-auto" />
      </div>

      <div className="md:col-span-3 col-span-8  h-20">
        <img src={volta} className="h-full w-auto  mx-auto" />
      </div>
    </div>
  );
}
