import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Refer from "./pages/Refer";
import PostJob from "./pages/PostJob";
import Jobs from "./pages/Jobs";
import Company from "./pages/Company";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";

import Job from "./pages/Job";
import { InfoBar } from "./components/InfoBar";
import ForCompanies from "./pages/ForCompanies";
import Companies from "./pages/Companies";
import About from "./pages/About";
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

        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route>

        <Route exact path="/cookie-policy">
          <CookiePolicy />
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

        <Route exact path="/companies/:url">
          <Company />
        </Route>

        <Route exact path="/companies/:url/:job">
          <Job />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}
