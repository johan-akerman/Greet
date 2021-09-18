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
          What does Spotify, King and Klarna have in common?
        </h1>

        <p className="text-3xl font-semibold pb-4">
          Except for being founded in Sweden and being Unicorns 🦄 (a startup
          that is valued at 1 billion USD or more), they have an extremely
          talented team.
        </p>

        <p className="text-xl font-light">
          There are a lot of tech companies in Sweden that are working on really
          important (and cool) projects. And there are even more smart people
          who want to work on those really important (and cool) companies.
          Perhaps you and your friends are a few of them.
          <br />
          <br /> Finding the right team that will make a company successful is
          not easy, and the future of the company depends on it. Greet was
          founded to help tech companies find the talent they need to make their
          projects succeed and to help people find a job that they love. Win-win
          🥂
        </p>
      </div>
      <SocialMedia />
    </>
  );
}

export default About;
