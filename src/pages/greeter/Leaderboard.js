export default function Leaderboard() {
  return (
    <div className="mt-32 overflow-x-auto bg-white mx-auto w-6/12">
      <h1 className="text-center text-5xl">Leaderboard</h1>
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
              Submitted referrals
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-300 divide-dashed">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              1
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Firstname lastname
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              27
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
