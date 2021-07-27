export function Banner() {
  return (
    <div className="bg-light py-32">
      <div className="w-10/12 mx-auto text-center ">
        <h1 className="pb-12 text-black sm:text-5xl md:text-5xl font-bold">
          Hire your next superstar!
        </h1>

        <a
          href="#"
          className="w-60  px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
          Post a job!
        </a>
      </div>
    </div>
  );
}
