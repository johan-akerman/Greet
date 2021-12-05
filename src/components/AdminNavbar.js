import logo from "src/images/logo.png";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "@firebase/auth";

export default function AdminNavbar() {
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
            to="/admin"
          >
            Jobs
          </Link>

          <Link
            className="lg:block hidden text-black text-lg font-semibold pl-3 pr-6 py-2 hover:opacity-60"
            to="/admin/settings"
          >
            Settings
          </Link>

          <div
            className="lg:block hidden text-black text-lg font-semibold pl-3 pr-6 py-2 hover:opacity-60 cursor-pointer"
            onClick={() => signOut(getAuth())}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}
