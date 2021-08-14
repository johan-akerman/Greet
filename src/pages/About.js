import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white md:py-32 py-16">
      <p className="text-3xl font-medium text-center pt-4 max-w-2xl mx-auto px-3">
        What does companies like Spotify, Skype, King and Klarna have in common?
        🤔
        <br />
        <br />
      </p>

      <p className="text-xl font-light text-center max-w-2xl mx-auto px-3">
        Except for being founded in Sweden and being Unicorns 🦄 (a startup that
        are valued at 1 billion USD or more). They have a really talented team.
        <br />
        <br />
        There are a lot of tech companies in Sweden that are working on really
        important (and cool) projects. And there are even more smart people who
        want to work on those really important (and cool) companies. But finding
        the perfect candidate for a job can be difficult. Finding the team to
        make a company successful is not easy and the company depends on it.
        Greet was founded to help tech companies find the talent they need to
        make their projects succeed and to help people find a job they love.
        Win-win! 🏆
      </p>
    </div>
  );
}

export default About;
