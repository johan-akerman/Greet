import { useLeaderboard } from "src/hooks/useLeaderboard";
import LeaderboardTable from "src/components/tables/LeaderboardTable";

export default function Leaderboard() {
  const greeters = useLeaderboard();

  if (!greeters) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="bg-primary py-32">
      <LeaderboardTable greeters={greeters} />
    </div>
  );
}
