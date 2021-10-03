import certificate from "../images/certificate.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const voltaLogo =
  "https://media-exp1.licdn.com/dms/image/C560BAQFw44quZMineg/company-logo_200_200/0/1562677189546?e=1637193600&v=beta&t=tpA2_VE5r-HLl8dmBJDGIn-HGIbNlaKm_1vue4ny-wU";
const bemloLogo =
  "https://media-exp1.licdn.com/dms/image/C4E0BAQG0F3giqIFzfA/company-logo_200_200/0/1623881357221?e=1637193600&v=beta&t=A-GjUKU74NqREB7rwRqdtUngkBElPruXNLiapcT_4cs";

const companies = [
  {
    image: voltaLogo,
    name: "Volta Greentech",
    description:
      "Battling global warming by reducing methane emissions from cows.",
    certificate: true,
    link: "volta-greentech",
    jobs: 3,
  },
  {
    image: bemloLogo,
    name: "Bemlo",
    description:
      "A service where you easily compare staffing companies in health care.",
    certificate: true,
    link: "bemlo",
    jobs: 1,
  },
];

export function CompanyBoard() {
  return (
    <>
      <div className="bg-white">
        <div className="md:w-10/12 w-11/12 mx-auto h-full pt-8 md:pb-28 pb-12 ">
          <div className="grid lg:grid-cols-3 md:gap-6 gap-10 grid-cols-1 ">
            {companies.map((company, id) => (
              <div
                key={id}
                className="transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg w-full bg-gray-100 rounded-2xl p-6 text-left"
              >
                {company.certificate ? (
                  <img
                    src={certificate}
                    className="absolute right-4 -top-4 w-12"
                    alt="certificate"
                  />
                ) : null}

                <div className="flex items-center text-left pb-4">
                  <img
                    className="w-16 h-16 rounded-2xl mr-4"
                    src={company.image}
                    alt="Company logo"
                  />
                  <div>
                    <p className="text-2xl font-semibold text-gray-900 leading-none">
                      {company.name}
                    </p>
                  </div>
                </div>
                <p className="pl-1 pb-1">
                  <span className="text-lg">{company.description}</span>
                </p>

                <div className="flex items-center pt-6">
                  <Link
                    to={`/companies/${company.link}`}
                    className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-white"
                  >
                    Read more
                  </Link>

                  <HashLink
                    to={`/companies/${company.link}#jobs`}
                    className="ml-2 font-semibold mr-2 cursor-pointer border-b-2 border-black  hover:bg-gray-300 px-3 py-3 rounded-xl border-none"
                  >
                    View jobs ({company.jobs})
                  </HashLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
