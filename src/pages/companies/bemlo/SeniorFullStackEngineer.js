import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarDay,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import nurse from "../../../images/nurse.jpg";

import { Banner } from "../../../components/Banner";
import { useEffect } from "react";

export function SeniorFullStackEngineer() {
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
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQG0F3giqIFzfA/company-logo_200_200/0/1623881357221?e=1637193600&v=beta&t=A-GjUKU74NqREB7rwRqdtUngkBElPruXNLiapcT_4cs"
            />

            <div>
              <h1 className="font-semibold lg:text-4xl text-xl md:pt-3 pt-1">
                Senior Full Stack Engineer
              </h1>
              <span className="flex pt-1 md:text-md text-sm text-gray-500">
                <p className="md:block hidden mr-4">
                  <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                  Bemlo
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
                About Bemlo
              </h1>
              <p className="md:text-xl text-md">
                Bemlo’s vision is to become Europe's leading matching platform
                for health care. We have started with Sweden and staffing
                companies. Our goal is that the heroes of the healthcare
                industry get properly paid and that they find the optimal job
                for their life situation. Swedish staffing companies for nurses
                and doctors have a revenue of 6 BSEK. This is only a few percent
                of the European market. Bemlo is helping 16 000 nurses and
                doctors on a monthly basis when they are looking for a new job.
                In Europe, we will be able to grow to millions of users.
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
                        href="https://www.bemlo.se/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary"
                      >
                        bemlo.se
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-emerald-200">
                    <td className="text-bold">Founded</td>
                    <td className="text-right">2019</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Employees</td>
                    <td className="text-right">6</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-span-3">
              <img src={nurse} alt="Nurse" />
              <p className="pt-2 text-gray-500">
                Bemlo’s vision is to become Europe's leading matching platform
                for health care.{" "}
              </p>
            </div>
          </div>
          <h1 className="text-4xl font-semibold mt-12 mb-3">About the job</h1>
          <p className="pb-2 md:text-xl text-md">
            We are looking for a senior full stack developer that will also lead
            our team of developers. At Bemlo, you will do a bit of everything.
            Some days you will focus on strategy and recruiting. Other days you
            will dive into the codebase and deliver value to the customers.
          </p>
          <h2 className="text-3xl font-medium  mt-12 mb-3">Responsibilities</h2>
          <ul className="list-disc md:text-xl text-md ml-6">
            <li>
              <strong>Architecture:</strong> Improve the codebase and Bemlos
              already existing architecture.
            </li>
            <li>
              <strong>Recruiting:</strong> Be responsible for sourcing, setting
              up processes and recruiting a team of stars.
            </li>
            <li>
              <strong>Develop the team:</strong> Set up goals for each
              individual in the development team and help them improve.
            </li>
            <li>
              <strong>Coding:</strong> Development in full-stack Typescript. Set
              up and deliver processes needed for an effective code
              organisation, everything from development board to pipelines.
            </li>
          </ul>
          <h2 className="text-3xl font-medium mt-12 mb-3">Qualifications</h2>
          <ul className="list-disc md:text-xl text-md ml-6">
            <li>
              A general understanding of web development, everything from
              backend to frontend.
            </li>
            <li>
              Have built multiple web applications with databases, backend and
              frontend.
            </li>
            <li>Senior Full-stack Typescript developer.</li>
            <li>
              Have experience of leading a team and interested in leadership.
            </li>
            <li>
              Be able to resonate about the product and understand what is
              important for the users. And be able to come up with ideas on how
              the product can be improved.
            </li>
          </ul>
        </div>
      </div>
      <Banner
        title="Have a perfect candidate in mind?"
        button="Refer someone"
        link="/refer/bemlo/senior-full-stack-engineer"
      />
    </>
  );
}
