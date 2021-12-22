import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "@firebase/auth";
import InputField from "src/components/InputField";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  function forgotPassword() {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("An email was sent to " + email);
      })
      .catch((error) => {
        setErrorMessage("Something went wrong, please try again.");
      });
  }

  return (
    <div class="min-h-screen bg-primary md:pt-24 pt-12">
      <div className="bg-white rounded-2xl pt-10 md:px-8 px-6 pb-8 text-left md:w-4/12 w-11/12 mx-auto">
        <h2 className="text-4xl font-semibold text-gray-900 leading-none">
          Forgot your password?
        </h2>
        <p className="text-md text-gray-600 pb-8">
          Enter your email and we will send a link to you so that you can access
          your account again.
        </p>

        <InputField
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="firstname@example.com"
        />

        <p className="text-xs text-center mt-6 mb-3 text-red-500">
          {errorMessage}
        </p>

        <button
          type="submit"
          className="mt-2 w-full bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-100 font-semibold cursor-pointer px-4 py-3 rounded-lg text-sm"
          onClick={forgotPassword}
        >
          Send reset email
        </button>

        <p className="text-xs text-center mt-6 mb-3">{message}</p>
      </div>
    </div>
  );
}

export default ResetPassword;
