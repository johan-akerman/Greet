export default function LeaderboardTable({ greeters }) {
  if (!greeters) {
    return <h1>Loading...</h1>;
  }

  return (
    <table className="w-full mt-12 mb-32">
      <thead className="border-b border-gray-500">
        <tr>
          <th className="px-6 py-3 text-left text-xs text-gray-900 uppercase tracking-wider leading-tight font-semibold">
            Rank
          </th>
          <th className="px-6 py-3 text-left text-xs text-gray-900 uppercase tracking-wider leading-tight font-semibold">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs text-gray-900 uppercase tracking-wider leading-tight font-semibold">
            Referrals
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-300 divide-dashed">
        {console.log(greeters[0])}
        {greeters?.map((greeter, id) => {
          return (
            <tr key={id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {id + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {greeter.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {greeter?.referrals?.length}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
