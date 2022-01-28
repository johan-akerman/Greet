import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useRole } from "./hooks/useRole";
import Home from "./pages/landingPage/Home";
import Refer from "./pages/landingPage/Refer";
import ReferralComplete from "./pages/landingPage/ReferralComplete";
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
import { AuthContextProvider } from "src/firebase";
import AdminJobs from "./pages/admin/AdminJobs";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminJob from "./pages/admin/AdminJob";
import AdminRefer from "./pages/admin/AdminRefer";
import AdminReferral from "./pages/admin/AdminReferral";
import AdminAddJob from "./pages/admin/AdminAddJob";
import ScrollToTop from "./hooks/scrollToTop";
import SignUp from "./pages/landingPage/SignUp";
import Settings from "./pages/greeter/Settings";
import Referrals from "./pages/greeter/Referrals";
import Leaderboard from "./pages/greeter/Leaderboard";
import SignUpGreeter from "./pages/landingPage/SignUpGreeter";
import SignUpCompany from "./pages/landingPage/SignUpCompany";
import ResetPassword from "./pages/landingPage/ResetPassword";
import { InfoBar } from "./components/InfoBar";

function CompanyRoute({ component: C, ...props }) {
  return (
    <Route
      {...props}
      render={(routeProps) =>
        props.role === "company" ? (
          <C {...routeProps} />
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  );
}

function GreeterRoute({ component: C, ...props }) {
  return (
    <Route
      {...props}
      render={(routeProps) =>
        props.role === "greeter" ? (
          <C {...routeProps} />
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  );
}

function App() {
  const role = useRole();
  console.log("role: " + role);

  return (
    <AuthContextProvider>
      <Router>
        <ScrollToTop />
        <InfoBar />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/cookie-policy" component={CookiePolicy} />
        <Route exact path="/companies" component={Companies} />
        <Route exact path="/about" component={About} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-in/reset-password" component={ResetPassword} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-up/new-greeter" component={SignUpGreeter} />
        <Route exact path="/sign-up/new-company" component={SignUpCompany} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/for-companies" component={ForCompanies} />
        <Route exact path="/for-greeters" component={ForGreeters} />
        <Route exact path="/jobs/:job/refer" component={Refer} />
        <Route exact path="/referral-complete" component={ReferralComplete} />
        <Route exact path="/companies/:url" component={Company} />
        <Route exact path="/jobs/:job" component={Job} />
        <Route exact path="/leaderboard" component={Leaderboard} role={role} />
        <Route exact path="/referrals" component={Referrals} role={role} />

        <CompanyRoute
          exact
          path="/create-new-job"
          component={AdminAddJob}
          role={role}
        />

        <CompanyRoute exact path="/admin" component={AdminJobs} role={role} />
        <CompanyRoute
          exact
          path="/admin/settings"
          component={AdminSettings}
          role={role}
        />

        <CompanyRoute
          exact
          path="/admin/:job"
          component={AdminJob}
          role={role}
        />
        <CompanyRoute
          exact
          path="/admin/:job/refer"
          component={AdminRefer}
          role={role}
        />

        <CompanyRoute
          exact
          path="/:job/candidates/:candidate"
          component={AdminReferral}
          role={role}
        />

        <GreeterRoute
          exact
          path="/referrals/:referral"
          component={AdminReferral}
          role={role}
        />

        <GreeterRoute
          exact
          path="/greeter/settings"
          component={Settings}
          role={role}
        />

        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
