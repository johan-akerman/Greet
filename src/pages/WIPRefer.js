import ProgressBar from "../components/ProgressBar";
import ReferStep from "../components/refer/ReferStep";
import ReferNavigation from "../components/refer/ReferNavigation";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import ConfettiGenerator from "confetti-js";

export default function WIPRefer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [job] = useState(window.location.href.split("refer/").pop());
  let [index, setIndex] = useState(0);
  let progress = Math.floor((100 / 4) * index);
  let [waiting, setWaiting] = useState(false);
  const [candidate, setCandidate] = useState({
    name: "",
    title: "",
    email: "",
    linkedin: "",
  });

  const [referrer, setReferrer] = useState({
    name: "",
    title: "",
    email: "",
    linkedin: "",
  });

  let [motivation, setMotivation] = useState("");

  let changeIndex = (value) => {
    window.scrollTo(0, 0);
    setIndex(value);
  };

  let toggleWaiting = (value) => {
    setWaiting(value);
  };

  let addCandidate = (value) => {
    setCandidate(value);
  };

  let addReferrer = (value) => {
    setReferrer(value);
  };

  let addMotivation = (value) => {
    setMotivation(value);
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
      return () => confetti.clear();
    }
  }, [index]);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "refer", e.target, "user_VegSOnKK2dbe2SMaWvaPZ")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setIndex(3);
  }

  return (
    <div>
      <canvas id="my-canvas" className="absolute z-0"></canvas>
      <div className="mx-auto w-10/12 py-20">
        <ProgressBar value={progress} />
        <ReferStep
          value={index}
          candidate={candidate}
          referrer={referrer}
          motivation={motivation}
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
