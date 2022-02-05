import ReferralsTable from "src/components/tables/ReferralsTable";
import ReferralCard from "src/components/ReferralCard";
import { useState, useEffect } from "react";
import db from "src/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

import { useRole } from "src/hooks/useRole";
import TalentPoolTable from "src/components/tables/TalentPoolTable";

export default function TalentPool() {
  let [referrals, setReferrals] = useState([]);
  const role = useRole();

  useEffect(() => {
    const q = query(
      collection(db, "referrals"),
      where("job", "==", "talent-pool")
    );

    let tmpReferrals = [];

    getDocs(q).then((documents) => {
      documents.forEach((doc) => {
        tmpReferrals.push(doc);
      });
      setReferrals(tmpReferrals);
    });
  }, []);

  if (referrals.length == 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="">
      <div className="md:w-10/12 w-12/12 mx-auto md:py-28 py-10">
        <h2 className="text-4xl font-semibold text-gray-900 leading-none text-center mt-10 mb-4">
          Talent Pool
        </h2>
        <p className="text-center text-lg md:w-1/2 w-full mx-auto">
          These talents are available for all companies. <strong>15 000</strong>{" "}
          SEK if you hire someone from the talent pool, <strong>500</strong> SEK
          for an interview.
        </p>

        <div className="md:block hidden">
          <TalentPoolTable referrals={referrals} />
        </div>
      </div>
    </div>
  );
}
