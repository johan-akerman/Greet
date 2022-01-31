import db, { useAuthState } from "src/firebase";
import { useState, useEffect } from "react";
import AccountSettings from "src/components/settings/AccountSettings";
import PasswordSettings from "src/components/settings/PasswordSettings";
import GreeterSettings from "src/components/settings/GreeterSettings";
import { doc, getDoc } from "@firebase/firestore";
import InputField from "src/components/InputField";

function Settings() {
  let [profile, setProfile] = useState();
  const { user } = useAuthState();

  useEffect(() => {
    getDoc(doc(db, "greeters", user.uid)).then((doc) => {
      setProfile(doc.data());
    });
  }, []);

  return (
    <div className="bg-white rounded-xl p-5 overflow-x-auto mx-auto md:mt-20 mt-4 mb-32 md:w-5/12 w-11/12">
      <h2 className="text-4xl font-semibold text-gray-900 leading-none text-center mt-10 mb-16">
        Settings
      </h2>

      <div className="grid grid-cols-4 gap-4 mt-6">
        <InputField
          className="md:col-span-2 col-span-4"
          label="Name"
          type="text"
          placeholder="Firstname Lastname"
        />

        <InputField
          className="md:col-span-2 col-span-4"
          label="Title"
          type="text"
          placeholder="Developer at X"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-2">
        <InputField
          className="md:col-span-2 col-span-4"
          label="Email"
          type="text"
          placeholder="firstname@company.com"
        />

        <InputField
          label="LinkedIn URL"
          type="text"
          className="md:col-span-2 col-span-4"
          placeholder="https://www.linkedin.com/in/firstname-lastname"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-2">
        <InputField
          className="md:col-span-2 col-span-4"
          label="Email"
          type="text"
          placeholder="firstname@company.com"
        />

        <InputField
          className="md:col-span-2 col-span-4"
          label="New password"
          type="password"
          placeholder="********"
        />
      </div>

      <div className="flex items-center justify-center pt-6">
        <div className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black">
          Save
        </div>

        <div className="ml-2 font-semibold mr-2 cursor-pointer border-b-2 border-black bg-light px-8 py-3 rounded-xl border-none">
          Cancel
        </div>
      </div>
    </div>
  );
}

export default Settings;
