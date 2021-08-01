export function StepOne() {
  return (
    <div className="overflow-y-auto">
      <h1 className="text-5xl text-left mb-3">
        Refer a Software Engineer to Voi
      </h1>
      <p className="text-left text-lg mb-4 text-gray-500">
        Refer someone who would be a great fit. Is that your friend or yourself?
      </p>
      <form class="w-full">
        <label>
          <input
            class="mr-2 leading-tight h-6 w-6 text-black"
            type="checkbox"
          />
          <span class="text-left text-lg  text-gray-500">
            I want to refer myself
          </span>
        </label>

        <div class="mt-8 mb-8">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Candidate name
          </label>
          <input
            class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
            Candidate current job title
          </label>
          <input
            class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            Candidate email
          </label>
          <input
            class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
            Candidate LinkedIn
          </label>
          <input
            class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </form>
    </div>
  );
}
