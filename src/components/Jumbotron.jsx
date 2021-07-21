export function Jumbotron() {
  return (
    <main className="bg-primary">
      <div className="text-left w-10/12 mx-auto py-44">
        <h1 className="text-white text-6xl sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
          Få betalt för att referera dina vänner
          <br />
        </h1>
        <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Greet låter dig hjälpa dina vänner att hitta deras drömjobb. Som
          belöning får du betalt om dem får en intervju eller blir anställda.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Se lediga jobb
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
