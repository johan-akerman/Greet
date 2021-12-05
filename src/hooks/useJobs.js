import db, { useAuthState } from "src/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";

export function useJobs() {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuthState();

  useEffect(() => {
    const items = [];
    const q = query(collection(db, "jobs"), where("companyId", "==", user.uid));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push(doc);
      });
      setJobs(items);
    });
  }, []);

  return jobs;
}
