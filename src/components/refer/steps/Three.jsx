import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faHandSparkles,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

export default function Three() {
  return (
    <>
      <div class="w-full px-3 mb-6 mt-12">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2 mt-8">
          How open are they to a new job?
        </label>
        <div class="relative mb-12">
          <select class="block appearance-none w-full border-2 border-black  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white ">
            <option>I don't know.</option>
            <option>Average.</option>
            <option>Looking actively.</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>

        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2 mt-6">
          Do you want to split the hiring bonus if they get hired?
        </label>
        <div class="relative mb-10">
          <select class="block appearance-none w-full  border-2 border-black  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white ">
            <option>No, I will get 100%.</option>
            <option>Yes, we will get 50% each.</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>

        <input
          class="mr-2 cursor-pointer leading-tight h-6 w-6"
          type="checkbox"
          //   checked={referMyself}
          //   onChange={() => setReferMyself(!referMyself)}
        />
        <span>I agree to the Terms and Conditions and the Privacy Policy.</span>
      </div>
    </>
  );
}
