import { withRouter } from "react-router";
import jobs from "../json/jobs.json";

function Job(props) {
  let company = jobs.find((c) => (c.company = props.match.params.url));
  let job = company.jobs.find((c) => (c.title = props.match.params.job));

  return (
    <div className="lg:w-10/12 w-11/12 mx-auto rounded-xl">
      {job.elements.map((element) => {
        if (element.type === "text") {
          return (
            <div>
              <h1 className="text-lg text-black">{element.title}</h1>
              <p>{element.text}</p>
            </div>
          );
        } else if (element.type === "list") {
          return (
            <div>
              <h1 className="text-lg text-black">{element.title}</h1>
              <ul>
                {element.content.map((e) => {
                  return <li>{e}</li>;
                })}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
}

export default withRouter(Job);
