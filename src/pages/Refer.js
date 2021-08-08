import { useState, useEffect } from "react";
import ConfettiGenerator from "confetti-js";
import { StepOne } from "../components/StepOne";
import { StepTwo } from "../components/StepTwo";
import { StepThree } from "../components/StepThree";
import { StepFour } from "../components/StepFour";
function renderStep(index) {
  if (index === 2) return <StepFour />;
  if (index === 3) return <StepThree />;
  else if (index === 1) return <StepTwo />;
  else return <StepOne />;
}

export default function Refer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [index, setIndex] = useState(0);
  const [referMyself, setReferMyself] = useState(false);
  useEffect(() => {
    if (index === 3) {
      const confettiSettings = {
        target: "my-canvas",
        props: ["circle", "square"],
        start_from_edge: true,
      };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();

      return () => confetti.clear();
    }
  }, [index]);

  return (
    <div className="bg-white pb-32 md:min-h-screen h-auto">
      <canvas id="my-canvas" className="absolute z-0 "></canvas>
      <div className="md:h-32 h-12"></div>

      <div className="rounded-2xl md:w-7/12 w-10/12 mx-auto">
        <div className="pt-12 z-30">{renderStep(index)}</div>

        {index != 3 ? (
          <div>
            <div className="flex mx-auto w-full text-center justify-center">
              {index === 0 ? null : (
                <a
                  className="pt-4 ml-2 px-4 cursor-pointer border-b-2 border-black hover:text-primary hover:bg-gray-300 py-3 rounded-xl border-none"
                  onClick={() => setIndex(index - 1)}
                >
                  Go back
                </a>
              )}

              <a
                className="transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg flex ml-2 mr-2 cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-white"
                onClick={() => setIndex(index + 1)}
              >
                {index === 2 ? "Submit" : "Next"}
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
