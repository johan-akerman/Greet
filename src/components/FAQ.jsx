import { FAQCard } from "./FAQCard";
export function FAQ() {
  return (
    <div className="bg-secondary md:pb-32 pb-12 text-center">
      <h1 className="md:pt-24 pt-16 md:pb-12 pb-8 text-black  md:text-5xl text-4xl font-bold">
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
