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
        const companyRef = doc(db, "companies", user.uid);
        getDoc(companyRef).then((d1) => {
          if (d1.exists()) {
            setRole("company");
          } else {
            setRole("greeter");
          }
        });
      } else {
        setRole("none");
      }
    });
  }, []);

  return role;
}
