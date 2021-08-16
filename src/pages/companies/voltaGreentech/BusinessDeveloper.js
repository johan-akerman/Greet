import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarDay,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

import volta from "../../../images/volta.jpeg";
import { Banner } from "../../../components/Banner";
import { useEffect } from "react";

export function BusinessDeveloper() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="md:pt-32 pt-12 pb-12">
        <div className="lg:w-8/12 w-11/12 mx-auto rounded-xl">
          <div className="flex">
            <img
              alt="logo"
              className="md:h-24 md:w-24 w-16 h-16 md:mr-6 mr-4 rounded-md"
              src="https://media-exp1.licdn.com/dms/image/C560BAQFw44quZMineg/company-logo_200_200/0/1562677189546?e=1634774400&v=beta&t=TGNEgHFF03bEzD8eraOT2Q607woNrSHUVMUm8o63DRg"
            />

            <div>
              <h1 className="font-semibold lg:text-4xl text-xl md:pt-3 pt-1">
                Business developer
              </h1>
              <span className="flex pt-1 md:text-md text-sm text-gray-500">
                <p className="md:block hidden mr-4">
                  <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                  Volta Greentech
                </p>
                <p className="mr-4">
                  <FontAwesomeIcon icon={faCalendarDay} className="mr-2" />
                  Full time
                </p>
                <p className="mr-4">
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
                  Stockholm
                </p>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 lg:gap-14 gap-3">
            <div className="lg:col-span-2 col-span-3">
              <h1 className="text-3xl font-medium md:mt-12 mt-6 mb-3">
                About Volta Greentech
              </h1>
              <p className="md:text-xl text-md">
                There are around one billion cows on the planet. Together they
                produce over 4% of the world’s greenhouse gas emissions just by
                farting and burping methane gas. Volta is on a mission to reduce
                these emissions to mitigate global warming. By providing farmers
                with an entirely natural seaweed-based feed supplement to
                drastically reduce the methane emissions produced by dairy cows
                and beef cattle, Volta is supporting the agriculture sector in
                taking a massive leap in going sustainable.
              </p>
            </div>
            <div className="lg:col-span-1 col-span-3">
              <h1 className="text-3xl font-medium md:mt-12 mt-4 mb-3">
                Company facts
              </h1>
              <table class="table-auto w-full md:text-xl text-md lg:mb-0 mb-6">
                <tbody>
                  <tr>
                    <td className="text-bold">Website</td>
                    <td className="text-right">
                      <a
                        href="https://www.voltagreentech.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary"
                      >
                        voltagreentech.com
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-emerald-200">
                    <td className="text-bold">Founded</td>
                    <td className="text-right">2018</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Employees</td>
                    <td className="text-right">10+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-span-3">
              <img src={volta} alt="founders" />
              <p className="pt-2 text-gray-500">
                Volta Greentech co-founders Fredrik Åkerman and Angelo Demeter
              </p>
            </div>
          </div>
          <h1 className="text-4xl font-semibold mt-12 mb-3">About the job</h1>
          <p className="pb-2 md:text-xl text-md">
            You? A fearless, dedicated Business Developer, ready to take on
            CO2-emitters acting as if Greta had never gone on strike. Us? We’re
            a-just-over-two-year-old company backed by experienced investors
            with a mission to fight global warming by removing farts and burps
            from cows.{" "}
          </p>
          <p className="md:text-xl text-md">
            Over here, things are moving at a high pace. Getting closer to
            introducing our first climate-friendly products, we need to boost
            our team further. We are now looking for a Business Developer,
            supporting us with the critical launch of a potentially
            revolutionizing type of product in Sweden (and later,
            internationally). Specs below!
          </p>
          <h2 className="text-3xl font-medium  mt-12 mb-3">
            Start date & location
          </h2>
          <p className="md:text-xl text-md">
            ASAP. The role is based out of our Stockholm HQ at Karolinska
            Institutet, with occasional trips to our production facility in
            Lysekil on the Swedish west coast.
          </p>
          <h2 className="text-3xl font-medium  mt-12 mb-3">
            The work you'll take on includes
          </h2>
          <ul className="list-disc md:text-xl text-md ml-6">
            <li>
              {" "}
              Defining and leading the launch of our new, environmentally
              groundbreaking product line in Swedish supermarkets
            </li>
            <li>
              Nurturing and initiating relationships with both new and existing
              clients{" "}
            </li>
            <li>
              Support in project financing, directing consultants as well as
              taking on writing yourself when necessary
            </li>
            <li>
              {" "}
              When required (and have no doubt, it will be!) - jumping into
              additional projects and roles supporting additional parts of the
              company
            </li>
          </ul>
          <h2 className="text-3xl font-medium mt-12 mb-3">
            The skills you'll need
          </h2>
          <ul className="list-disc md:text-xl text-md ml-6">
            <li>Excellent project management skills</li>
            <li>
              Love closing new clients, and do everything that it takes to make
              both Volta and our partners succeed
            </li>
            <li>
              A talent for communication, in writing and in person, in English
              and in Swedish
            </li>
            <li>
              Thus, also being a maven with presentations (we use Google Slides
              / Keynote)
            </li>
            <li>
              Be a team player, with strong self motivation, results-orientation
              and sense of purpose
            </li>
          </ul>
          <h2 className="text-3xl font-medium  mt-12 mb-3">
            Your (presumed) background
          </h2>
          <ul className="list-disc md:text-xl text-md ml-6">
            <li>Relevant education and work experience</li>
            <li>Led and executed successful projects with many stakeholders</li>
            <li>
              A minimum 3 years of work experience in a fast-paced environment
            </li>
            <li>
              5+ years of experience, including leadership, from complex sales
              and project management, preferably from the food and/or
              agriculture industry
            </li>
          </ul>
          <h2 className="text-3xl font-medium  mt-12 mb-3">
            Extra credits if you
          </h2>{" "}
          <ul className="list-disc md:text-xl text-md ml-6">
            <li>Have experience of working with FMCG</li>
            <li>Have previously worked with OKR’s or similar</li>
          </ul>
          <h2 className="text-3xl font-medium  mt-12 mb-3">What you'll get</h2>
          <ul className="list-disc md:text-xl text-md mb-12 ml-6">
            <li>
              A chance to work on one of the world’s biggest, yet unresolved
              climate challenges
            </li>
            <li>
              A chance to be surrounded daily by a team of industry experts, as
              well as brand-name clients and partners
            </li>
            <li>A competitive salary package, with a stock option plan</li>
            <li>A yearly stipend for health and tech expenses</li>
          </ul>
        </div>
      </div>
      <Banner
        title="Have a perfect candidate in mind?"
        button="Refer someone"
        link="/refer/volta-greentech/business-developer"
      />
    </>
  );
}
