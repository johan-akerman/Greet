import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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

import { InfoBar } from "./components/InfoBar";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useAuthState, AuthContextProvider } from "src/firebase";
import AdminJobs from "./pages/admin/AdminJobs";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminProfile from "./pages/admin/AdminProfile";
import AdminJob from "./pages/admin/AdminJob";
import AdminRefer from "./pages/admin/AdminRefer";
import AdminReferral from "./pages/admin/AdminReferral";
import AdminAddJob from "./pages/admin/AdminAddJob";

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

function UnauthenticatedRoute({ component: C, ...props }) {
  const { isAuthenticated } = useAuthState();
  return (
    <Route
      {...props}
      render={(routeProps) =>
        !isAuthenticated ? (
          <>
            <InfoBar />
            <Navbar />
            <C {...routeProps} />
            <Footer />
          </>
        ) : (
          <Redirect to="/admin" />
        )
      }
    />
  );
}

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <UnauthenticatedRoute exact path="/" component={Home} />
        <UnauthenticatedRoute
          exact
          path="/privacy-policy"
          component={PrivacyPolicy}
        />
        <UnauthenticatedRoute
          exact
          path="/cookie-policy"
          component={CookiePolicy}
        />
        <UnauthenticatedRoute exact path="/companies" component={Companies} />
        <UnauthenticatedRoute exact path="/about" component={About} />
        <UnauthenticatedRoute exact path="/sign-in" component={SignIn} />
        <UnauthenticatedRoute exact path="/sign-up" component={PostJob} />
        <UnauthenticatedRoute exact path="/jobs" component={Jobs} />
        <UnauthenticatedRoute
          exact
          path="/for-companies"
          component={ForCompanies}
        />
        <UnauthenticatedRoute
          exact
          path="/for-greeters"
          component={ForGreeters}
        />
        <UnauthenticatedRoute exact path="/jobs/:job/refer" component={Refer} />
        <UnauthenticatedRoute
          exact
          path="/companies/:url"
          component={Company}
        />
        <UnauthenticatedRoute exact path="/jobs/:job" component={Job} />

        <AuthenticatedRoute exact path="/admin" component={AdminJobs} />
        <AuthenticatedRoute
          exact
          path="/admin/profile"
          component={AdminProfile}
        />
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
        <UnauthenticatedRoute
          exact
          path="/admin/:job/refer"
          component={AdminRefer}
        />

        <AuthenticatedRoute
          exact
          path="/:job/candidates/:candidate"
          component={AdminReferral}
        />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
