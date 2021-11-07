import { useState, useEffect } from "react";

export default function Zero({ toggleWaiting, candidate, addCandidate }) {
  useEffect(() => {
    if (
      candidate.name === "" ||
      candidate.title === "" ||
      candidate.email === "" ||
      candidate.linkedin === ""
    ) {
      toggleWaiting(true);
    } else {
      toggleWaiting(false);
    }
  }, [candidate]);

  return (
    <>
      <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2 mt-8">
        Candidate name
      </label>
      <input
        class="appearance-none h-14 text-lg block w-full text-gray-700 border-2 border-black rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
        type="text"
        placeholder="Firstname Lastname"
        value={candidate.name}
        onChange={(e) =>
          addCandidate({
            ...candidate,
            name: e.target.value,
          })
        }
      />

      <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
        Candidate current job title
      </label>
      <input
        class="appearance-none h-14 text-lg block w-full text-gray-700 border-2 border-black rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
        type="text"
        placeholder="Developer at company"
        value={candidate.title}
        onChange={(e) =>
          addCandidate({
            ...candidate,
            title: e.target.value,
          })
        }
      />

      <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
        Candidate private email
      </label>
      <input
        class="appearance-none h-14 text-lg block w-full text-gray-700 border-2 border-black rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
        type="text"
        placeholder="firstname@company.com"
        value={candidate.email}
        onChange={(e) =>
          addCandidate({
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
          addCandidate({
            ...candidate,
            linkedin: e.target.value,
          })
        }
      />
    </>
  );
}
