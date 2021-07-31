import { FAQCard } from "./FAQCard";
export function FAQ() {
  return (
    <div className="bg-secondary pb-32 text-center">
      <h1 className="pt-24 pb-12 text-black sm:text-5xl md:text-5xl font-bold">
        Got any questions?
      </h1>

      <div className="lg:w-8/12 w-11/12  mx-auto pb-12">
        <FAQCard />
        <FAQCard />
        <FAQCard />
      </div>

      <span className="pt-12 text-lg">
        Got any other questions? Contact{" "}
        <a className="cursor-pointer border-b-2 border-black hover:text-primary">
          info@greet.com
        </a>
      </span>
    </div>
  );
}
