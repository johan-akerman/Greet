import one from "../images/2.png";
import two from "../images/3.png";
import three from "../images/4.png";
import four from "../images/5.png";
import five from "../images/6.png";

export function SocialMedia() {
  return (
    <div className="bg-secondary py-20">
      <h1 className="md:text-6xl text-4xl font-bold text-gray-900 text-center pb-3">
        Follow us
      </h1>
      <p className="text-lg text-center mb-12 px-3">
        Follow @joingreet on{" "}
        <a
          className="text-primary"
          href="https://www.instagram.com/joingreet/"
          target="_blank"
        >
          Instagram{" "}
        </a>{" "}
        and{" "}
        <a
          className="text-primary"
          href="https://www.linkedin.com/company/joingreet/"
          target="_blank"
        >
          LinkedIn{" "}
        </a>
        to get updates on new positions and other fun stuff.
      </p>
      <div className="w-11/12 mx-auto grid md:grid-cols-5 grid-cols-2 gap-3">
        <a
          className="md:block hidden transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg"
          href="https://www.instagram.com/p/CT70tbhIRKp/"
          target="_blank"
        >
          <img className="rounded-lg " src={one} />
        </a>

        <a
          className="transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg"
          href="https://www.instagram.com/p/CT71yM3ozHu/"
          target="_blank"
        >
          <img className="rounded-lg" src={two} />
        </a>

        <a
          className="transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg"
          href="https://www.instagram.com/p/CT71ijVo9AI/"
          target="_blank"
        >
          <img className="rounded-lg" src={four} />
        </a>

        <a
          className="transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg"
          href="https://www.instagram.com/p/CT71To_I5dc/"
          target="_blank"
        >
          <img className="rounded-lg" src={three} />
        </a>

        <a
          className="transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg"
          href="https://www.instagram.com/p/CT71-evobwS/"
          target="_blank"
        >
          <img className="rounded-lg" src={five} />
        </a>
      </div>
    </div>
  );
}
