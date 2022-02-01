import { Link } from "react-router-dom";
import billOne from "../images/billOne.png";
import billTwo from "../images/billTwo.png";
import billThree from "../images/billThree.png";
import billFour from "../images/billFour.png";
import CountUp from "react-countup";

export function Jumbotron() {
  return (
    <main className="bg-primary">
      <div className="text-center lg:w-7/12 w-12/12 ld:pt-52 md:pt-40 pt-32 pb-52 mx-auto h-2/3">
        <div className="relative w-full bg-light h-2/3 md:block hidden ">
          <img
            src={billThree}
            className="w-32 absolute -top-12 -right-20 md:block hidden"
          />
          <img
            src={billOne}
            className="w-32 absolute md:-top-20 md:-left-20 left-4 top-96"
          />
          <img
            src={billTwo}
            className="w-32 absolute bottom-0 top-52 -left-20 md:block hidden"
          />
          <img
            src={billFour}
            className="w-32 absolute md:bottom-0 md:top-40 md:-right-20 top-96 right-6"
          />
        </div>
        <h1 className="text-black text-6xl md:w-11/12 w-12/12 mx-auto sm:mt-5 font-bold md:mt-5">
          Get paid to refer your friends to their dream job
        </h1>
        <p className="mt-3 text-2xl text-black sm:mt-5 md:mt-5 w-10/12 mx-auto">
          Your friend's dream job is waiting. Greet let's you refer them in
          under 2 minutes. As a reward, you get paid if they get interviewed or
          hired.
        </p>
        <div className="mt-8 sm:mt-12 mx-auto flex gap-3 justify-center">
          <Link
            to="/jobs"
            className="transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg md:mx-0  text-primary shadow font-semibold rounded-xl items-center justify-center py-3 border border-transparent text-base  bg-black md:py-4 md:text-lg px-8"
          >
            Find jobs
          </Link>

          <Link
            to="/sign-up"
            className="transform ease-in duration-100 md:mx-0 text-black  font-semibold rounded-xl items-center justify-center py-3 border-2 border-black hover:bg-black hover:text-primary  text-base  bg-primary md:py-4 md:text-lg px-8"
          >
            Sign up for free
          </Link>
        </div>

        <div className="relative w-full md:hidden block mt-12">
          <img src={billOne} className="w-32 absolute left-4" />

          <img src={billFour} className="w-32 absolute right-6" />
        </div>
      </div>
    </main>
  );
}
