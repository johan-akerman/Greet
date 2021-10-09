import { withRouter } from "react-router";
import jobs from "../json/jobs.json";
import companies from "../json/companies.json";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

function convertFromCamelCase(word) {
  const result = word.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}

function Job(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let company = props.match.params.url;
  let jobsAtCompany = jobs.filter((j) => j.companyUrl === company);
  let job = jobsAtCompany.find((j) => j.url === props.match.params.job);

  if (job != null) {
    let company = companies.find((c) => c.name === job.company);

    return (
      <div className="lg:w-6/12 w-11/12 mx-auto md:mt-32 mt-20 pb-20">
        <div className="flex">
          <img
            alt="company logo"
            className="md:h-24 md:w-24 w-20 h-20 md:mr-6 mr-4 rounded-md"
            src={company.logo}
          />

          <div>
            <h1 className="font-semibold lg:text-4xl text-2xl mt-3">
              {job.title}
            </h1>
            <Link
              to={`/companies/${company.url}`}
              className=" md:text-xl text-lg hover:text-primary"
            >
              {job.company}
            </Link>
          </div>
        </div>
        <div className="flex justify-between md:mt-12 mt-12 mb-3">
          <h1 className="text-3xl font-medium ">Summary</h1>

          <Link
            to={`/companies/${company.url}`}
            className="text-xl text-primary underline md:block hidden"
          >
            View company profile{" "}
            <FontAwesomeIcon icon={faLongArrowAltRight} className="text-xl" />
          </Link>
        </div>
        <table class="table-auto w-full mb-3">
          <tbody className="text-xl">
            {Object.keys(job.summary).map((key) => {
              return (
                <tr>
                  <td className="text-bold">{convertFromCamelCase(key)}</td>
                  <td className="text-right">{job.summary[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {job.elements.map((element) => {
          if (element.type === "text") {
            return (
              <div className="my-8">
                <h1 className="text-3xl font-medium mb-2">{element.title}</h1>
                <p className="text-xl">{element.text}</p>
              </div>
            );
          } else if (element.type === "list") {
            return (
              <div className="my-8">
                <h1 className="text-3xl font-medium mb-4">{element.title}</h1>
                <ul>
                  {element.content.map((e) => {
                    return <li className="list-disc ml-6 text-xl pb-2">{e}</li>;
                  })}
                </ul>
              </div>
            );
          }
          return null;
        })}

        <div className="text-center mx-auto mt-20">
          <Link
            to={`/refer/${company.url}/${job.url}`}
            className="px-8 py-3 border border-transparent font-medium rounded-md text-white bg-primary md:py-4 text-xl md:px-10 transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg"
          >
            Refer someone
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen lg:w-6/12 w-11/12 text-center mt-44 mx-auto rounded-xl">
      <h1 className="font-semibold lg:text-5xl text-2xl mb-5">
        Job does not exist
      </h1>
      <p className="text-xl">Please check out all the jobs below.</p>

      <Link
        to="/job-board"
        className="transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg mx-auto w-60 mt-10 text-white shadow font-semibold rounded-xl flex items-center justify-center px-8 py-3 border border-transparent text-base  bg-primary  md:py-4 md:text-lg md:px-10"
      >
        View jobs
      </Link>
    </div>
  );
}

export default withRouter(Job);
