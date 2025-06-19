import "./PokemonSeries.css";

export const PokemonCard = (props) => {
  //console.log(props);

  const {
    name,
    sprites,
    types,
    height,
    weight,
    stats,
    base_experience,
    abilities,
  } = props.pokemonData;

  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={sprites.other.dream_world.front_default}
          alt={name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>{types.map((curType) => curType.type.name).join(", ")}</p>
      </div>
      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>Height:</span> {height}
        </p>
        <p className="pokemon-info">
          <span>Weight: </span>
          {weight}
        </p>
        <p className="pokemon-info">
          <span>Speed:</span>
          {
            stats.filter((statsInfo) => statsInfo.stat.name == "speed")[0]
              .base_stat
          }
        </p>
      </div>
      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{base_experience} </p>
          <span>Experience: </span>
        </div>
        <div className="pokemon-info">
          <p>
            {
              stats.filter((statsInfo) => statsInfo.stat.name == "attack")[0]
                .base_stat
            }
          </p>

          <span>Attack: </span>
        </div>
        <div className="pokemon-info">
          <p>
            {abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .join(", ")}
          </p>
          <span>Abilities:</span>
        </div>
      </div>
    </li>
  );
};
