import { Link } from "react-router-dom";
import AdminNavbar from "src/components/AdminNavbar";

function AdminProfile() {
  return (
    <>
      <AdminNavbar />
      <div className="md:py-32 py-12 ">
        <div className="lg:w-9/12 w-11/12 mx-auto rounded-xl">
          <div className="flex gap-3 relative ">
            <img
              alt="company logo"
              className="md:h-24 md:w-24 w-16 h-16 md:mr-6 mr-4 rounded-md"
              src="https://media-exp1.licdn.com/dms/image/C560BAQFw44quZMineg/company-logo_200_200/0/1562677189546?e=1645056000&v=beta&t=O5EJA8ElG1R74viMEUltr7iml2XhhczMigp4dNTnI54"
            />

            <div>
              <h1 className="font-semibold lg:text-4xl text-2xl md:pt-4 pt-3">
                Volta Greentech
              </h1>
              <p>
                Battling global warming by reducing methane emissions from cows.
              </p>
            </div>
            <Link
              to="/profile/edit"
              className="ml-10 absolute right-0 mt-6 mb-6 hover:opacity-80 cursor-pointer items-center font-semibold text-md justify-center px-8 py-3 bg-primary rounded-xl text-black"
            >
              Edit profile
            </Link>
          </div>
          <div className="grid grid-cols-3 lg:gap-14 gap-3">
            <div className="lg:col-span-2 col-span-3">
              <h1 className="text-3xl font-medium md:mt-12 mt-6 mb-3">
                About Volta Greentech
              </h1>
              <p className="md:text-xl text-md">
                There are around one billion cows on the planet. Together they
                produce over 4% of the world’s greenhouse gas emissions just by
                farting and burping methane gas. Volta is on a mission to reduce
                these emissions to mitigate global warming. By providing farmers
                with an entirely natural seaweed-based feed supplement to
                drastically reduce the methane emissions produced by dairy cows
                and beef cattle, Volta is supporting the agriculture sector in
                taking a massive leap in going sustainable.
              </p>
            </div>
            <div className="lg:col-span-1 col-span-3">
              <h1 className="text-3xl font-medium md:mt-12 mt-4 mb-3">
                Company facts
              </h1>
              <table class="table-auto w-full md:text-xl text-md lg:mb-0 mb-6">
                <tbody>
                  <tr>
                    <td className="text-bold">Website</td>
                    <td className="text-right">Domain</td>
                  </tr>
                  <tr class="bg-emerald-200">
                    <td className="text-bold">Founded</td>
                    <td className="text-right">Year</td>
                  </tr>
                  <tr>
                    <td className="text-bold">Employees</td>
                    <td className="text-right">Number</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-span-3">
              <img
                src="https://www.joingreet.com/static/media/volta.edcd866b.png"
                alt="company"
              />
              <p className="pt-2 text-gray-500">
                Volta Greentech co-founders Fredrik Åkerman and Angelo Demeter
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminProfile;
