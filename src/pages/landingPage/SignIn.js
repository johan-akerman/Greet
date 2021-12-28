import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, getAuth } from "@firebase/auth";
import { Link, useHistory } from "react-router-dom";
import InputField from "src/components/InputField";
import { useRole } from "src/hooks/useRole";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const role = useRole();
  const history = useHistory();

  useEffect(() => {
    if (role === "greeter") {
      history.push("/referrals");
    } else if (role === "company") {
      history.push("/admin");
    }
  }, [role]);

  function login() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((error) => {
        setErrorMessage("Sign in failed, check your email and password.");
      });
  }

  return (
    <div class="min-h-screen bg-primary md:pt-24 pt-12">
      <div className="bg-white rounded-2xl pt-10 md:px-8 px-6 pb-8 text-left md:w-4/12 w-11/12 mx-auto">
        <h2 className="text-4xl font-semibold text-gray-900 leading-none">
          Sign in to Greet
        </h2>
        <p className="text-md text-gray-600 pb-8">
          Please enter your details below to sign in.
        </p>

        <InputField
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="firstname@example.com"
        />

        <InputField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="**********"
        />

        <p className="text-xs text-center mt-6 mb-3 text-red-500">
          {errorMessage}
        </p>

        <button
          type="submit"
          className="mt-2 w-full bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-100 font-semibold cursor-pointer px-4 py-3 rounded-lg text-sm"
          onClick={() => login(email, password)}
        >
          Sign in
        </button>
        <Link
          className="block text-xs text-center mt-6 hover:underline text-semibold cursor-pointer"
          to="/sign-in/reset-password"
        >
          Forgot your password?
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
