import { useState } from "react";
import { updatePassword } from "firebase/auth";
import InputField from "src/components/InputField";

export default function PasswordSettings({ user }) {
  const [password, setPassword] = useState();

  async function handlePasswordUpdate() {
    updatePassword(user, password)
      .then(() => {
        console.log("Success!");
      })
      .catch((error) => {
        console.log("Failure: " + error);
      });
  }

  return (
    <div>
      <h3 className="text-2xl font-medium leading-6 text-gray-900">Password</h3>
      <p className="mt-1 text-sm text-gray-600">
        Change to a new password. More features coming soon!
      </p>

      <InputField
        className="w-1/2 mt-12"
        label="New password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder=""
      />

      <div className="flex items-center pt-6">
        <div
          className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
          onClick={() => handlePasswordUpdate()}
        >
          Save
        </div>

        <div
          className="ml-2 font-semibold mr-2 cursor-pointer border-b-2 border-black bg-light px-8 py-3 rounded-xl border-none"
          onClick={() => setPassword("")}
        >
          Cancel
        </div>
      </div>
    </div>
  );
}
