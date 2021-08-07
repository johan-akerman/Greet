import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfettiGenerator from "confetti-js";

function PostJob() {
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (submited) {
      const confettiSettings = {
        target: "my-canvas",
        props: ["circle", "square"],
        start_from_edge: true,
      };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      window.scrollTo(0, 0);
      return () => confetti.clear();
    }
  }, [submited]);

  return (
    <div>
      <canvas id="my-canvas" className="absolute z-0 "></canvas>
      <div className="bg-white md:w-7/12 w-10/12 mx-auto ">
        {submited ? (
          <div className="pt-52 pb-80">
            <h1 className="font-semibold md:text-5xl text-4xl text-center mb-2">
              Congratulations 🎉
            </h1>

            <p className="text-center text-lg text-gray-500  mx-auto">
              Thanks for your message! We will be in touch with you as soon as
              possible.
            </p>
            <div className="flex mx-auto w-48 mt-8">
              <Link
                to="/"
                className="z-30 cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-white"
              >
                Back home
              </Link>
            </div>
          </div>
        ) : (
          <div className="py-32">
            <h1 className="text-5xl text-center mb-3 font-semibold">
              Post a job on Greet
            </h1>
            <p className="text-center text-lg mb-12 text-gray-500">
              We would love to understand how we can help grow your company
              before posting your job ads. Please fill in your details, and
              we'll be in touch soon.
            </p>
            <form class="w-full">
              <div class="mt-8 mb-8">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Which company do you represent?
                </label>
                <input
                  class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-500 focus:border-4"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>

              <div class="mt-8 mb-8">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Company website
                </label>
                <input
                  class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-500 focus:border-4"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div class="mb-8">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Your name
                </label>
                <input
                  class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pink-500 focus:border-4"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>

              <div class="mb-8">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Your email
                </label>
                <input
                  class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-500 focus:border-4"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div class="mb-8">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Your phone number
                </label>
                <input
                  class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pink-500 focus:border-4"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </form>

            <a
              className="transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg w-40 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-white"
              onClick={() => setSubmited(true)}
            >
              Submit
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostJob;
