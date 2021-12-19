import db, { useAuthState } from "src/firebase";
import {
  doc,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  query,
  where,
} from "@firebase/firestore";
import { useHistory } from "react-router-dom";
import ProgressBar from "src/components/ProgressBar";
import ReferNavigation from "src/components/refer/ReferNavigation";
import Candidate from "src/components/refer/steps/Candidate";
import Motivation from "src/components/refer/steps/Motivation";
import Referrer from "src/components/refer/steps/Referrer";
import General from "src/components/refer/steps/General";
import { useState, useEffect } from "react";
import { addDoc, collection, Timestamp } from "@firebase/firestore";
import { useRole } from "src/hooks/useRole";

export default function Refer() {
  const history = useHistory();
  const url = window.location.href;
  const job = url.split("/")[url.split("/").length - 2];
  const role = useRole();
  const { user } = useAuthState();

  let indices = 5;
  let [index, setIndex] = useState(0);
  const [candidate, setCandidate] = useState({});
  const [referrer, setReferrer] = useState({});
  const [general, setGeneral] = useState({
    open: "I don't know.",
    status: "In progress",
    share: "No, I will get 100%.",
  });
  let addCandidate = (value) => setCandidate(value);
  let addGeneral = (value) => setGeneral(value);
  let addReferrer = (value) => setReferrer(value);
  let progress = Math.floor((100 / (indices - 1)) * index);

  useEffect(() => {
    if (role === "greeter") {
      indices = 4;
      progress = Math.floor((100 / 2) * index);

      getDoc(doc(db, "greeters", user.uid)).then((doc) => {
        let data = doc.data();
        setReferrer({
          ...referrer,
          name: data.name,
          title: data.title,
          linkedin: data.linkedin,
          email: data.email,
        });
      });
    }
  }, [role]);

  let changeIndex = (value) => {
    window.scrollTo(0, 0);
    setIndex(value);
  };

  async function addToDatabase() {
    await addDoc(collection(db, "referrals"), {
      candidate: candidate,
      referrer: referrer,
      general: general,
      job: job,
      time: Timestamp.now(),
    }).then((referralRef) => {
      const q = query(
        collection(db, "greeters"),
        where("email", "==", referrer.email)
      );

      // gets the greeter(s) that has the same email.
      getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          updateDoc(doc.ref, {
            referrals: arrayUnion(referralRef.id),
          });
        });
      });

      history.push(`/referral-complete`);
    });
  }

  useEffect(() => {
    if (role === "greeter" && index === 3) {
      addToDatabase();
    }

    if (index === 4) {
      addToDatabase();
    }
  }, [index]);

  function generateStep(value) {
    switch (value) {
      case 0:
        return <Candidate candidate={candidate} addCandidate={addCandidate} />;
      case 1:
        return <Motivation referrer={referrer} addMotivation={addReferrer} />;
      case 2:
        return <General general={general} addGeneral={addGeneral} />;
      case 3: {
        return <Referrer referrer={referrer} addReferrer={addReferrer} />;
      }
    }
  }

  return (
    <div className="bg-primary md:py-24 py-12">
      <canvas id="my-canvas" className="absolute z-0"></canvas>
      <div className="bg-white rounded-2xl pt-10 md:px-8 px-6 pb-8 text-left md:w-5/12 w-11/12 mx-auto">
        <ProgressBar value={progress} />
        {generateStep(index)}
        <ReferNavigation index={index} changeIndex={changeIndex} />
      </div>
    </div>
  );
}
