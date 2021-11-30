import InputField from "src/components/InputField";
import JobAd from "src/components/JobAd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-quill/dist/quill.snow.css";
import JobEditor from "src/components/JobEditor";
import AdminNavbar from "src/components/AdminNavbar";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
  ],
};

export default function AdminAddJob() {
  return (
    <>
      <AdminNavbar />
      <div className="w-11/12 mx-auto mt-24">
        <Link to="/admin" className="text-lg">
          <FontAwesomeIcon icon={faChevronLeft} className="mr-3" />
          Back to jobs
        </Link>

        <JobEditor />
      </div>
    </>
  );
}
