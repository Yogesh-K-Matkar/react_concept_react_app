const FilterSection = (props) => {
  console.log("1");

  const {
    countriesData,
    search,
    filter,
    searchCountry,
    filterCountry,
    sortCountries,
  } = props;

  const uniqueRegions = Array.from(
    new Set(countriesData.map((country) => country.region))
  );

  const handleInputChange = (ev) => {
    ev.preventDefault();
    const searchText = ev.target.value;
    searchCountry(searchText);
  };

  const handleSelectChange = (ev) => {
    ev.preventDefault();
    const filterSelected = ev.target.value;
    filterSelected && filterCountry(filterSelected);
  };

  const handleSortCountries = (ev) => {
    ev.preventDefault();
    const sortType = ev.target.value;
    sortType && sortCountries(sortType);
  };

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => handleInputChange(e)}
      />
      <button value="asc" onClick={(e) => handleSortCountries(e)}>
        ASC
      </button>
      <button value="desc" onClick={(e) => handleSortCountries(e)}>
        DESC
      </button>
      <div>
        <select
          className="select-section"
          value={filter}
          onChange={(e) => handleSelectChange(e)}
        >
          <option value="all">All</option>
          {uniqueRegions.map((region, index) => {
            return (
              <option key={index} value={region}>
                {region}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
};

export default FilterSection;
