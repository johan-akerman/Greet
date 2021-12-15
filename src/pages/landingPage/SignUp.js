import { useAuthState } from "src/firebase";
import { useCallback, useRef } from "react";
import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { useHistory } from "react-router-dom";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuthState();
  const history = useHistory();

  const handleLogin = useCallback(async (e) => {
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      history.push("/company");
    } catch (e) {
      alert(e);
    }
  }, []);

  return (
    <div class="min-h-screen flex flex-col">
      {currentUser?.email}
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 text-black w-full">
          <h1 class="mb-8 text-4xl text-center">Sign up to Greet</h1>

          <input
            ref={emailRef}
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            ref={passwordRef}
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-primary text-black font-semibold focus:outline-none my-1"
            onClick={() => handleLogin()}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
