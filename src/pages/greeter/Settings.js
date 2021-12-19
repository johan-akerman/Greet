import db, { useAuthState } from "src/firebase";
import { useState, useEffect } from "react";
import AccountSettings from "src/components/settings/AccountSettings";
import PasswordSettings from "src/components/settings/PasswordSettings";
import GreeterSettings from "src/components/settings/GreeterSettings";
import { doc, getDoc } from "@firebase/firestore";

function Settings() {
  let [active, setActive] = useState(0);
  let [profile, setProfile] = useState();
  const { user } = useAuthState();

  useEffect(() => {
    getDoc(doc(db, "companies", user.uid)).then((doc) => {
      setProfile(doc.data());
    });
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="grid grid-cols-12 py-32  w-11/12 mx-auto min-h-screen gap-16">
          <div className="col-span-3">
            <button
              className={`${
                active === 0 ? "bg-light" : "bg-white text-gray-500"
              } w-full text-left font-semibold cursor-pointer px-8 py-3 rounded-xl block`}
              onClick={() => setActive(0)}
            >
              Edit public profile
            </button>

            <button
              className={`${
                active === 1 ? "bg-light" : "bg-white text-gray-500"
              } w-full text-left font-semibold cursor-pointer px-8 py-3 rounded-xl block`}
              onClick={() => setActive(1)}
            >
              Account settings
            </button>

            <button
              className={`${
                active === 2 ? "bg-light" : "bg-white text-gray-500"
              } w-full text-left font-semibold cursor-pointer px-8 py-3 rounded-xl block`}
              onClick={() => setActive(2)}
            >
              Password
            </button>
          </div>
          <div className="col-span-7">
            {active === 0 ? (
              <GreeterSettings user={user} profile={profile} />
            ) : active === 1 ? (
              <AccountSettings user={user} />
            ) : (
              <PasswordSettings user={user} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
