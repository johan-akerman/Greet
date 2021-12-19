import ReferralsTable from "src/components/tables/ReferralsTable";
import { useState, useEffect } from "react";
import db, { useAuthState } from "src/firebase";
import { doc, getDoc } from "@firebase/firestore";

export default function Referrals() {
  const { user } = useAuthState();
  let [displayedReferrals, setDisplayedReferrals] = useState();

  useEffect(() => {
    getDoc(doc(db, "greeters", user.uid)).then((greeter) => {
      var tmp = [];
      greeter.data().referrals.forEach((referral) => {
        const docRef = doc(db, "referrals", referral);
        getDoc(docRef).then((doc) => {
          tmp.push(doc);
          setDisplayedReferrals(tmp);
        });
      });
    });
  }, []);

  return (
    <div className="bg-white pb-3 ">
      <div className="md:w-11/12 w-11/12 mx-auto mt-32 mb-56">
        <h3 className="text-4xl mt-8" to="/admin">
          My referrals
        </h3>

        <ReferralsTable referrals={displayedReferrals} />
      </div>
    </div>
  );
}
