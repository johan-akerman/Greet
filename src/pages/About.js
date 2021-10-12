import { useEffect } from "react";
import { SocialMedia } from "../components/SocialMedia";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-white md:py-32 py-16 max-w-4xl mx-auto px-3 text-center">
        <h1 className="mx-auto md:text-6xl text-4xl font-bold text-gray-900 pb-4">
          About Greet
        </h1>

        <p className="text-xl font-light">
          Greetings, we are Greet. We reward people to refer their friends to
          their dream job. Greet was founded in 2021 to help tech companies find
          the talent they need to make their projects succeed and to help people
          find a job that they love. Win-win 🥂
          <br />
          <br />
        </p>
      </div>
      <SocialMedia />
    </>
  );
}

export default About;
