import { Jumbotron } from "../components/Jumbotron";
import { HowItWorks } from "../components/HowItWorks";
import { FAQ } from "../components/FAQ";

import { useEffect } from "react";

import { JobBoard } from "../components/JobBoard";

const voltaLogo =
  "https://media-exp1.licdn.com/dms/image/C560BAQFw44quZMineg/company-logo_200_200/0/1562677189546?e=1637193600&v=beta&t=tpA2_VE5r-HLl8dmBJDGIn-HGIbNlaKm_1vue4ny-wU";
const bemloLogo =
  "https://media-exp1.licdn.com/dms/image/C4E0BAQG0F3giqIFzfA/company-logo_200_200/0/1623881357221?e=1637193600&v=beta&t=A-GjUKU74NqREB7rwRqdtUngkBElPruXNLiapcT_4cs";

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
];

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Jumbotron />
      <HowItWorks />
      <JobBoard title={true} jobAds={jobAds} />
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
