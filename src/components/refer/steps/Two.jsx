import { useState, useEffect } from "react";

export default function Two({ toggleWaiting, referrer, addReferrer }) {
  useEffect(() => {
    if (
      referrer.name === "" ||
      referrer.title === "" ||
      referrer.email === "" ||
      referrer.linkedin === ""
    ) {
      toggleWaiting(true);
    } else {
      toggleWaiting(false);
    }
  }, [referrer]);

  return (
    <>
      <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2 mt-8">
        Candidate name
      </label>
      <input
        class="appearance-none h-14 text-lg block w-full text-gray-700 border-2 border-black rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
        type="text"
        placeholder="Firstname Lastname"
        value={referrer.name}
        onChange={(e) =>
          addReferrer({
            ...referrer,
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
        value={referrer.title}
        onChange={(e) =>
          addReferrer({
            ...referrer,
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
        value={referrer.email}
        onChange={(e) =>
          addReferrer({
            ...referrer,
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
        value={referrer.linkedin}
        onChange={(e) =>
          addReferrer({
            ...referrer,
            linkedin: e.target.value,
          })
        }
      />
    </>
  );
}
