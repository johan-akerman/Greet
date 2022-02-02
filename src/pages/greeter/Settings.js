import db, { useAuthState } from "src/firebase";
import { useState, useEffect } from "react";
import { updateEmail, updatePassword } from "firebase/auth";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import InputField from "src/components/InputField";

function Settings() {
  const { user } = useAuthState();
  const ref = doc(db, "greeters", user.uid);

  let [name, setName] = useState("");
  let [title, setTitle] = useState("");
  let [email, setEmail] = useState("");
  let [linkedin, setLinkedin] = useState("");
  let [password, setPassword] = useState("");

  useEffect(() => {
    getDoc(ref).then((doc) => {
      let data = doc.data();
      setName(data.name);
      setTitle(data.title);
      setEmail(data.email);
      setLinkedin(data.linkedin);
    });
  }, []);

  async function handleSave() {
    await updateDoc(ref, {
      name: name,
      title: title,
      email: email,
      linkedin: linkedin,
    });

    await updateEmail(user, email);

    await updatePassword(user, password);
  }

  function handleCancel() {}

  return (
    <div className="bg-light py-28">
      <div className="bg-white rounded-xl p-6 pb-10 overflow-x-auto mx-auto md:w-5/12 w-11/12">
        <h2 className="text-4xl font-semibold text-gray-900 leading-none text-center mt-4 mb-16">
          Settings
        </h2>

        <div className="grid grid-cols-4 gap-4 mt-6">
          <InputField
            className="md:col-span-2 col-span-4"
            label="Name"
            type="text"
            placeholder="Firstname Lastname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputField
            className="md:col-span-2 col-span-4"
            label="Title"
            type="text"
            placeholder="Developer at X"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-4 gap-4 mt-2">
          <InputField
            className="md:col-span-2 col-span-4"
            label="Email"
            type="text"
            placeholder="firstname@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            className="md:col-span-2 col-span-4"
            label="New password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-4 gap-4 mt-2">
          <InputField
            label="LinkedIn URL"
            type="text"
            className="col-span-4"
            placeholder="https://www.linkedin.com/in/firstname-lastname"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center pt-6">
          <button
            className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
            onClick={() => handleSave()}
          >
            Save
          </button>

          <button
            className="ml-2 font-semibold mr-2 cursor-pointer border-b-2 border-black bg-light px-8 py-3 rounded-xl border-none"
            onClick={() => handleCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
