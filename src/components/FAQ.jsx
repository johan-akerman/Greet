import { FAQCard } from "./FAQCard";
export function FAQ() {
  return (
    <div className="bg-secondary pb-32">
      <h1 className="text-4xl pt-24 pb-12 text-gray-900 sm:text-5xl md:text-6xl">
        Got any questions?
      </h1>

      <div className="w-8/12 mx-auto">
        <FAQCard />
        <FAQCard />
        <FAQCard />
      </div>

      <span className="flex mx-auto pt-12 justify-center text-lg">
        <h2>Got any other questions? Contact</h2>
        <a className="ml-2 cursor-pointer border-b-2 border-black hover:text-primary">
          info@greet.com
        </a>
      </span>
    </div>
  );
}
