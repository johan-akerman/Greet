import { Jumbotron } from "../components/Jumbotron";
import { HowItWorks } from "../components/HowItWorks";
import { FAQ } from "../components/FAQ";
import { Banner } from "../components/Banner";
import { JobBoard } from "../components/JobBoard";

function Home() {
  return (
    <div>
      <Jumbotron />
      <HowItWorks />
      <JobBoard />
      <FAQ />
      <Banner />
    </div>
  );
}

export default Home;
