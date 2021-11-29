import InputField from "src/components/InputField";
import JobAd from "src/components/JobAd";
import db, { useAuthState } from "src/firebase";
import ReactQuill from "react-quill";
import { useCallback, useState } from "react";
import { addDoc, collection, Timestamp } from "@firebase/firestore";
import { useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-quill/dist/quill.snow.css";
import JobEditor from "src/components/JobEditor";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
  ],
};

function WaitingBtn() {
  return (
    <div className="cursor-not-allowed transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg flex ml-2 mr-2 items-center font-semibold text-md justify-center px-8 py-3 bg-gray-300 rounded-xl text-black">
      Waiting for responses
    </div>
  );
}

export default function AdminAddJob() {
  return (
    <div className="w-11/12 mx-auto mt-24">
      <Link to="/" className="text-lg">
        <FontAwesomeIcon icon={faChevronLeft} className="mr-3" />
        Back to jobs
      </Link>

      <JobEditor />
    </div>
  );
}
