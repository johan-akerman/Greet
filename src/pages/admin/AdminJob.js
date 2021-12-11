import db from "src/firebase";
import { useState, useEffect } from "react";
import {
  doc,
  getDoc,
  getDocs,
  query,
  where,
  collection,
} from "@firebase/firestore";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import CandidateTable from "src/components/tables/CandidateTable";
import JobEditor from "src/components/JobEditor";
import JobSettings from "src/components/JobSettings";
import AdminNavbar from "src/components/AdminNavbar";

function AdminJob() {
  let [active, setActive] = useState(0);
  let [referrals, setReferrals] = useState([]);
  const [job, setJob] = useState({});
  const url = window.location.href;
  const id = url.split("/")[url.split("/").length - 1];

  useEffect(() => {
    getDoc(doc(db, "jobs", id)).then((doc) => setJob(doc.data()));
    const tmpReferrals = [];
    const q = query(collection(db, "referrals"), where("job", "==", id));
    getDocs(q).then((documents) => {
      documents.forEach((doc) => {
        tmpReferrals.push(doc);
      });
      setReferrals(tmpReferrals);
    });
  }, []);

  if (!job) {
    return null;
  }

  return (
    <div className="bg-white">
      <AdminNavbar />
      <div className="py-32  w-11/12 mx-auto min-h-screen">
        <Link to="/" className="text-4xl">
          <FontAwesomeIcon icon={faChevronLeft} className="mr-3 text-xl mb-1" />
          {job.title}
        </Link>
        <div className="flex mt-12 gap-3">
          <button
            className={`${active === 0 ? "bg-yellow-100 text-yellow-800 border-yellow-100" : "bg-white text-black hover:bg-light"} font-semibold cursor-pointer px-4 py-3 rounded-lg text-sm`}
            onClick={() => setActive(0)}
          >
            Referrals
          </button>

          <button
            className={`${active === 1 ? "bg-yellow-100 text-yellow-800 border-yellow-100" : "bg-white text-black hover:bg-light"} font-semibold cursor-pointer px-4 py-3 rounded-lg text-sm`}
            onClick={() => setActive(1)}
          >
            Job description
          </button>

          <button
            className={`${active === 2 ? "bg-yellow-100 text-yellow-800 border-yellow-100" : "bg-white text-black hover:bg-light"} font-semibold cursor-pointer px-4 py-3 rounded-lg text-sm`}
            onClick={() => setActive(2)}
          >
            Job settings
          </button>
        </div>

        {active === 0 ? (
          <CandidateTable id={id} referrals={referrals} />
        ) : active === 1 ? (
          <JobEditor jobToEdit={job} id={id} />
        ) : (
          <JobSettings job={job} id={id} />
        )}
      </div>
    </div>
  );
}

export default withRouter(AdminJob);
