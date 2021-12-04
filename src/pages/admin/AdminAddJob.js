import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-quill/dist/quill.snow.css";
import JobEditor from "src/components/JobEditor";
import AdminNavbar from "src/components/AdminNavbar";

export default function AdminAddJob() {
  return (
    <>
      <AdminNavbar />
      <JobEditor />
    </>
  );
}
