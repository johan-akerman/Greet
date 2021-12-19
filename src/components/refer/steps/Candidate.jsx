import { useEffect } from "react";
import InputField from "src/components/InputField";

export default function Candidate({ candidate, addCandidate }) {
  return (
    <>
      <h2 className="mt-8 mb-4 text-4xl font-semibold text-gray-900 leading-none">
        Who do you want to refer?
      </h2>

      <InputField
        type="text"
        label="Candidate name"
        value={candidate.name}
        onChange={(e) => addCandidate({ ...candidate, name: e.target.value })}
        placeholder="Firstname Lastname"
      />

      <InputField
        type="text"
        label="Candidate current job title"
        value={candidate.title}
        onChange={(e) => addCandidate({ ...candidate, title: e.target.value })}
        placeholder="Developer at X"
      />

      <InputField
        type="email"
        label="Candidate private email"
        value={candidate.email}
        onChange={(e) => addCandidate({ ...candidate, email: e.target.value })}
        placeholder="firstname@company.com"
      />

      <InputField
        type="text"
        label="Candidate LinkedIn profile url"
        value={candidate.linkedin}
        onChange={(e) =>
          addCandidate({ ...candidate, linkedin: e.target.value })
        }
        placeholder="https://www.linkedin.com/in/firstname-lastname"
      />
    </>
  );
}
