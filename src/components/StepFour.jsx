export function StepFour() {
  return (
    <div className="overflow-y-auto">
      <h1 className="text-5xl text-left mb-3">Ready, set, pitch!</h1>
      <p className="text-left text-lg mb-2 text-gray-500">
        Make your refferal stand out. Why should your candidate get hired?
      </p>
      <form class="w-full mt-8">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Motivation
            </label>
            <textarea
              class="appearance-none block w-full text-lg bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              rows="8"
              placeholder="You should hire X because of Y..."
            />
          </div>
        </div>
      </form>
    </div>
  );
}
