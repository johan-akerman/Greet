import volta from "../../../images/volta.jpeg";
import { JobBoard } from "../../../components/JobBoard";
import { useEffect } from "react";

const voltaLogo =
  "https://media-exp1.licdn.com/dms/image/C560BAQFw44quZMineg/company-logo_200_200/0/1562677189546?e=1637193600&v=beta&t=tpA2_VE5r-HLl8dmBJDGIn-HGIbNlaKm_1vue4ny-wU";

const jobAds = [
  {
    image: voltaLogo,
    company: "Volta Greentech",
    certificate: false,
    hot: true,
    position: "Business developer",
    location: "Stockholm",
    hiringBonus: "15.000 SEK",
    interviewBonus: "500 SEK",
    link: "/volta-greentech/business-developer",
  },
  {
    image: voltaLogo,
    company: "Volta Greentech",
    certificate: true,
    hot: false,
    position: "Head of manufacturing",

    location: "Stockholm",
    hiringBonus: "15.000 SEK",
    interviewBonus: "500 SEK",
    link: "/volta-greentech/head-of-manufacturing",
  },
  {
    image: voltaLogo,
    company: "Volta Greentech",
    certificate: true,
    hot: false,
    position: "Production Engineer",

    location: "Stockholm",
    hiringBonus: "15.000 SEK",
    interviewBonus: "500 SEK",
    link: "/volta-greentech/production-engineer",
  },
];

export function VoltaGreentech() {
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
              src={voltaLogo}
            />

            <div>
              <h1 className="font-semibold lg:text-4xl text-xl md:pt-6 pt-1">
                Volta Greentech
              </h1>
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
        </div>
        <div className="lg:w-10/12 w-11/12 mx-auto pt-20 -mb-8" id="jobs">
          <h1 className="md:text-6xl text-4xl font-bold text-gray-900 md:text-left text-center md:pb-16 pb-12">
            Jobs at Volta Greentech
          </h1>
        </div>

        <JobBoard title={false} jobAds={jobAds} />
      </div>
    </>
  );
}
