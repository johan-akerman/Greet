import ReferralsTable from "src/components/tables/ReferralsTable";
import ReferralCard from "src/components/ReferralCard";
import { useState, useEffect } from "react";
import db, { useAuthState } from "src/firebase";
import { doc, getDoc } from "@firebase/firestore";
import { useRole } from "src/hooks/useRole";
import NoReferrals from "src/components/emptyStates/NoReferrals";

export default function Referrals() {
  let [referrals, setReferrals] = useState([]);
  const { user } = useAuthState();
  const role = useRole();

  useEffect(() => {
    if (user) {
      getDoc(doc(db, "greeters", user.uid)).then((greeter) => {
        greeter.data().referrals?.forEach((referral) => {
          const referralRef = doc(db, "referrals", referral);
          getDoc(referralRef).then((referral) => {
            const jobRef = doc(db, "jobs", referral.data().job);
            getDoc(jobRef).then((job) => {
              setReferrals((referrals) => [
                ...referrals,
                {
                  referral: referral,
                  job: job,
                },
              ]);
            });
          });
        });
      });
    }
  }, []);

  if (role === "none") {
    return <NoReferrals />;
  }

  if (!referrals) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="md:bg-light  ">
      <div className="md:w-11/12 w-12/12 mx-auto md:py-28 py-10">
        <h2 className="text-4xl font-semibold text-gray-900 leading-none text-center mt-10 mb-20">
          My referrals ({referrals.length})
        </h2>

        <div className="md:block hidden">
          <ReferralsTable referrals={referrals} />
        </div>

        <div className="block md:hidden pt-8">
          <ReferralCard referrals={referrals} />
        </div>
      </div>
    </div>
  );
}
