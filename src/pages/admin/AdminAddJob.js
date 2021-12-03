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
      <JobEditor />
    </>
  );
}
