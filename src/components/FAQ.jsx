import { FAQCard } from "./FAQCard";
export function FAQ() {
  return (
    <div className="bg-secondary">
      <h1 className="text-4xl pt-24 pb-12 text-gray-900 sm:text-5xl md:text-6xl">
        Har du några frågor?
      </h1>

      <div className="w-10/12 mx-auto">
        <FAQCard />
        <FAQCard />
        <FAQCard />
      </div>
    </div>
  );
}
