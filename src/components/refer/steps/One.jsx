import { useEffect } from "react";

export default function One({ toggleWaiting, motivation, addMotivation }) {
  useEffect(() => {
    if (motivation === "") {
      toggleWaiting(true);
    } else {
      toggleWaiting(false);
    }
  }, [motivation]);

  return (
    <div class="w-full px-3">
      <textarea
        class="mt-12 appearance-none block w-full text-lg text-gray-700 border-black border-2 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
        rows="8"
        placeholder="You should hire X because of Y..."
        value={motivation}
        onChange={(e) => addMotivation(e.target.value)}
      />
    </div>
  );
}
