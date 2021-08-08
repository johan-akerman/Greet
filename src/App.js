import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Refer from "./pages/Refer";
import PostJob from "./pages/PostJob";
import Jobs from "./pages/Jobs";
import { InfoBar } from "./components/InfoBar";
import Companies from "./pages/Companies";
import { BusinessDeveloper } from "./pages/companies/voltaGreentech/BusinessDeveloper";
import { HeadOfManufacturing } from "./pages/companies/voltaGreentech/HeadOfManufacturing";
import { ProductionEngineer } from "./pages/companies/voltaGreentech/ProductionEngineer";
import Greeters from "./pages/Greeters";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div>
        <InfoBar />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/post-job">
            <PostJob />
          </Route>

          <Route path="/job-board">
            <Jobs />
          </Route>

          <Route path="/companies">
            <Companies />
          </Route>

          <Route path="/greeters">
            <Greeters />
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
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
