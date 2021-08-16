import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Refer from "./pages/Refer";
import PostJob from "./pages/PostJob";
import Jobs from "./pages/Jobs";
import { InfoBar } from "./components/InfoBar";
import ForCompanies from "./pages/ForCompanies";
import Companies from "./pages/Companies";
import About from "./pages/About";
import { Bemlo } from "./pages/companies/bemlo/Bemlo";
import { VoltaGreentech } from "./pages/companies/voltaGreentech/VoltaGreentech";
import { BusinessDeveloper } from "./pages/companies/voltaGreentech/BusinessDeveloper";
import { HeadOfManufacturing } from "./pages/companies/voltaGreentech/HeadOfManufacturing";
import { ProductionEngineer } from "./pages/companies/voltaGreentech/ProductionEngineer";
import { SeniorFullStackEngineer } from "./pages/companies/bemlo/SeniorFullStackEngineer";
import ForGreeters from "./pages/ForGreeters";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Router>
      <InfoBar />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/companies">
          <Companies />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route path="/post-job">
          <PostJob />
        </Route>

        <Route path="/job-board">
          <Jobs />
        </Route>

        <Route path="/for-companies">
          <ForCompanies />
        </Route>

        <Route path="/for-greeters">
          <ForGreeters />
        </Route>

        <Route path="/refer">
          <Refer />
        </Route>

        <Route path="/volta-greentech/business-developer">
          <BusinessDeveloper />
        </Route>

        <Route path="/volta-greentech/head-of-manufacturing">
          <HeadOfManufacturing />
        </Route>

        <Route path="/volta-greentech/production-engineer">
          <ProductionEngineer />
        </Route>

        <Route exact path="/volta-greentech">
          <VoltaGreentech />
        </Route>
        <Route exact path="/bemlo">
          <Bemlo />
        </Route>

        <Route path="/bemlo/senior-full-stack-engineer">
          <SeniorFullStackEngineer />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}
