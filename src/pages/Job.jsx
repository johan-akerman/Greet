import { withRouter } from "react-router";
import jobs from "../json/jobs.json";
import { Link } from "react-router-dom";

function Job(props) {
  let company = jobs.find((c) => (c.company = props.match.params.url));
  let job = company.jobs.find((c) => (c.url = props.match.params.job));

  return (
    <div className="lg:w-5/12 w-11/12 mx-auto md:mt-32 mt-20 pb-20">
      <div className="flex">
        <img
          alt="logo"
          className="md:h-24 md:w-24 w-20 h-20 md:mr-6 mr-4 rounded-md"
          src={company.logo}
        />

        <div>
          <h1 className="font-semibold lg:text-4xl text-2xl md:pt-4 mt-2 pt-1">
            {job.title}
          </h1>
          <h2 className="font-medium md:text-xl text-lg ">{company.name}</h2>
        </div>
      </div>
      <div className="flex justify-between md:mt-12 mt-12 mb-3">
        <h1 className="text-3xl font-medium ">Summary</h1>

        <Link
          to="/companies/volta-greentech"
          className="text-xl text-primary underline md:block hidden"
        >
          View company profile
        </Link>
      </div>
      <table class="table-auto w-full mb-3">
        <tbody className="text-xl">
          {Object.keys(job.summary).map((key) => {
            return (
              <tr>
                <td className="text-bold">{key}</td>
                <td className="text-right">{Object.values.key}</td>
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
      })}

      <div className="text-center mx-auto mt-20">
        <Link
          to="/refer"
          to={`/refer/${company.company}/${job.url}`}
          className="px-8 py-3 border border-transparent font-medium rounded-md text-white bg-primary md:py-4 text-xl md:px-10 transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg"
        >
          Refer someone
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Job);
