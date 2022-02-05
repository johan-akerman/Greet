import { useEffect, useState } from "react";
import db from "src/firebase";

import { collection, query, where, getDocs } from "firebase/firestore";

export default function ReferralCount({ id, handleClick }) {
  const [value, setValue] = useState("");

  useEffect(async () => {
    const q = query(collection(db, "referrals"), where("job", "==", id));
    let count = 0;
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(() => {
      count++;
    });

    setValue(count);
  }, [id]);

  return (
    <td
      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold cursor-pointer"
      onClick={() => handleClick(id)}
    >
      <span className="bg-light  py-1 px-2 rounded-lg ">{value}</span>
    </td>
  );
}
