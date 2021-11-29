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
    <input
      className="bg-light appearance-none h-12 text-lg border rounded-lg block w-1/2 text-gray-700 py-3 px-4 mb-8 leading-tight focus:outline-none"
      type="text"
      placeholder="Search candidate . . ."
      title="Type in a name"
      onChange={(e) => search(e.target.value)}
    />
  );
}
