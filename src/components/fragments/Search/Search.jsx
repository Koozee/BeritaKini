import { useState } from "react";

const Search = ({ data, setFilteredData }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setQuery(searchTerm);

    // Filter berdasarkan title
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );

    setFilteredData(filtered); // Update data hasil pencarian
  };

  return (
    <div className="relative lg:w-1/3 flex items-center justify-between border-2 rounded-lg px-5 py-3">
      <label className="sr-only" htmlFor="search">search</label>
      <input
        className="w-[90%] focus:outline-0 placeholder:text-sm lg:placeholder:text-base"
        type="text"
        name="search"
        id="search"
        placeholder="Cari disini..."
        value={query}
        onChange={handleSearch}
      />
      <div className="right-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div>
    </div>
  );
};

export default Search;
