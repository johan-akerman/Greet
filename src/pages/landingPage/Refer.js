import ProgressBar from "src/components/ProgressBar";
import ReferStep from "src/components/refer/ReferStep";
import ReferNavigation from "src/components/refer/ReferNavigation";
import { useState, useEffect } from "react";
import db from "src/firebase";
import { addDoc, collection, Timestamp } from "@firebase/firestore";
import ConfettiGenerator from "confetti-js";

export default function Refer() {
  const url = window.location.href;
  const id = url.split("/")[url.split("/").length - 2];
  let [index, setIndex] = useState(0);
  let progress = Math.floor((100 / 4) * index);
  let [waiting, setWaiting] = useState(false);

  const [candidate, setCandidate] = useState({
    name: "",
    title: "",
    email: "",
    linkedin: "",
  });

  const [general, setGeneral] = useState({
    open: "I don't know.",
    status: "In progress",
    share: "No, I will get 100%.",
  });

  const [referrer, setReferrer] = useState({
    name: "",
    title: "",
    email: "",
    linkedin: "",
    motivation: "",
  });

  let changeIndex = (value) => {
    window.scrollTo(0, 0);
    setIndex(value);
  };

  async function addToDatabase() {
    await addDoc(collection(db, "referrals"), {
      candidate: candidate,
      referrer: referrer,
      general: general,
      job: id,
      time: Timestamp.now(),
    }).then(() => setIndex(4));
  }

  let toggleWaiting = (value) => {
    setWaiting(value);
  };

  let addCandidate = (value) => {
    setCandidate(value);
  };

  let addGeneral = (value) => {
    setGeneral(value);
  };

  let addReferrer = (value) => {
    setReferrer(value);
  };

  let addMotivation = (value) => {
    setReferrer({
      ...referrer,
      motivation: value,
    });
  };

  useEffect(() => {
    if (index === 4) {
      const confettiSettings = {
        target: "my-canvas",
        props: ["circle", "square"],
        start_from_edge: true,
      };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      addToDatabase();
      return () => confetti.clear();
    }
  }, [index]);

  return (
    <div>
      <canvas id="my-canvas" className="absolute z-0"></canvas>
      <div className="mx-auto w-10/12 py-20">
        <ProgressBar value={progress} />
        <ReferStep
          value={index}
          candidate={candidate}
          referrer={referrer}
          general={general}
          addGeneral={addGeneral}
          toggleWaiting={toggleWaiting}
          addCandidate={addCandidate}
          addReferrer={addReferrer}
          addMotivation={addMotivation}
        />
        <ReferNavigation
          index={index}
          waiting={waiting}
          changeIndex={changeIndex}
        />
      </div>
    </div>
  );
}
