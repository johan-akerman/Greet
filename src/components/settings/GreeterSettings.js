import db from "src/firebase";
import { doc, updateDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import InputField from "../InputField";

export default function GreeterSettings({ user, profile }) {
  const [tmpProfile, setTmpProfile] = useState();
  const [originalProfile] = useState(profile);

  useEffect(() => {
    setTmpProfile(profile);
  }, [profile]);

  async function handleSave() {
    const ref = doc(db, "greeters", user.uid);

    await updateDoc(ref, {
      name: tmpProfile.name,
      title: tmpProfile.title,
      linkedin: tmpProfile.linkedin,
    });
  }

  return (
    <div>
      <h3 className="text-2xl font-medium leading-6 text-gray-900">
        Edit public profile
      </h3>
      <p className="mt-1 text-sm text-gray-600">
        This information will be displayed publicly so be careful what you
        share.
      </p>

      <div className="grid grid-cols-4 gap-4 mt-6">
        <InputField
          className="col-span-2"
          label="Name"
          type="text"
          value={tmpProfile?.name}
          onChange={(e) => {
            setTmpProfile({
              ...tmpProfile,
              name: e.target.value,
            });
          }}
          placeholder="Firstname Lastname"
        />

        <InputField
          className="col-span-2"
          label="Title"
          type="text"
          value={tmpProfile?.title}
          onChange={(e) => {
            setTmpProfile({
              ...tmpProfile,
              title: e.target.value,
            });
          }}
          placeholder="Developer at X"
        />
      </div>

      <InputField
        label="Linkedin profile url"
        type="text"
        className="mt-4"
        value={tmpProfile?.linkedin}
        onChange={(e) => {
          setTmpProfile({
            ...tmpProfile,
            linkedin: e.target.value,
          });
        }}
        placeholder="https://www.linkedin.com/in/firstname-lastname"
      />

      <div className="flex items-center pt-6">
        <div
          className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
          onClick={() => handleSave()}
        >
          Save
        </div>

        <div
          className="ml-2 font-semibold mr-2 cursor-pointer border-b-2 border-black bg-light px-8 py-3 rounded-xl border-none"
          onClick={() => setTmpProfile(originalProfile)}
        >
          Cancel
        </div>
      </div>
    </div>
  );
}
