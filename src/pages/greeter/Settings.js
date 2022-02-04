import db, { useAuthState } from "src/firebase";
import { useState, useEffect } from "react";
import { updateEmail, updatePassword } from "firebase/auth";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import InputField from "src/components/InputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Settings() {
  const { user } = useAuthState();
  const ref = doc(db, "greeters", user.uid);
  let [loading, setLoading] = useState(false);
  let [saved, setSaved] = useState(false);
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
    setLoading(true);
    await updateDoc(ref, {
      name: name,
      title: title,
      email: email,
      linkedin: linkedin,
    })
      .then(() => {
        updateEmail(user, email);
        updatePassword(user, password);
      })
      .then(() => {
        setSaved(true);

        setTimeout(function () {
          setSaved(false);
          setLoading(false);
        }, 1250);
      });
  }

  return (
    <div className="bg-light py-28">
      <div className="bg-white rounded-xl p-6 pb-10 overflow-x-auto mx-auto md:w-5/12 w-11/12 relative z-0">
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
            Save changes
          </button>
        </div>

        {loading ? (
          <div
            class="absolute inset-0 flex justify-center items-center z-10"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }}
          >
            {!saved ? (
              <div>
                <div class="animate-spin rounded-full mx-auto h-12 w-12 border-b-2 border-gray-900 mb-4"></div>{" "}
                <p className="font-semibold text-lg">Saving changes...</p>
              </div>
            ) : (
              <div className="text-center">
                <FontAwesomeIcon
                  className="text-5xl mb-3 text-money"
                  icon={faCheck}
                />
                <p className="font-semibold text-lg">Changes saved!</p>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Settings;
