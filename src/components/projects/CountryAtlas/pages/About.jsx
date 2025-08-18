import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>

      <div className="gradient-cards">
        {countryFacts.map((currCountry, countryIndex) => {
          return (
            <CountryFacts
              key={countryIndex}
              id={countryIndex}
              country={currCountry}
            />
          );
        })}
      </div>
    </section>
  );
};

const CountryFacts = (props) => {
  const { id, country } = props;
  const { countryname, capital, population, interestingFacts } = country;
  return (
    <div key={id} className="card">
      <div className="container-card bg-blue-box">
        <p className="card-title">{countryname}</p>
        <p>
          <span className="card-description">Capital:</span>
          {capital}
        </p>
        <p>
          <span className="card-description">Population:</span>
          {population}
        </p>
        <p>
          <span className="card-description">Interesting Facts:</span>
          <br />
          {interestingFacts.map((fact, index) => {
            return (
              <span key={index}>
                {index + 1}. {fact}
                <br />
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default About;
