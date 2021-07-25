import { Dialog, Transition } from "@headlessui/react";
import { useState, useEffect } from "react";

export function AboutModal() {
  const [index, setIndex] = useState(0);
  const [referMyself, setReferMyself] = useState(false);

  return (
    <>
      <div
        className="bg-cover w-full h-40 bg-bottom"
        style={{
          backgroundImage: `url("https://cdn.breakit.se/assets/article/4b8b3f7db04885a9cdf581811558a246.jpg")`,
        }}
      ></div>
      <div className="rounded w-32 bg-white p-1 shadow -mt-20 ml-12">
        <img
          className="w-32 rounded-md"
          src="https://media-exp1.licdn.com/dms/image/C4E0BAQFo65CzbG9jhQ/company-logo_200_200/0/1597158989808?e=1634774400&v=beta&t=nnnDMsM1zrAZnnKZv8BgB0DNd3C51sDrOxKyogbrwbc"
        />
      </div>
      <div className="px-12 pb-12">
        <h1 className="text-2xl pt-6">Voi Technology</h1>
        <div className="grid grid-cols-3 gap-14 pt-3 border-b-2 border-gray-200 pb-6">
          <div className="col-span-2">
            <p className="text-sm">
              We are passionate about shaping cities for people, reducing
              pollution and breaking traffic gridlock across Europe. Our mission
              is to provide sustainable and inclusive last-mile mobility
              solutions, enabling people to move freely while at the same time
              helping cities reach their 2030 climate goals.
            </p>
          </div>
          <div>
            <table class="table-auto w-full">
              <tbody>
                <tr>
                  <td className="text-bold">Website</td>
                  <td className="text-right">
                    <a
                      href="voiscooters.com"
                      target="_blank"
                      className="text-blue-500"
                    >
                      voiscooters.com
                    </a>
                  </td>
                </tr>
                <tr class="bg-emerald-200">
                  <td className="text-bold">Founded</td>
                  <td className="text-right">2018</td>
                </tr>
                <tr>
                  <td className="text-bold">Employees</td>
                  <td className="text-right">200+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h1 className="text-xl mt-3">About the job</h1>
        <p className="text-sm pb-2">
          As an Operations Associate, you’ll have broad work tasks that can vary
          on a daily basis and short notice. You’ll be working hands-on with
          parts of the operations across Belgium and work closely with the rest
          of the local operations team as well as HQ, to streamline and increase
          efficiency.{" "}
        </p>
        <a href="" target="_blank" className="text-blue-500">
          Read more{" "}
        </a>
      </div>
    </>
  );
}
