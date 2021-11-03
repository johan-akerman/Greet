import one from "../images/2.png";
import two from "../images/3.png";
import three from "../images/4.png";
import four from "../images/5.png";
import five from "../images/6.png";

export function SocialMedia() {
  return (
    <div className="bg-lightYellow py-28">
      <h1 className="md:text-6xl text-4xl font-bold text-gray-900 text-center pb-3">
        Follow us
      </h1>
      <p className="text-lg text-center mb-12 px-3">
        Follow us on{" "}
        <a
          className="font-semibold border-black hover:text-secondary"
          href="https://www.instagram.com/joingreet/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram{" "}
        </a>{" "}
        and{" "}
        <a
          className="font-semibold  border-black hover:text-secondary"
          href="https://www.linkedin.com/company/joingreet/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn{" "}
        </a>
        to get updates on new positions and other fun stuff.
      </p>
      <div className="w-11/12 mx-auto grid md:grid-cols-5 grid-cols-2 gap-5 ">
        <a
          className="transform ease-in duration-100 hover:-translate-y-2 "
          href="https://www.instagram.com/p/CT71ijVo9AI/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={four}
            className="rounded-lg hover:shadow-lg "
            alt="instagram post"
          />
        </a>

        <a
          className="md:block hidden transform ease-in duration-100 hover:-translate-y-2"
          href="https://www.instagram.com/p/CVDg7J-oa0c/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-lg hover:shadow-lg "
            src={one}
            alt="instagram post"
          />
        </a>

        <a
          className="transform ease-in duration-100 hover:-translate-y-2"
          href="https://www.instagram.com/p/CVDjVNGoEPf/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-lg hover:shadow-lg "
            src={five}
            alt="instagram post"
          />
        </a>
        <a
          className="transform ease-in duration-100 hover:-translate-y-2"
          href="https://www.instagram.com/p/CT71yM3ozHu/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-lg hover:shadow-lg "
            src={two}
            alt="instagram post"
          />
        </a>

        <a
          className="transform ease-in duration-100 hover:-translate-y-2 "
          href="https://www.instagram.com/p/CT71To_I5dc/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-lg hover:shadow-lg "
            src={three}
            alt="instagram post"
          />
        </a>
      </div>
    </div>
  );
}
