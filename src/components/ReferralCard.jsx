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
          className="px-3 py-5 relative border-b border-gray items-center text-left bg-white "
          onClick={() => history.push(`/referrals/${r.referral.id}`)}
        >
          <h3 class="text-xl leading-6 font-medium text-gray-900">
            {r.referral.data().candidate.name}
          </h3>
          <p class="mt-2 text-md text-gray-500 mb-4">
            {r.job.data().title} @ {r.job.data().company}{" "}
          </p>

          <ReferralStatus status={r.referral.data().general.status} />
        </div>
      ))}
    </div>
  );
}
