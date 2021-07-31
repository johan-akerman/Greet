import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Refer from "./pages/Refer";
import PostJob from "./pages/PostJob";
import Jobs from "./pages/Jobs";
import Startups from "./pages/Startups";
import Greeters from "./pages/Greeters";
import FrequentQuestions from "./pages/FrequentQuestions";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div>
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

          <Route path="/startups">
            <Startups />
          </Route>

          <Route path="/greeters">
            <Greeters />
          </Route>

          <Route path="/faq">
            <FrequentQuestions />
          </Route>

          <Route path="/refer">
            <Refer />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
