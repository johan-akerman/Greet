import Loader from "./Loader";
import ReferralStatus from "src/components/statuses/ReferralStatus";
import { useHistory } from "react-router-dom";

export default function ReferralCard({ referrals }) {
  const history = useHistory();

  if (referrals.length === 0) {
    return <Loader />;
  }

  return (
    <div className="">
      {referrals.map((r, id) => (
        <div
          key={id}
          className="px-3 py-5 relative border-b border-gray items-center text-left "
          onClick={() => history.push(`/referrals/${r.referral.id}`)}
        >
          <div class="text-lg font-medium text-gray-900">
            {r.referral.data().candidate.name}
          </div>

          <div class="text-sm text-gray-500 mb-3">
            {r.job.data().title} @ {r.job.data().company}{" "}
          </div>
          <ReferralStatus status={r.referral.data().general.status} />
        </div>
      ))}
    </div>
  );
}
