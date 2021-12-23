import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search({ list, handleSearch }) {
  function search(input) {
    const filter = input.toUpperCase();

    var tmp = [];
    list.forEach((item) => {
      if (item.data().candidate.name.toUpperCase().indexOf(filter) > -1) {
        tmp.push(item);
      }
    });

    handleSearch(tmp);
  }

  return (
    <div class="relative w-full">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute top-4 left-4 text-gray-600 "
      />

      <input
        className="bg-light h-12 w-2/3 text-lg block text-gray-700 rounded-lg py-3 pl-12 px-4 leading-tight focus:outline-none"
        placeholder="Search candidate . . ."
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
}
