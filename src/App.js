import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { HowItWorks } from "./components/HowItWorks";
import { Table } from "./components/Table";
import { FAQ } from "./components/FAQ";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HowItWorks />
      <Table />
      <FAQ />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
