import { useEffect } from "react";
import { JobBoard } from "../../../components/JobBoard";
import nurse from "../../../images/nurse.jpg";
const bemloLogo =
  "https://media-exp1.licdn.com/dms/image/C4E0BAQG0F3giqIFzfA/company-logo_200_200/0/1623881357221?e=1637193600&v=beta&t=A-GjUKU74NqREB7rwRqdtUngkBElPruXNLiapcT_4cs";

const jobAds = [
  {
    image: bemloLogo,
    company: "Bemlo",
    certificate: true,
    hot: false,
    position: "Senior Full Stack Engineer",
    location: "Stockholm",
    hiringBonus: "15.000 SEK",
    interviewBonus: "0 SEK",
    link: "/bemlo/senior-full-stack-engineer",
  },
];

export function Bemlo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="md:pt-32 pt-12 pb-12">
        <div className="lg:w-10/12 w-11/12 mx-auto rounded-xl">
          <div className="flex">
            <img
              alt="logo"
              className="md:h-24 md:w-24 w-16 h-16 md:mr-6 mr-4 rounded-md"
              src={bemloLogo}
            />

            <div>
              <h1 className="font-semibold lg:text-4xl text-xl md:pt-6 pt-1">
                Bemlo
              </h1>
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
        </div>

        <div className="lg:w-10/12 w-11/12 mx-auto pt-20 -mb-8" id="jobs">
          <h1 className="md:text-6xl text-4xl font-bold text-gray-900 md:text-left text-center md:pb-16 pb-12">
            Jobs at Bemlo
          </h1>
        </div>

        <JobBoard title={false} jobAds={jobAds} />
      </div>
    </>
  );
}
