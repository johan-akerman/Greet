export function Banner() {
  return (
    <div className="bg-secondary py-32">
      <div className="w-10/12 mx-auto text-center ">
        <h1 className="pb-12 text-gray-900 sm:text-5xl md:text-5xl">
          Hitta er nästa superstjärna!
        </h1>

        <a
          href="#"
          className="w-60  px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
          Lägg ut en annons
        </a>
      </div>
    </div>
  );
}
