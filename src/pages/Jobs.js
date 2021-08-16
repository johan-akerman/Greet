import { JobBoard } from "../components/JobBoard";
import { Banner } from "../components/Banner";
import { useEffect } from "react";

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

function Jobs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-32">
      <JobBoard title={false} jobAds={jobAds} />
      <Banner
        title="Want your job ad posted above?"
        button="Post a job"
        link="/post-job"
      />
    </div>
  );
}

export default Jobs;
