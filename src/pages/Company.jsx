import { withRouter } from "react-router";
import { JobBoard } from "../components/JobBoard";
import companies from "../json/companies.json";

function Company(props) {
  let company = companies.find((c) => c.url == props.match.params.url);

  if (company != null) {
    return (
      <div className="md:pt-32 pt-12 pb-12">
        <div className="lg:w-10/12 w-11/12 mx-auto rounded-xl">
          <div className="flex">
            <img
              alt="logo"
              className="md:h-24 md:w-24 w-16 h-16 md:mr-6 mr-4 rounded-md"
              src={company.logo}
            />

            <div>
              <h1 className="font-semibold lg:text-4xl text-xl md:pt-6 pt-1">
                {company.name}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-3 lg:gap-14 gap-3">
            <div className="lg:col-span-2 col-span-3">
              <h1 className="text-3xl font-medium md:mt-12 mt-6 mb-3">
                About {company.name}
              </h1>
              <p className="md:text-xl text-md">{company.text}</p>
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
                          company.website.indexOf("/") + 6
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
              <img src={company.image} alt="founders" />
              <p className="pt-2 text-gray-500">{company.imageCaption}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-10/12 w-11/12 mx-auto pt-20 -mb-8" id="jobs">
          <h1 className="md:text-6xl text-4xl font-bold text-gray-900 md:text-left text-center md:pb-16 pb-12">
            Jobs at {company.name}
          </h1>
        </div>
        <JobBoard title={false} jobAds={company.jobAds} />
      </div>
    );
  }

  return (
    <div className="h-screen lg:w-10/12 w-11/12 mx-auto rounded-xl">
      <h1 className="md:pt-32">
        This company page does not exist. Make sure the url is correct.
      </h1>
    </div>
  );
}

export default withRouter(Company);
