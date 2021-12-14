import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/landingPage/Home";
import Refer from "./pages/landingPage/Refer";
import PostJob from "./pages/landingPage/PostJob";
import Jobs from "./pages/landingPage/Jobs";
import Company from "./pages/landingPage/Company";
import PrivacyPolicy from "./pages/landingPage/PrivacyPolicy";
import CookiePolicy from "./pages/landingPage/CookiePolicy";
import ForGreeters from "./pages/landingPage/ForGreeters";
import ForCompanies from "./pages/landingPage/ForCompanies";
import Companies from "./pages/landingPage/Companies";
import Job from "./pages/landingPage/Job";
import About from "./pages/landingPage/About";
import SignIn from "./pages/landingPage/SignIn";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useAuthState, AuthContextProvider } from "src/firebase";
import AdminJobs from "./pages/admin/AdminJobs";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminJob from "./pages/admin/AdminJob";
import AdminRefer from "./pages/admin/AdminRefer";
import AdminReferral from "./pages/admin/AdminReferral";
import AdminAddJob from "./pages/admin/AdminAddJob";
import ScrollToTop from "./hooks/scrollToTop";

function AuthenticatedRoute({ component: C, ...props }) {
  const { isAuthenticated } = useAuthState();
  return (
    <Route
      {...props}
      render={(routeProps) =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to="/sign-in" />
      }
    />
  );
}

function App() {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  return (
    <AuthContextProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/cookie-policy" component={CookiePolicy} />
        <Route exact path="/companies" component={Companies} />
        <Route exact path="/about" component={About} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={PostJob} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/for-companies" component={ForCompanies} />
        <Route exact path="/for-greeters" component={ForGreeters} />
        <Route exact path="/jobs/:job/refer" component={Refer} />
        <Route exact path="/companies/:url" component={Company} />
        <Route exact path="/jobs/:job" component={Job} />

        <AuthenticatedRoute exact path="/admin" component={AdminJobs} />

        <AuthenticatedRoute
          exact
          path="/admin/settings"
          component={AdminSettings}
        />
        <AuthenticatedRoute
          exact
          path="/admin/create-new-job"
          component={AdminAddJob}
        />
        <AuthenticatedRoute exact path="/admin/:job" component={AdminJob} />
        <AuthenticatedRoute
          exact
          path="/admin/:job/refer"
          component={AdminRefer}
        />

        <AuthenticatedRoute
          exact
          path="/:job/candidates/:candidate"
          component={AdminReferral}
        />
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
