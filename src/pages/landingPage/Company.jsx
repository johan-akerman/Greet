import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { JobBoard } from "src/components/JobBoard";
import companies from "src/json/companies.json";
import { useEffect } from "react";
import volta from "src/images/volta.png";
import bemlo from "src/images/bemlo.png";
import depict from "src/images/depict.png";
import curb from "src/images/curb.jpeg";
import teamTogether from "src/images/teamTogetherWebsite.png";
import jobs from "src/json/jobs.json";

function Company(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let desiredCompany = props.match.params.url;
  let company = companies.find((c) => c.url === desiredCompany);

  if (company != null) {
    let img = "";

    if (company.url === "volta-greentech") {
      img = volta;
    } else if (company.url === "bemlo") {
      img = bemlo;
    } else if (company.url === "depict") {
      img = depict;
    } else if (company.url === "curb-food") {
      img = curb;
    } else if (company.url === "team-together") {
      img = teamTogether;
    }

    let jobsAtCompany = jobs.filter((j) => j.company === company.name);

    return (
      <div className="md:pt-32 pt-12 ">
        <div className="lg:w-9/12 w-11/12 mx-auto rounded-xl">
          <div className="flex">
            <img
              alt="company logo"
              className="md:h-24 md:w-24 w-16 h-16 md:mr-6 mr-4 rounded-md"
              src={company.logo}
            />

            <div>
              <h1 className="font-semibold lg:text-4xl text-2xl md:pt-6 pt-3">
                {company.name}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-3 lg:gap-14 gap-3">
            <div className="lg:col-span-2 col-span-3">
              <h1 className="text-3xl font-medium md:mt-12 mt-6 mb-3">
                About {company.name}
              </h1>
              <p className="md:text-xl text-md">{company.aboutText}</p>
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
                        href={company.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary"
                      >
                        {company.website.substring(
                          company.website.indexOf("w") + 4
                        )}
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-emerald-200">
                    <td className="text-bold">Founded</td>
                    <td className="text-right">{company.founded}</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Employees</td>
                    <td className="text-right">{company.employees}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-span-3">
              <img src={img} alt="company" />
              <p className="pt-2 text-gray-500">{company.imageCaption}</p>
            </div>
          </div>
        </div>
        <div className="bg-light mt-20">
          <div className="lg:w-10/12 w-11/12 mx-auto" id="jobs">
            <h1 className="pt-20 md:text-6xl text-4xl font-bold text-gray-900 md:text-left text-center md:pb-16 pb-12">
              Jobs at {company.name}
            </h1>
          </div>

          {jobsAtCompany.length > 0 ? (
            <JobBoard title={false} jobAds={jobsAtCompany} />
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen lg:w-6/12 w-11/12 text-center mt-44 mx-auto rounded-xl">
      <h1 className="font-semibold lg:text-5xl text-2xl mb-5">
        Company page not found
      </h1>
      <p className="text-xl">Please check out all the companies below.</p>

      <Link
        to="/companies"
        className="transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg mx-auto w-60 mt-10 text-white shadow font-semibold rounded-xl flex items-center justify-center px-8 py-3 border border-transparent text-base  bg-primary  md:py-4 md:text-lg md:px-10"
      >
        View companies
      </Link>
    </div>
  );
}

export default withRouter(Company);
