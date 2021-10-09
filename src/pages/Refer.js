import { useState, useEffect } from "react";
import ConfettiGenerator from "confetti-js";
import emailjs from "emailjs-com";

import { Link } from "react-router-dom";

function WaitingBtn() {
  return (
    <div className="cursor-not-allowed transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg flex ml-2 mr-2 items-center font-semibold text-md justify-center px-8 py-3 bg-gray-300 rounded-xl text-black">
      Waiting for responses
    </div>
  );
}

export default function Refer() {
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

  const [index, setIndex] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [index]);

  const [job] = useState(window.location.href.split("refer/").pop());
  const [referMyself, setReferMyself] = useState(false);
  const [friend, setFriend] = useState({
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

  const [motivation, setMotivation] = useState("");

  function NextBtn() {
    return (
      <div
        className="transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg flex ml-2 mr-2 cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-white"
        onClick={
          index === 0 && referMyself
            ? () => setIndex(index + 2)
            : () => setIndex(index + 1)
        }
      >
        {index === 2 ? "Submit" : "Next"}
      </div>
    );
  }

  let isStepOneComplete =
    friend.name.length > 0 &&
    friend.title.length > 0 &&
    friend.email.length > 0 &&
    friend.linkedin.length > 0;

  let isStepTwoComplete =
    referrer.name.length > 0 &&
    referrer.title.length > 0 &&
    referrer.email.length > 0 &&
    referrer.linkedin.length > 0;

  let isStepThreeComplete = motivation.length > 0;

  useEffect(() => {
    if (index === 3) {
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

  return (
    <div className="bg-white pb-32 md:min-h-screen h-auto">
      <canvas id="my-canvas" className="absolute z-0 "></canvas>
      <div className="md:h-32 h-12"></div>

      <div className="rounded-2xl md:w-7/12 w-10/12 mx-auto">
        <div className="pt-12 z-30">
          {index === 0 ? (
            <div className="overflow-y-auto">
              <h1 className="md:text-5xl font-semibold text-4xl text-center mb-3">
                👋 Refer someone
              </h1>
              <p className="text-center text-lg mb-4 text-gray-500">
                Refer someone who would be a great fit. Is that your friend or
                yourself?
              </p>
              <form class="w-full">
                <div className="mx-auto w-52">
                  <label>
                    <input
                      class="mr-2  cursor-pointer leading-tight h-6 w-6 text-black"
                      type="checkbox"
                      checked={referMyself}
                      onChange={() => setReferMyself(!referMyself)}
                    />
                    <span class="text-left text-lg-2 text-gray-500">
                      I want to refer myself
                    </span>
                  </label>
                </div>

                <div class="mt-8 mb-8">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    {referMyself ? "Your name" : "Candidate name"}
                  </label>
                  <input
                    class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
                    type="text"
                    placeholder="Firstname Lastname"
                    value={friend.name}
                    onChange={(e) =>
                      setFriend({
                        ...friend,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div class="mb-8">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    {referMyself
                      ? "Your current job title"
                      : "Candidate current job title"}
                  </label>
                  <input
                    class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mb-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
                    type="text"
                    placeholder="Developer at Google"
                    value={friend.title}
                    onChange={(e) =>
                      setFriend({
                        ...friend,
                        title: e.target.value,
                      })
                    }
                  />
                </div>

                <div class="mb-8">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    {referMyself ? "Your email" : "Candidate email"}
                  </label>
                  <input
                    class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
                    type="text"
                    placeholder="firstname@google.com"
                    value={friend.email}
                    onChange={(e) =>
                      setFriend({
                        ...friend,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div class="mb-8">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    {referMyself ? "Your LinkedIn" : "Candidate LinkedIn"}
                  </label>
                  <input
                    class="mb-3 appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
                    type="text"
                    placeholder="www.linkedin.com/firstname"
                    value={friend.linkedin}
                    onChange={(e) =>
                      setFriend({
                        ...friend,
                        linkedin: e.target.value,
                      })
                    }
                  />
                </div>
              </form>
            </div>
          ) : null}

          {index === 1 ? (
            <div className="overflow-y-auto">
              <h1 className="font-semibold md:text-5xl text-4xl text-center mb-3">
                Who are you? 🤔
              </h1>
              <p className=" text-center text-lg mb-2 text-gray-500">
                Tell us more about yourself to make your referral more credible.
              </p>
              <form class="w-full">
                <div class="mt-8 mb-8">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Your name
                  </label>
                  <input
                    class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
                    type="text"
                    placeholder="Firstname Lastname"
                    value={referrer.name}
                    onChange={(e) =>
                      setReferrer({
                        ...referrer,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div class="mb-8">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Your current job title
                  </label>
                  <input
                    class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
                    type="text"
                    placeholder="Developer at Google"
                    value={referrer.title}
                    onChange={(e) =>
                      setReferrer({
                        ...referrer,
                        title: e.target.value,
                      })
                    }
                  />
                </div>

                <div class="mb-8">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Your email
                  </label>
                  <input
                    class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
                    type="text"
                    placeholder="firstname@google.com"
                    value={referrer.email}
                    onChange={(e) =>
                      setReferrer({
                        ...referrer,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div class="mb-8">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Your LinkedIn
                  </label>
                  <input
                    class="appearance-none h-16 text-lg block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
                    type="text"
                    placeholder="www.linkedin.com/firstname"
                    value={referrer.linkedin}
                    onChange={(e) =>
                      setReferrer({
                        ...referrer,
                        linkedin: e.target.value,
                      })
                    }
                  />
                </div>
              </form>
            </div>
          ) : null}

          {index === 2 ? (
            <div className=" overflow-x-hidden">
              <h1 className="font-semibold md:text-5xl text-4xl text-center mb-3 ">
                Ready, set, pitch! 🎬
              </h1>
              <p className="text-center text-lg mb-2 text-gray-500">
                Make your referral stand out. Why should your candidate get
                hired?
              </p>
              <form class="w-full mt-8">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Motivation
                    </label>
                    <textarea
                      class="appearance-none block w-full text-lg bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
                      rows="8"
                      placeholder="You should hire X because of Y..."
                      value={motivation}
                      onChange={(e) => setMotivation(e.target.value)}
                    />
                  </div>
                </div>
              </form>

              <form class="w-full" onSubmit={sendEmail}>
                <input className="hidden" type="text" name="job" value={job} />

                <input
                  className="hidden"
                  type="text"
                  name="referMyself"
                  value={referMyself}
                />

                <input
                  className="hidden"
                  type="text"
                  name="candidateName"
                  value={friend.name}
                />
                <input
                  className="hidden"
                  type="text"
                  name="candidateTitle"
                  value={friend.title}
                />
                <input
                  className="hidden"
                  type="text"
                  name="candidateEmail"
                  value={friend.email}
                />
                <input
                  className="hidden"
                  type="text"
                  name="candidateLinkedin"
                  value={friend.linkedin}
                />

                <input
                  className="hidden"
                  type="text"
                  name="referrerName"
                  value={referrer.name}
                />
                <input
                  className="hidden"
                  type="text"
                  name="referrerTitle"
                  value={referrer.title}
                />
                <input
                  className="hidden"
                  type="text"
                  name="referrerEmail"
                  value={referrer.email}
                />
                <input
                  className="hidden"
                  type="text"
                  name="referrerLinkedin"
                  value={referrer.linkedin}
                />

                <input
                  className="hidden"
                  type="text"
                  name="motivation"
                  value={motivation}
                />

                <div className="flex mx-auto w-full text-center justify-center">
                  <div
                    className="pt-4 ml-2 px-4 cursor-pointer border-b-2 border-black  hover:bg-gray-300 py-3 rounded-xl border-none"
                    onClick={
                      referMyself
                        ? () => setIndex(index - 2)
                        : () => setIndex(index - 1)
                    }
                  >
                    Go back
                  </div>

                  {isStepThreeComplete ? (
                    <input
                      type="submit"
                      value="Send"
                      className="transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg flex ml-2 mr-2 cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-white"
                    />
                  ) : (
                    <WaitingBtn />
                  )}
                </div>
              </form>
            </div>
          ) : null}

          {index === 3 ? (
            <>
              <h1 className="font-semibold md:text-5xl text-4xl text-center mb-2">
                Congratulations 🎉
              </h1>

              <p className="text-center text-lg text-gray-500  mx-auto">
                Thanks for your referral! We will be in touch with you if the
                company wants to proceed with your candidate.
              </p>
              <div className="flex mx-auto w-48 mt-8">
                <Link
                  to="/job-board"
                  className="z-30 cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-white"
                >
                  To the job board
                </Link>
              </div>
            </>
          ) : null}
        </div>

        {index < 2 ? (
          <div className="flex mx-auto w-full text-center justify-center">
            {index !== 0 ? (
              <div
                className="pt-4 ml-2 px-4 cursor-pointer border-b-2 border-black  hover:bg-gray-300 py-3 rounded-xl border-none"
                onClick={
                  index === 2 && referMyself
                    ? () => setIndex(index - 2)
                    : () => setIndex(index - 1)
                }
              >
                Go back
              </div>
            ) : null}

            {index === 0 ? (
              isStepOneComplete ? (
                <NextBtn />
              ) : (
                <WaitingBtn />
              )
            ) : null}

            {index === 1 ? (
              isStepTwoComplete ? (
                <NextBtn />
              ) : (
                <WaitingBtn />
              )
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
