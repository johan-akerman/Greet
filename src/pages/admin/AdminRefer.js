import db from "src/firebase";
import { useState } from "react";
import { addDoc, collection, Timestamp } from "@firebase/firestore";

export default function AdminRefer() {
  let url = window.location.href;
  let id = url.split("/")[url.split("/").length - 2];

  const [candidate, setCandidate] = useState({
    name: "",
    title: "",
    email: "",
    linkedin: "",
  });

  const [referrer, setReferrer] = useState({
    name: "",
    title: "",
    email: "",
    linkedin: "",
    motivation: "",
  });

  const [general, setGeneral] = useState({
    status: "In progress",
    share: "No, I will get 100%.",
  });

  async function addToDatabase() {
    await addDoc(collection(db, "referrals"), {
      candidate: candidate,
      referrer: referrer,
      general: general,
      job: id,
      time: Timestamp.now(),
    });
  }

  return (
    <>
      <div className="w-6/12 mx-auto my-20">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2 mt-6">
          Do you want to split the hiring bonus if they get hired?
        </label>
        <div class="relative mb-10">
          <select
            class="block appearance-none w-full  border-2 border-black  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
            onChange={(e) =>
              setGeneral({
                ...general,
                share: e.target.value,
              })
            }
          >
            <option>No, I will get 100%.</option>
            <option>Yes, we will get 50% each.</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
            a
          </div>
        </div>

        <h1>-------</h1>

        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2 mt-8">
          Candidate name
        </label>

        <input
          class="appearance-none h-14 text-lg block w-full text-gray-700 border-2 border-black rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
          type="text"
          placeholder="Firstname Lastname"
          value={candidate.name}
          onChange={(e) =>
            setCandidate({
              ...candidate,
              name: e.target.value,
            })
          }
        />

        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Candidate job title
        </label>
        <input
          class="appearance-none h-14 text-lg block w-full text-gray-700 border-2 border-black rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
          type="text"
          placeholder="Developer at company"
          value={candidate.title}
          onChange={(e) =>
            setCandidate({
              ...candidate,
              title: e.target.value,
            })
          }
        />

        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Candidate email
        </label>
        <input
          class="appearance-none h-14 text-lg block w-full text-gray-700 border-2 border-black rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
          type="text"
          placeholder="firstname@company.com"
          value={candidate.email}
          onChange={(e) =>
            setCandidate({
              ...candidate,
              email: e.target.value,
            })
          }
        />

        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Candidate LinkedIn
        </label>
        <input
          class="appearance-none h-14 text-lg block w-full text-gray-700 border-2 border-black rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
          type="text"
          placeholder="www.linkedin.com/firstname"
          value={candidate.linkedin}
          onChange={(e) =>
            setCandidate({
              ...candidate,
              linkedin: e.target.value,
            })
          }
        />

        <h1>-------</h1>

        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2 mt-8">
          Your name
        </label>

        <input
          class="appearance-none h-14 text-lg block w-full text-gray-700 border-2 border-black rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
          type="text"
          placeholder="Firstname Lastname"
          value={referrer.name}
          onChange={(e) =>
            setReferrer({
              ...referrer,
              name: e.target.value,
            })
          }
        />

        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Your job title
        </label>
        <input
          class="appearance-none h-14 text-lg block w-full text-gray-700 border-2 border-black rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
          type="text"
          placeholder="Developer at company"
          value={referrer.title}
          onChange={(e) =>
            setReferrer({
              ...referrer,
              title: e.target.value,
            })
          }
        />

        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Your email
        </label>
        <input
          class="appearance-none h-14 text-lg block w-full text-gray-700 border-2 border-black rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
          type="text"
          placeholder="firstname@company.com"
          value={referrer.email}
          onChange={(e) =>
            setReferrer({
              ...referrer,
              email: e.target.value,
            })
          }
        />

        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Your LinkedIn
        </label>
        <input
          class="appearance-none h-14 text-lg block w-full text-gray-700 border-2 border-black rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
          type="text"
          placeholder="www.linkedin.com/firstname"
          value={referrer.linkedin}
          onChange={(e) =>
            setReferrer({
              ...referrer,
              linkedin: e.target.value,
            })
          }
        />

        <h1>-------</h1>

        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Motivation
        </label>
        <textarea
          class="appearance-none block w-full text-lg text-gray-700 border-black border-2 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
          rows="8"
          placeholder="You should hire X because of Y..."
          value={referrer.motivation}
          onChange={(e) =>
            setReferrer({
              ...referrer,
              motivation: e.target.value,
            })
          }
        />

        <button
          className="text-center transform hover:-translate-y-1 hover:shadow-lg cursor-pointer font-bold text-md px-8 py-3 bg-primary rounded-xl text-black"
          onClick={() => addToDatabase()}
        >
          Add data
        </button>
      </div>
    </>
  );
}
