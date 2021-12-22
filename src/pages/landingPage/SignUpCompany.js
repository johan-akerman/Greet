import { useEffect, useState } from "react";
import ConfettiGenerator from "confetti-js";
import InputField from "src/components/InputField";
import db from "src/firebase";
import { addDoc, collection, Timestamp } from "@firebase/firestore";

function SignUpCompany() {
  const [submited, setSubmited] = useState(false);
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  let allFieldsChecked =
    company.length > 0 &&
    website.length > 0 &&
    name.length > 0 &&
    email.length > 0 &&
    phone.length > 0;

  function sendEmail() {
    addDoc(collection(db, "applications"), {
      company: company,
      website: website,
      name: name,
      email: email,
      phone: phone,
      time: Timestamp.now(),
    }).then(() => {
      window.scrollTo(0, 0);
      setSubmited(true);
    });
  }

  useEffect(() => {
    if (submited) {
      const confettiSettings = {
        target: "my-canvas",
        props: ["circle", "square"],
        start_from_edge: true,
      };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      return () => confetti.clear();
    }
  }, [submited]);

  return (
    <div className="bg-primary md:py-24 pt-12">
      <canvas id="my-canvas" className="absolute z-0 "></canvas>

      {submited ? (
        <div className="pt-32 pb-80 z-30">
          <h1 className="font-semibold md:text-5xl text-4xl text-center mb-6">
            Thank you! 🎉
          </h1>

          <p className="text-center text-lg mx-auto">
            We will be in touch as soon as possible.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl pt-10 md:px-8 px-6 pb-8 text-left md:w-4/12 w-11/12 mx-auto">
          <h2 className="text-4xl font-semibold text-gray-900 leading-none">
            Apply to join Greet
          </h2>
          <p className="text-md text-gray-600 pb-8">
            We would love to learn more about your company before we post your
            job ads. Please fill in your details and we'll be in touch soon.
          </p>

          <InputField
            type="text"
            label="Which company do you represent?"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company"
          />

          <InputField
            type="text"
            label="Company website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="www.website.com"
          />

          <InputField
            type="text"
            label="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Firstname Lastname"
          />

          <InputField
            type="email"
            label="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="firstname@example.com"
          />

          <InputField
            type="text"
            label="Your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="070 123 45 67"
          />

          {allFieldsChecked ? (
            <div
              className="mt-8 w-full text-center bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-100 font-semibold cursor-pointer px-4 py-3 rounded-lg text-sm"
              type="submit"
              onClick={sendEmail}
            >
              Submit
            </div>
          ) : (
            <div className="cursor-not-allowed mt-8 w-full text-center bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-100 font-semibold px-4 py-3 rounded-lg text-sm">
              Submit
            </div>
          )}
          <p className="text-xs text-center mt-6">
            By submitting this form you agree to Greet's Terms and Conditions.
          </p>
        </div>
      )}
    </div>
  );
}

export default SignUpCompany;
