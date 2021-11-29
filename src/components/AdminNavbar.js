import logo from "src/images/logo.png";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "@firebase/auth";
import { useAuthState } from "src/firebase";

export default function Navbar() {
  const { user } = useAuthState();

  return (
    <div className="bg-primary">
      <div className="flex justify-between h-20 py-5 w-11/12 mx-auto">
        <Link className="flex pt-1" to="/">
          <img className="h-10 mb-1" src={logo} alt="logo" />
          <h1 className="md:pl-2 pl-2 text-3xl text-black font-medium hover:opacity-60">
            Greet | For business
          </h1>
        </Link>

        <div className="flex pl-5 pt-1">
          <Link
            className="lg:block hidden text-black text-lg font-semibold pl-3 pr-6 py-2 hover:opacity-60"
            to="/"
          >
            Jobs
          </Link>

          <Link
            className="lg:block hidden text-black text-lg font-semibold pl-3 pr-6 py-2 hover:opacity-60"
            to="/settings"
          >
            Settings
          </Link>

          {user ? (
            <a
              className="lg:block hidden text-black text-lg font-semibold pl-3 pr-6 py-2 hover:opacity-60"
              onClick={() => signOut(getAuth())}
            >
              Logout
            </a>
          ) : (
            <Link
              className="lg:block hidden text-black text-lg font-semibold pl-3 pr-6 py-2 hover:opacity-60"
              to="/sign-in"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
