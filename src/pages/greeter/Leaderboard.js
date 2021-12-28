import { useLeaderboard } from "src/hooks/useLeaderboard";
import LeaderboardTable from "src/components/tables/LeaderboardTable";
import LeaderboardCard from "src/components/LeaderboardCard";
import { useRole } from "src/hooks/useRole";
import NoLeaderboard from "src/components/emptyStates/NoLeaderboard";

export default function Leaderboard() {
  const role = useRole();
  const greeters = useLeaderboard();

  if (role === "none") {
    return <NoLeaderboard />;
  }

  if (!greeters) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="md:block hidden">
        <LeaderboardTable greeters={greeters} />
      </div>

      <div className="block md:hidden pt-8">
        <LeaderboardCard greeters={greeters} />
      </div>
    </>
  );
}
