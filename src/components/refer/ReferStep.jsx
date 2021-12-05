import Zero from "./steps/Zero";
import One from "./steps/One";
import Two from "./steps/Two";
import Three from "./steps/Three";
import Four from "./steps/Four";

let questions = [
  "Who do you want to refer?",
  "Why should your friend get hired?",
  "Who are you?",
  "Last but not least...",
];

export default function ReferStep({
  value,
  toggleWaiting,
  candidate,
  addCandidate,
  referrer,
  addReferrer,
  motivation,
  general,
  addGeneral,
  addMotivation,
}) {
  function generateStep(value) {
    if (value === 0) {
      return (
        <Zero
          toggleWaiting={toggleWaiting}
          candidate={candidate}
          addCandidate={addCandidate}
        />
      );
    } else if (value === 1) {
      return (
        <One
          toggleWaiting={toggleWaiting}
          motivation={motivation}
          addMotivation={addMotivation}
        />
      );
    } else if (value === 2) {
      return (
        <Two
          toggleWaiting={toggleWaiting}
          referrer={referrer}
          addReferrer={addReferrer}
        />
      );
    } else if (value === 3) {
      return <Three general={general} addGeneral={addGeneral} />;
    } else if (value === 4) {
      return <Four />;
    }
  }

  return (
    <div className="mx-auto md:w-6/12 w-11/12">
      <h1 className="text-center text-4xl font-semibold mt-16  mx-auto">
        {questions[value]}
      </h1>
      {generateStep(value)}
    </div>
  );
}
