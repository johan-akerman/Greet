import { FAQCard } from "./FAQCard";
export function FAQ({
  questionOne,
  answerOne,
  questionTwo,
  answerTwo,
  questionThree,
  answerThree,
}) {
  return (
    <div className="bg-secondary md:pb-32 pb-12 text-center">
      <h1 className="md:pt-24 pt-16 md:pb-12 pb-8 text-black  md:text-6xl text-4xl font-bold">
        Got any questions?
      </h1>

      <div className="lg:w-8/12 w-11/12  mx-auto pb-12">
        <FAQCard question={questionOne} answer={answerOne} />
        <FAQCard question={questionTwo} answer={answerTwo} />
        <FAQCard question={questionThree} answer={answerThree} />
      </div>

      <span className="pt-12 text-lg">
        Got any other questions? Contact{" "}
        <a
          className="border-b-2 border-primary hover:text-primary hover:border-secondary"
          href="mailto:join.greet@gmail.com"
        >
          join.greet@gmail.com
        </a>
      </span>
    </div>
  );
}
