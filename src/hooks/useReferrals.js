import { useEffect, useState } from "react";
import db, { useAuthState } from "src/firebase";
import { doc, getDoc } from "@firebase/firestore";

export function useReferrals() {
  let [referrals, setReferrals] = useState();
  const { user } = useAuthState();

  useEffect(() => {
    var tmp = [];
    getDoc(doc(db, "greeters", user.uid)).then((greeter) => {
      greeter.data().referrals?.forEach((referral) => {
        const referralRef = doc(db, "referrals", referral);
        getDoc(referralRef).then((referral) => {
          const jobRef = doc(db, "jobs", referral.data().job);
          getDoc(jobRef).then((job) => {
            tmp.unshift({
              referral: referral,
              job: job,
            });
          });
        });
      });
    });
    setReferrals(tmp);
  }, []);

  return referrals;
}
