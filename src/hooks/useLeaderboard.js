import db from "src/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";

export function useLeaderboard() {
  const [greeters, setGreeters] = useState([]);

  useEffect(() => {
    const items = [];
    const q = query(collection(db, "greeters"));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      items.sort((a, b) => {
        return b?.referrals?.length - a?.referrals?.length;
      });
      setGreeters(items);
    });
  }, []);

  return greeters;
}