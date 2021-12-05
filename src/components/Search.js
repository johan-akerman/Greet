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
      className="appearance-none h-12 text-lg block w-1/3 text-gray-700 border-2 border-black rounded-lg py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:border-4"
      placeholder="Search candidate . . ."
      title="Type in a name"
      onChange={(e) => search(e.target.value)}
    />
  );
}
