import { useEffect } from "react";

export function StepTwo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-y-auto">
      <h1 className="md:text-5xl text-4xl text-center mb-3">Who are you?</h1>
      <p className=" text-center text-lg mb-2 text-gray-500">
        Tell us more about yourself to make your referral more credible.
      </p>
      <form class="w-full">
        <div class="mt-8 mb-8">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Your name
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
            Your current job title
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
            Your LinkedIn
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
  );
}
