import { useEffect, useState, useTransition } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { getCountryData, getCountryDataByName } from "../api/calling.js";
import Loader from "../components/UI/Loader.jsx";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import FilterSection from "../components/UI/FilterSection.jsx";

const Countries = () => {
  const [isPending, startTransition] = useTransition();
  const [countriesData, setCountriesData] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  const [sortOrder, setSortingOrder] = useState("asc");

  useEffect(() => {
    startTransition(async () => {
      const resp = await getCountryData();

      // console.log(resp);
      //console.log(resp.data);

      setCountriesData(resp.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  console.log(search, filter);

  let filteredCountries = countriesData;

  //search logic

  const searchCountry = (searchText) => {
    setSearch(searchText);
  };

  const countrySearch = (country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase())
      ? true
      : false;
  };

  if (search) {
    filteredCountries = filteredCountries.filter((country) =>
      countrySearch(country)
    );
  }

  //filter logic
  const filterRegion = (filterSelected) => {
    setFilter(filterSelected);
  };

  const regionFilter = (country) => {
    return country.region.toLowerCase() === filter.toLowerCase() ? true : false;
  };

  if (filter !== "" && filter !== "all") {
    filteredCountries = filteredCountries.filter((country) =>
      regionFilter(country)
    );
  }

  //sort logic

  const sortCountries = (sortType) => {
    setSortingOrder(sortType);
  };

  filteredCountries = filteredCountries.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.common.localeCompare(b.name.common);
    } else {
      return b.name.common.localeCompare(a.name.common);
    }
  });

  return (
    <section className="country-section">
      <FilterSection
        countriesData={countriesData}
        search={search}
        filter={filter}
        searchCountry={searchCountry}
        filterCountry={filterRegion}
        sortCountries={sortCountries}
      />
      <ul className="grid grid-four-cols">
        {filteredCountries.map((country, index) => {
          return <Country key={index} id={index} countryData={country} />;
        })}
      </ul>
    </section>
  );
};

const Country = (props) => {
  const { id, countryData } = props;
  const { name, flags, population, region, capital } = countryData;

  return (
    <li key={id} className="country-card card">
      <div className="container-card bg-white-box">
        <img src={flags.svg} alt={flags.alt} />
        <div className="countryInfo">
          <p className="card-title">
            {name.common.length > 15
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </p>
          <p>
            <span className="card-description">Population:</span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region:</span> {region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {capital.join(", ")}
          </p>
        </div>
        <NavLink to={`/country/${name.common}`}>
          <button className="btn btn-darken btn-inline bg-white-box">
            Read More <FaLongArrowAltRight />
          </button>
        </NavLink>
      </div>
    </li>
  );
};

export const CountryDetails = () => {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState();

  useEffect(() => {
    startTransition(async () => {
      const resp = await getCountryDataByName(params.countryname);
      console.log(resp);

      if (resp.status === 200) {
        console.log(resp.data[0]);
        setCountryData(resp.data[0]);
      }
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  if (countryData === undefined) {
    return <p>Country not found</p>;
  }

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {countryData && (
          <div className="country-image grid grid-two-cols">
            <img
              src={countryData.flags.svg}
              alt={countryData.flags.alt}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title">
                {countryData.name.common.length > 15
                  ? countryData.name.common.slice(0, 10) + "..."
                  : countryData.name.common}
              </p>
              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Names:</span>
                  {Object.keys(countryData.name.nativeName)
                    .map((key) => countryData.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Population:</span>
                  {countryData.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description">Region:</span>
                  {countryData.region}
                </p>
                <p>
                  <span className="card-description">Sub Region:</span>
                  {countryData.subregion}
                </p>
                <p>
                  <span className="card-description">Capital:</span>
                  {countryData.capital.join(", ")}
                </p>
                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {countryData.tld.join(", ")}
                </p>
                <p>
                  <span className="card-description">Currencies:</span>
                  {Object.keys(countryData.currencies)
                    .map((key) => countryData.currencies[key].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages:</span>
                  {Object.keys(countryData.languages)
                    .map((key) => countryData.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
            <div></div>
            <div className="country-card-backBtn">
              <button onClick={() => navigate(-1)}>
                <FaLongArrowAltLeft />
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Countries;
