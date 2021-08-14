import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarDay,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import volta from "../../../images/volta.jpeg";
import voltaLogo from "../../../images/voltaLogo.png";
import { Banner } from "../../../components/Banner";
import { useEffect } from "react";

export function ProductionEngineer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="md:pt-32 pt-12 pb-12">
        <div className="lg:w-8/12 w-11/12 mx-auto rounded-xl">
          <div className="flex">
            <img
              className="md:h-24 md:w-24 w-16 h-16 md:mr-6 mr-4 rounded-md"
              src={voltaLogo}
            />

            <div>
              <h1 className="font-semibold lg:text-4xl text-xl md:pt-3 pt-1">
                Production engineer
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
              <img src={volta} />
              <p className="pt-2 text-gray-500">
                Volta Greentech co-founders Fredrik Åkerman and Angelo Demeter
              </p>
            </div>
          </div>
          <h1 className="text-4xl font-semibold mt-12 mb-3">About the job</h1>
          <p className="pb-2 md:text-xl text-md">
            As a Production Engineer at Volta Greentech you will be a core team
            member in Volta Greentech’s manufacturing team. That means you will
            be designing and building up large-scale factories to enable the
            production of Volta Seafeed that will transform the food industry.
            We are a tightly knit team, and you’ll work together with our
            founders, business team and R&D team in developing all manufacturing
            aspects.
          </p>
          <h2 className="text-3xl font-medium  mt-12 mb-3">
            Responsibilities{" "}
          </h2>
          <p className="pb-2 md:text-xl text-md">
            Volta is a new company, in a fast-changing environment. The company
            will evolve, and your role, responsibilities and deliverables will
            change with it.
          </p>
          <ul className="list-disc md:text-xl text-md ml-6">
            <li>
              Work closely with R&D and Engineering team on development of Volta
              Greentech’s production blueprint to ensure excellent production
              results optimized for low-cost, high output production
            </li>
            <li>
              Design, build and improve Volta Greentech’s production blueprint
              including systems for upstream treatment of water, bioreactors for
              cultivation, downstream processing and automation of production
            </li>
            <li>
              Be heavily involved in the designing, engineering and buildup of
              Volta Greentechs pilot factory in Lysekil, Sweden and future
              factories
            </li>
            <li>Lead / assist in recruitment of key team members</li>
          </ul>
          <h2 className="text-3xl font-medium mt-12 mb-3">Key skills</h2>
          <ul className="list-disc md:text-xl text-md ml-6">
            <li>
              Degree in mechanical engineering, electrical engineering, computer
              science or similar
            </li>
            <li>Purpose driven and experience of working in a startup</li>
            <li>
              Experience of taking manufacturing from prototype stage to large
              scale production
            </li>
            <li>
              A working knowledge of a wide range of food and bio manufacturing
              processes
            </li>
            <li>
              Track record of having excelled at designing and building up high
              performing production lines
            </li>
          </ul>
        </div>
      </div>
      <Banner
        title="Have a perfect candidate in mind?"
        button="Refer someone"
        link="/refer/production-engineer"
      />
    </>
  );
}
