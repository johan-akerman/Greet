import db from "src/firebase";
import { storage } from "src/firebase";
import { doc, setDoc } from "@firebase/firestore";
import { updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import InputField from "../InputField";

export default function ProfileSettings({ user, profile }) {
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

  const companiesRef = doc(db, "companies", user.uid);

  async function handleSave() {
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

      <label className="block text-sm font-medium text-gray-700 mt-4">
        About
      </label>
      <textarea
        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
