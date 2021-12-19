import db from "src/firebase";
import { useEffect, useState } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function useRole() {
  const [role, setRole] = useState("");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const greeterRef = doc(db, "greeters", user.uid);
        getDoc(greeterRef).then((d1) => {
          if (d1.exists()) {
            setRole("greeter");
          } else {
            const companyRef = doc(db, "companies", user.uid);
            getDoc(companyRef).then((d2) => {
              if (d2.exists()) {
                setRole("company");
              } else {
                setRole("admin");
              }
            });
          }
        });
      } else {
        setRole("none");
      }
    });
  }, []);

  return role;
}
