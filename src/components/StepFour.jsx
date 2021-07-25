export function StepFour() {
  return (
    <div className="h-96 ">
      <h1 className="text-3xl text-left mb-3">Why should Voi hire you?</h1>
      <p>What makes your friend a perfect fit? </p>
      <form class="w-full mt-16">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Motivation
            </label>
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              rows="6"
              placeholder="You should hire X because of Y..."
            />
          </div>
        </div>
      </form>
    </div>
  );
}
