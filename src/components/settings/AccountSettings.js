import { useState } from "react";
import { updateEmail } from "firebase/auth";
import InputField from "src/components/InputField";

export default function AccountSettings({ user }) {
  const [email, setEmail] = useState(user?.email);

  async function handleEmailUpdate() {
    updateEmail(user, email);
  }

  return (
    <div>
      <h3 className="text-2xl font-medium leading-6 text-gray-900">
        Account settings
      </h3>
      <p className="mt-1 text-sm text-gray-600">
        Change to a new email. More features coming soon!
      </p>

      <InputField
        className="w-1/2 mt-12"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="firstname@company.com"
      />

      <div className="flex items-center pt-6">
        <div
          className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
          onClick={() => handleEmailUpdate()}
        >
          Save
        </div>

        <div
          className="ml-2 font-semibold mr-2 cursor-pointer border-b-2 border-black bg-light px-8 py-3 rounded-xl border-none"
          onClick={() => setEmail(user?.email)}
        >
          Cancel
        </div>
      </div>
    </div>
  );
}
