import db from "src/firebase";
import { storage } from "src/firebase";
import { doc, setDoc } from "@firebase/firestore";
import { updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import InputField from "../InputField";

export default function CompanySettings({ user, profile }) {
  const [tmpProfile, setTmpProfile] = useState();
  const [originalProfile] = useState(profile);

  useEffect(() => {
    setTmpProfile(profile);
  }, [profile]);

  const uploadLogo = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFile(file, "logo");
  };

  const uploadBanner = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFile(file, "banner");
  };

  const uploadFile = (file, image) => {
    if (!file) {
      return;
    }

    const storageRef = ref(storage, `/files/${user.uid}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          if (image === "logo") {
            setTmpProfile({ ...tmpProfile, logo: url });
          } else setTmpProfile({ ...tmpProfile, banner: url });
        });
      }
    );
  };

  async function handleSave() {
    const companiesRef = doc(db, "companies", user?.uid);
    await setDoc(companiesRef, {
      company: tmpProfile.company,
      website: tmpProfile.website,
      founded: tmpProfile.founded,
      employees: tmpProfile.employees,
      bio: tmpProfile.bio,
      about: tmpProfile.about,
      caption: tmpProfile.caption,
      logo: tmpProfile.logo,
      banner: tmpProfile.banner,
    });

    updateProfile(user, {
      displayName: tmpProfile.company,
      photoURL: tmpProfile.logo,
    });
  }

  return (
    <div>
      <h3 className="text-2xl font-medium leading-6 text-gray-900">
        Edit public profile
      </h3>
      <p className="mt-1 text-sm text-gray-600">
        This information will be displayed publicly so be careful what you
        share.
      </p>
      <div className="flex mb-12 gap-3 relative mt-12">
        <img
          alt="logo"
          className="md:h-24 md:w-24 w-16 h-16 md:mr-6 mr-4 rounded-md"
          src={tmpProfile?.logo}
        />

        <div>
          <label class="uppercase tracking-wide text-black text-xs font-bold mb-2 mt-8">
            Company logo
          </label>

          <form onSubmit={uploadLogo}>
            <input type="file" />
            <button
              type="submit"
              className="hover:opacity-80  cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
            >
              Upload
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        <InputField
          className="col-span-2"
          label="Company name"
          type="text"
          value={tmpProfile?.company}
          onChange={(e) => {
            setTmpProfile({
              ...tmpProfile,
              company: e.target.value,
            });
          }}
          placeholder="Name"
        />

        <InputField
          className="col-span-2"
          label="Website"
          type="text"
          value={tmpProfile?.website}
          onChange={(e) => {
            setTmpProfile({
              ...tmpProfile,
              website: e.target.value,
            });
          }}
          placeholder="www.example.com"
        />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-6">
        <InputField
          className="col-span-2"
          label="Founded"
          type="text"
          value={tmpProfile?.founded}
          onChange={(e) => {
            setTmpProfile({
              ...tmpProfile,
              founded: e.target.value,
            });
          }}
          placeholder="2021"
        />

        <InputField
          className="col-span-2"
          label="Employees"
          type="text"
          value={tmpProfile?.employees}
          onChange={(e) => {
            setTmpProfile({
              ...tmpProfile,
              employees: e.target.value,
            });
          }}
          placeholder="Name"
        />
      </div>

      <InputField
        label="Bio"
        type="text"
        className="mt-4"
        value={tmpProfile?.bio}
        onChange={(e) => {
          setTmpProfile({
            ...tmpProfile,
            bio: e.target.value,
          });
        }}
        placeholder="Bio"
      />

      <label className="block text-black text-sm font-semibold mb-2">
        About
      </label>
      <textarea
        className="block border border-grey-light w-full p-3 rounded mb-4 focus:ring-primary focus:border-primary"
        rows="8"
        placeholder="Text about your company goes here."
        value={tmpProfile?.about}
        onChange={(e) =>
          setTmpProfile({
            ...tmpProfile,
            about: e.target.value,
          })
        }
      />

      <div className="flex mb-12 gap-3 relative mt-12">
        <img
          alt="banner"
          className="w-1/3 h-auto md:mr-6 mr-4 rounded-md"
          src={tmpProfile?.banner}
        />

        <div>
          <label class="uppercase tracking-wide text-black text-xs font-bold mb-2 mt-8">
            Banner
          </label>

          <form onSubmit={uploadBanner}>
            <input type="file" />
            <button
              type="submit"
              className="hover:opacity-80  cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
            >
              Upload
            </button>
          </form>
        </div>
      </div>

      <InputField
        className="col-span-2"
        label="Banner caption"
        type="text"
        value={tmpProfile?.caption}
        onChange={(e) => {
          setTmpProfile({
            ...tmpProfile,
            caption: e.target.value,
          });
        }}
        placeholder="Banner caption"
      />
      <div className="flex items-center pt-6">
        <div
          className="hover:opacity-80 flex cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
          onClick={() => handleSave()}
        >
          Save
        </div>

        <div
          className="ml-2 font-semibold mr-2 cursor-pointer border-b-2 border-black bg-light px-8 py-3 rounded-xl border-none"
          onClick={() => setTmpProfile(originalProfile)}
        >
          Cancel
        </div>
      </div>
    </div>
  );
}
