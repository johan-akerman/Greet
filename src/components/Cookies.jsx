import { Link } from "react-router-dom";

export default function Cookies() {
  return (
    <div className="bg-white z-50 fixed bottom-0 w-full p-3 border-t-2 border-gray-200 ">
      <div className=" text-black text-xs mx-auto flex justify-between w-7/12">
        <p className="flex items-center">
          We use Cookies to make a better user experience for the services we
          provide. If you do not want to use cookies you can easily disable
          them.
          <Link
            className=" ml-2 flex pt-1  border-b-2 border-black w-16"
            to="/cookie-policy"
          >
            Read more
          </Link>
        </p>
        <div>Btn</div>
      </div>
    </div>
  );
}
