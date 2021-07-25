import { useState, useEffect } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
function renderStep(index) {
  if (index === 2) return <StepFour />;
  if (index === 3) return <StepThree />;
  else if (index === 1) return <StepTwo />;
  else return <StepOne />;
}

export function ReferModal() {
  const [index, setIndex] = useState(0);
  const [referMyself, setReferMyself] = useState(false);

  return (
    <div className="">
      <a href=""></a>

      <div className="p-6 overflow-y-auto">{renderStep(index)}</div>

      {index != 3 ? (
        <div className="border-t-2 border-gray-200">
          <div className="mx-auto w-60 flex py-6">
            <a
              className="pt-4 mr-4 cursor-pointer"
              onClick={() => setIndex(index - 1)}
            >
              Go back
            </a>
            <a
              className="w-40 flex items-center justify-center px-10 py-4 bg-blue-500 rounded"
              onClick={() => setIndex(index + 1)}
            >
              {index === 2 ? "Submit" : "Next"}
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
