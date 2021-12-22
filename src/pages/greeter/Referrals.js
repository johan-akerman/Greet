import ReferralsTable from "src/components/tables/ReferralsTable";
import { useState, useEffect } from "react";
import db, { useAuthState } from "src/firebase";
import { doc, getDoc } from "@firebase/firestore";

export default function Referrals() {
  let [referrals, setReferrals] = useState([]);
  const { user } = useAuthState();

  // useEffect(() => {
  //   var tmp = [];
  //   getDoc(doc(db, "greeters", user.uid)).then((greeter) => {
  //     greeter.data().referrals?.forEach((referral) => {
  //       const referralRef = doc(db, "referrals", referral);
  //       getDoc(referralRef).then((referral) => {
  //         const jobRef = doc(db, "jobs", referral.data().job);
  //         getDoc(jobRef).then((job) => {
  //           tmp.unshift({
  //             referral: referral,
  //             job: job,
  //           });
  //         });
  //       });
  //     });
  //     setReferrals(tmp);
  //   });
  // }, []);

  useEffect(() => {
    getDoc(doc(db, "greeters", user.uid)).then((greeter) => {
      greeter.data().referrals?.forEach((referral, id) => {
        const referralRef = doc(db, "referrals", referral);
        getDoc(referralRef).then((referral) => {
          const jobRef = doc(db, "jobs", referral.data().job);
          getDoc(jobRef).then((job) => {
            let response = {
              referral: referral,
              job: job,
            };

            setReferrals((referrals) => [...referrals, response]);
          });
        });
      });
    });
  }, []);

  if (!referrals) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="bg-white pb-3 ">
      <div className="md:w-11/12 w-11/12 mx-auto my-32">
        <h3 className="text-4xl mt-8" to="/admin">
          My referrals ({referrals.length})
        </h3>

        <ReferralsTable referrals={referrals} />
      </div>
    </div>
  );
}
