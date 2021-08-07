import { useEffect } from "react";

function PostJob() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-32 ">
      <div className="bg-white rounded-2xl md:w-7/12 w-10/12 mx-auto ">
        <div className="overflow-y-auto">
          <h1 className="text-5xl text-left mb-3">Post a job on Greet</h1>
          <p className="text-left text-lg mb-2 text-gray-500">
            We just launched Greet are very happy that you are interested in
            partnering with us. Before posting your jobs, we would love to get
            to know you better to understand how we can help grow your company.
            Please fill in the form below and we will get in touch.
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
        </div>

        <a className="w-40 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-white">
          Submit
        </a>
      </div>
    </div>
  );
}

export default PostJob;
