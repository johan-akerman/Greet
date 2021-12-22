import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div class="md:py-44 py-12 text-center bg-primary">
      <div class="grid cols grid-cols-12 gap-6 md:w-6/12 w-11/12 mx-auto">
        <div className="md:col-span-6 col-span-12 transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg bg-white rounded-2xl pt-10 px-8 pb-8 text-left">
          <h2 className="text-3xl font-semibold text-gray-900 leading-none pb-3">
            Greeter
          </h2>
          <p className="text-md text-gray-600 pb-8">
            Get rewarded to refer your friends to their dream job in tech.
          </p>

          <Link
            to="sign-up/new-greeter"
            className="bg-yellow-100 text-yellow-800 border-yellow-100 font-semibold cursor-pointer px-4 py-3 rounded-lg text-sm"
          >
            Get started
          </Link>
        </div>

        <div className="md:col-span-6 col-span-12 transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg bg-white rounded-2xl pt-10 px-8 pb-8 text-left">
          <h2 className="text-3xl font-semibold text-gray-900 leading-none pb-3">
            Company
          </h2>
          <p className="text-md text-gray-600 pb-8">
            Find the talent you need and strengthen your employer branding.
          </p>

          <Link
            to="sign-up/new-company"
            className="bg-yellow-100 text-yellow-800 border-yellow-100 font-semibold cursor-pointer px-4 py-3 rounded-lg text-sm"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
