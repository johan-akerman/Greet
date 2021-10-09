import { Jumbotron } from "../components/Jumbotron";
import { HowItWorks } from "../components/HowItWorks";
import { FAQ } from "../components/FAQ";
import { SocialMedia } from "../components/SocialMedia";
import { useEffect } from "react";
import { JobBoard } from "../components/JobBoard";
import jobs from "../json/jobs.json";

let hotJobs = jobs.filter((j) => j.hot).slice(0, 3);

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Jumbotron />
      <HowItWorks />
      <JobBoard title={true} jobAds={hotJobs} />
      <FAQ
        questionOne="How do I post jobs on Greet?"
        answerOne="Reach out to us at join.greet@gmail.com"
        questionTwo="What is Hiring Bonus and Interview Bonus?"
        answerTwo="The hiring bonus is what the Greeter (the one who refers) will see on the job board and get paid if their referral results in a hiring. The Interview bonus is what is paid if a referral ends up with an interview. Both are listed on the job ads."
        questionThree="When does the Greeter get paid?"
        answerThree="The one who refer someone to a job (also known as a Greeter) gets paid when their candidate get an interview or get hired. The amount is specified on the job ads."
      />
      <SocialMedia />
    </div>
  );
}

export default Home;
