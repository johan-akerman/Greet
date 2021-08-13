import { Jumbotron } from "../components/Jumbotron";
import { HowItWorks } from "../components/HowItWorks";
import { FAQ } from "../components/FAQ";
import { Banner } from "../components/Banner";
import { useEffect } from "react";

import { JobBoard } from "../components/JobBoard";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Jumbotron />
      <HowItWorks />
      <JobBoard title={true} />
      <FAQ
        questionOne="How do I post jobs on Greet?"
        answerOne="Reach out to us at join.greet@gmail.com"
        questionTwo="When will there be more jobs on Greet?"
        answerTwo="We just launched Greet and are currently looking for the most exciting tech companies in Sweden to post their jobs on the site. In order words: soon. "
        questionThree="When does the Greeter get paid?"
        answerThree="The one who refer someone to a job (also known as a Greeter) gets paid when their candidate get an interview or get hired. The amount is specified on the job ads."
      />
    </div>
  );
}

export default Home;
