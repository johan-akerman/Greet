import { useLeaderboard } from "src/hooks/useLeaderboard";
import LeaderboardTable from "src/components/tables/LeaderboardTable";

export default function Leaderboard() {
  const greeters = useLeaderboard();

  if (!greeters) {
    return <h1>Loading...</h1>;
  }

  console.log(greeters);

  return (
    <div className="mt-32 overflow-x-auto bg-white mx-auto w-5/12">
      <h1 className="text-center text-5xl">Leaderboard</h1>
      <LeaderboardTable greeters={greeters} />
    </div>
  );
}
