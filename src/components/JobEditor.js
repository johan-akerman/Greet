import InputField from "src/components/InputField";
import JobAd from "src/components/JobAd";
import db, { useAuthState } from "src/firebase";
import ReactQuill from "react-quill";
import { useCallback, useEffect, useState } from "react";
import {
  addDoc,
  doc,
  setDoc,
  collection,
  Timestamp,
} from "@firebase/firestore";

import { useHistory, Link } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-quill/dist/quill.snow.css";

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

export default function JobEditor({ jobToEdit, id }) {
  let history = useHistory();
  const { user } = useAuthState();

  const [job, setJob] = useState(
    jobToEdit || {
      company: user.displayName,
      companyId: user.uid,
      logo: user.photoURL,
      title: "",
      employment: "",
      hiring: "",
      interview: "",
      location: "",
      description: "",
      status: "Open",
      time: Timestamp.now(),
    }
  );

  const [description, setDescription] = useState(job?.description);

  useEffect(() => {
    setJob({ ...job, description: description });
  }, [description]);

  let isComplete =
    job.title.length > 0 &&
    job.employment.length > 0 &&
    job.hiring.length > 0 &&
    job.interview.length > 0 &&
    job.location.length > 0 &&
    job.description.length > 0;

  const addToDatabase = useCallback(async () => {
    if (jobToEdit && id) {
      await setDoc(doc(db, "jobs", id), job);
    } else {
      await addDoc(collection(db, "jobs"), job);
    }
    history.push("/admin");
  }, [job, user, db, id]);

  return (
    <div className="grid grid-cols-12 gap-12">
      <div className="col-span-6 mb-16">
        <InputField
          className="mt-12"
          label="Job Title"
          value={job.title}
          onChange={(e) => {
            setJob({
              ...job,
              title: e.target.value,
            });
          }}
          placeholder="Title"
        />
        <div className="grid grid-cols-4 gap-4 mt-6">
          <InputField
            className="col-span-2"
            label="Hiring Reward"
            placeholder="25 000"
            value={job.hiring}
            onChange={(e) => {
              setJob({
                ...job,
                hiring: e.target.value,
              });
            }}
          />
          <InputField
            className="col-span-2"
            label="Interview Reward"
            placeholder="1000"
            value={job.interview}
            onChange={(e) => {
              setJob({
                ...job,
                interview: e.target.value,
              });
            }}
          />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6">
          <InputField
            className="col-span-2"
            label="Location"
            value={job.location}
            onChange={(e) => {
              setJob({
                ...job,
                location: e.target.value,
              });
            }}
            placeholder="Stockholm"
          />

          <InputField
            className="col-span-2"
            label="Employment Type"
            value={job.employment}
            onChange={(e) => {
              setJob({
                ...job,
                employment: e.target.value,
              });
            }}
            placeholder="Full Time"
          />
        </div>

        <label className="block text-sm font-medium text-gray-700 mt-6 mb-2">
          Job description
        </label>

        <ReactQuill
          modules={modules}
          theme="snow"
          value={description}
          onChange={setDescription}
          placeholder="Job description goes here..."
        />

        <div className="flex items-center pt-6">
          {isComplete ? (
            <button
              className="text-center transform hover:-translate-y-1 hover:shadow-lg cursor-pointer font-bold text-md px-8 py-3 bg-primary rounded-xl text-black"
              onClick={() => addToDatabase()}
            >
              Save
            </button>
          ) : (
            <WaitingBtn />
          )}

          <Link
            to="/"
            className="ml-2 font-semibold mr-2 cursor-pointer border-b-2 border-black bg-light px-8 py-3 rounded-xl border-none"
          >
            Cancel
          </Link>
        </div>
      </div>
      <div className="col-span-6 border-2 border-gray-200">
        <JobAd job={job} description={job.description} />
      </div>
    </div>
  );
}
